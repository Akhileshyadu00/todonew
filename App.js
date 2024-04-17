import React, { useState } from 'react'
import "./App.css"
import TodoInput from './components/TodoInput'
import Todolist from './components/TodoList';
function App() {
  const [listTodo,setListTodo]=useState([]);
  let addList = (inputText)=>{
    if(inputText!=='')
      setListTodo([...listTodo,inputText]);
  }
  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return (
    <div className="main">
      <div className="center">
      <h1 className="app-heading">Enter Your Task</h1>
      <hr/>
      <br></br>
      
        <TodoInput addList={addList}/>
        
        
        {listTodo.map((listItem,i)=>{
          return (
            <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}
      </div>
    </div>
  )
}

export default App