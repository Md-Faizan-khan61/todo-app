import { useState } from 'react'
import './App.css'
import Profile from './spreadoper'
import Todoinput from './todoinput'
import TodoList from './todoList'
function App() {
  const [list , Setlist] = useState([])
  const addList = (listItem) => {
    if(listItem !== ""){
    Setlist([...list , listItem])
    }
  }
const deleteItem = (key) => {
  let newListTodo = [...list];
  newListTodo.splice(key,1)
  Setlist([...newListTodo])
}   
  return (
      <div>
       {/* <Profile /> */}
      <Todoinput addList={addList}/>
      <h2>Todo List</h2>
      <hr/>
      {
        list.map((item,i)=>
            <TodoList items={item} key={i} index={i} dltitem={deleteItem}/>
        )
      }
      </div>
  )
}

export default App
