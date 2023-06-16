import { useState, useEffect } from 'react'
import Axios from "axios"
import React from 'react'


const EditUser = () => {

    const [user, setUser] = useState([])
    const [crrUserEdit, setCrrUserEdit] = useState('')
    
    useEffect(()=>{
        const getUser = async () => {
            const respond = await Axios.get("http://localhost:5000/api/user")
            setUser(respond.data.users)
        }
        getUser()
    },[])

    const handleInput = (idx) => {
        let item = user[idx-1]
        setCrrUserEdit(item)
    }

    const editUser = async () => { 
        const idx = user.findIndex((item) => item._id === crrUserEdit._id)
        if (idx >= 0) {
            user.splice(idx, 1, crrUserEdit);
            Axios.put(`http://localhost:5000/api/user/edit/${user[idx]._id}`, crrUserEdit)
                .then((res)=> this.setUser(res.data.users))
            }
        setUser([...user])
    }
  return (
    <div className="userPage">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <h1>Edit User</h1>
        <div className="table">
            <h3>
                <div className='title'>User Data<span class="material-symbols-outlined">table</span></div>
                <input type="text" placeHolder="Name..." value={crrUserEdit.name} onChange={(e)=>setCrrUserEdit({...crrUserEdit, name: e.target.value})}/>
                <input type="text" placeHolder="Email..." value={crrUserEdit.email} onChange={(e)=>setCrrUserEdit({...crrUserEdit, email: e.target.value})}/>
                <input type="password" placeHolder="Password..." value={crrUserEdit.password} onChange={(e)=>setCrrUserEdit({...crrUserEdit, password: e.target.value})}/>
                <button onClick={editUser}>Change</button>
            </h3>
            <div className="userTable">
                <div className="tableHeader">
                    <div className="colTitle colTitle1">Id</div>
                    <div className="colTitle colTitle2">Email</div>
                    <div className="colTitle colTitle3">Name</div>
                    <div className="colTitle colTitle4">Password</div>
                    <div className="colTitle colTitle5">Role</div>
                    <div className="colTitle colTitle5"></div>
                </div>
                {user.map((item, idx)=>{
                return(          
                    <div className="tableRow">
                        <div className="colTitle colTitle1">{item._id}</div>
                        <div className="colTitle colTitle2">{item.email}</div>
                        <div className="colTitle colTitle3">{item.name}</div>
                        <div className="colTitle colTitle4">{item.password}</div>
                        <div className="colTitle colTitle5">{item.role}</div>
                        <div className="colTitle colTitle5"><button onClick={()=>handleInput(idx+1)}>edit</button></div>
                    </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default EditUser