import { useState, useEffect } from 'react'
import Axios from "axios"
import React from 'react'


const DeleteUser = () => {

    const [user, setUser] = useState([])
    
    useEffect(()=>{
        const getUser = async () => {
            const respond = await Axios.get("http://localhost:5000/api/user")
            setUser(respond.data.users)
        }
        getUser()
    },[])

    const delUser = (idx) => {
        const delItem = user[idx-1]
        const id = user.findIndex((item) => item._id === delItem._id)
        console.log(user[id]._id)
        Axios.delete(`http://localhost:5000/api/user/${user[id]._id}`).then((rs)=>{
            if(rs){
                setUser((prev)=>{
                  return prev.filter(item => item._id !== user[id]._id)
                })  
            }
          }) 
      }

  return (
    <div className="userPage">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <h1>Delete User</h1>
        <div className="table">
            <h3>
                <div className='title'>User Data<span class="material-symbols-outlined">table</span></div>
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
                {user.map((item, id)=>{
                return(          
                    <div className="tableRow">
                        <div className="colTitle colTitle1">{item._id}</div>
                        <div className="colTitle colTitle2">{item.email}</div>
                        <div className="colTitle colTitle3">{item.name}</div>
                        <div className="colTitle colTitle4">{item.password}</div>
                        <div className="colTitle colTitle5">{item.role}</div>
                        <div className="colTitle colTitle5"><button onClick={()=>delUser(id+1)}>delete</button></div>
                    </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default DeleteUser