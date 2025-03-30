import React from "react";

const Button = (props) => {
    return (
        <button 
            className = "bg-blue-500 text-white py-2 px-4 rounded-lg disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
            disabled = {props.disabled}
            onClick = {props.onClick}
        >
            {props.label}
            

        </button>
    )
}

export default Button;
