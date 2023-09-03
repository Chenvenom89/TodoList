import Todo from "./Todo"
import React from "react"

export default function TodoList({todos,toggleTodo}) {
  return (
   
        todos.map(todo =>{
            return<Todo key={todo.id} toggleTodo = {toggleTodo} todo={todo}/>
        }) 
       
  )
}
