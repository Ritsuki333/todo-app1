import { motion } from "framer-motion";
import Button from "../atoms/Button";

const TodoItem = (props) => {
  return (
    <motion.div
      className={`flex justify-between items-center p-2 rounded-md w-64 ${props.className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <span>{props.text}</span>
      <Button
        label="削除"
        onClick={props.onDelete}
        className="text-sm bg-red-400 text-white px-2 py-1 rounded hover:bg-red-600"
      />
    </motion.div>
  );
};

export default TodoItem;