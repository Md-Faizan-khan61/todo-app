import React from "react";
import { useState } from "react";

function Todoinput(props) {
    function invoke(){
          props.addList(todo)
          setTodo("")
    }
   const handleEnterkey = (e) => {
        if(e.keyCode === 13){
            props.addList(todo)
            setTodo("")  
        }
    }
    const [todo,setTodo] = useState("")
    return (            
                <div style={{background:"lavenderblush",padding:"4px",}}>  
                    <input 
                    style={{marginRight:"5px", marginLeft:"0px",height:"30px",width:"250px",fontSize:"18px",}} 
                    placeholder="Enter your todo" 
                    type='text' 
                    value={todo} 
                    onChange={(e) => setTodo(e.target.value)}
                    onKeyDown={handleEnterkey}
                    ></input>
                    <button onClick={invoke} style={{color:"royalblue"}} >Add+</button>
                </div>            
    )
}

export default Todoinput