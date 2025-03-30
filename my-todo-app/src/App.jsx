import React, { useState } from "react";
import Button from "./components/atoms/Button";
import Input from "./components/atoms/Input";
import TodoItem from "./components/molecules/TodoItem";
import { AnimatePresence } from "framer-motion";

const App = () => {
  // 入力欄の状態
  const [inputText, setInputText] = useState("");
  // タスク一覧の状態
  const [todos, setTodos] = useState([]);

  // タスク追加時の処理
  const handleAdd = () => {
    if (inputText.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: inputText }]);
    setInputText("");
  };

  // タスク削除時の処理
  const handleDelete = (id) => {
    // 削除確認ダイアログ
    if (!window.confirm("本当に削除しますか？")) return;
    //
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4 min-h-screen justify-center">
      <Button
        label="追加"
        onClick={handleAdd}
        disabled={inputText.trim() === ""}
      />

      <Input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => {
          if (e.nativeEvent.isComposing) return;
          if (e.key === "Enter") {
            handleAdd();
          }
        }}
      />

      {todos.length === 0 && (
        <p className="text-gray-400 text-sm italic">
          タスクはまだありません。
        </p>
      )}

      <AnimatePresence>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          text={todo.text}
          onDelete={() => handleDelete(todo.id)}
          className = "bg-yellow-100 shadow-md"
        />
      ))}
      </AnimatePresence>
    </div>
  );
};

export default App;