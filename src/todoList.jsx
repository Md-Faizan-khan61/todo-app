import React, { useState } from "react"
function TodoList(props) {
    return(
        <div>
            <ul style={{background:"gray", color:"white",display:"flex", justifyContent:"space-between",height:"25px"}}>{props.items}
            <span style={{marginRight:"4px",marginLeft:"8px"}}>
            {/* <span><input type="checkbox"></input></span>    */}
            <i className="fa-solid fa-trash-can icon-delete" 
            onClick={()=>{props.dltitem(props.index)}}
            ></i>     
           </span>
            </ul>
            
         </div>
    )
}
export default TodoList