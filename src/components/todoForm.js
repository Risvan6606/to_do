import React, { useState } from "react";


export const TodoForm=({addTodo})=>{
    const [value,setValue]=useState("")
    const handleSubmit = e=>{
        e.preventDefault();
        if(value.trim() == ""){
            alert("value cannot be null")
        }else{
            addTodo(value)
            setValue('')
        }
        console.log(value.length)
    }
    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" value=
            {value} placeholder="what is the task today?" onChange=
            {(e)=>setValue(e.target.value)}/>
            <button type="submit" className="todo-btn">
                Add task
            </button>
        </form>
    )
}