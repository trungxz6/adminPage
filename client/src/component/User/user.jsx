import { useState, useEffect } from 'react'
import Axios from "axios"
import React from 'react'

const User = () => {

    const [user, setUser] = useState([])

    useEffect(()=>{
      const getUser = async () => {
        const respond = await Axios.get("http://localhost:8000/api/product")
        setUser(respond.data)
      }
      getUser()
    },)



  return (
    <div className="userPage">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <h1>User</h1>
        <div className="table">
            <h3>
                <div className='title'>User Data<span class="material-symbols-outlined">table</span></div>
                <input type="text" placeHolder="Search" />
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

export default User