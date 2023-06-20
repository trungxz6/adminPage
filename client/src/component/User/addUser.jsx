import { useState, useEffect } from 'react'
import Axios from "axios"
import React from 'react'


const AddUser = () => {

    const [user, setUser] = useState([])
    const [addName, setAddName] = useState('')
    const [addEmail, setAddEmail] = useState('')
    const [addPassword, setAddPassword] = useState('')
    const [addRole, setAddRole] = useState('')
    
    useEffect(()=>{
        const getUser = async () => {
            const respond = await Axios.get("http://localhost:5000/api/user")
            setUser(respond.data.users)
        }
        getUser()
    },[])
    
    const addUser = async () => {
        const newUser = {
            name: addName,
            email: addEmail,
            password: addPassword,
            role: addRole,
        }
        setUser([...user,newUser])
        const respond = Axios.post("http://localhost:5000/api/user/add",newUser).then((rs)=>{
            if(rs){
                setUser([...respond.data.users,newUser])
            }
        })
        setAddName('')
        setAddEmail('')
        setAddPassword('')
        setAddRole('')
    }
    


  return (
    <div className="userPage">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <h1>Add User</h1>
        <div className="table">
            <h3>
                <div className='title'>User Data<span class="material-symbols-outlined">table</span></div>
                <input type="text" placeHolder="Name..." value={addName} onChange={(e)=>setAddName(e.target.value)}/>
                <input type="text" placeHolder="Email..." value={addEmail} onChange={(e)=>setAddEmail(e.target.value)}/>
                <input type="password" placeHolder="Password..." value={addPassword} onChange={(e)=>setAddPassword(e.target.value)}/>
                <input type="text" placeHolder="Role..." value={addRole} onChange={(e)=>setAddRole(e.target.value)}/>
                <button onClick={addUser}>Add</button>
            </h3>
            <div className="userTable">
                <div className="tableHeader">
                    <div className="colTitle colTitle1">Id</div>
                    <div className="colTitle colTitle2">Email</div>
                    <div className="colTitle colTitle3">Name</div>
                    <div className="colTitle colTitle4">Password</div>
                    <div className="colTitle colTitle5">Role</div>
                </div>
                {user.map((item)=>{
                return(          
                    <div className="tableRow">
                        <div className="colTitle colTitle1">{item._id}</div>
                        <div className="colTitle colTitle2">{item.email}</div>
                        <div className="colTitle colTitle3">{item.name}</div>
                        <div className="colTitle colTitle4">{item.password}</div>
                        <div className="colTitle colTitle5">{item.role}</div>
                    </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default AddUser