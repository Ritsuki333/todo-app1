
const Input = (props) => {
    return(
        <input 
            className = "border p-2 rounded w-64"
            type = {props.type ||"text"}
            value = {props.value}
            onChange = {props.onChange}
            placeholder = {props.placeholder}
            autoFocus = {props.autoFocus}
            onKeyDown = {props.onKeyDown}
        />
    )

}

export default Input;
