import React from "react";
import { useState } from "react";

function Profile() {
    const [user, setUser] = useState({ name: "John", age: "23", role: "SDE-1" })
    const changeName = () => {
         setUser({...user ,name:"Doe"})
    }
    return (
        <>
            <p>User-name :{user.name}</p>
            <p>User-age :{user.age}</p>
            <p>User-role :{user.role}</p>
            <button onClick={()=>changeName()}>Check!</button>
        </>
    )
}

export default Profile