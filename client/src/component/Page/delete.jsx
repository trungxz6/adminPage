import React from 'react'
import Header from '../Header/header' 
import Navbar from '../NavBar/navbar' 
import DeleteUser from '../User/deleteUser'
import DeleteProduct from '../Product/deleteProduct'


const DeletePage = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <DeleteProduct/>
    </div>
  )
}

export default DeletePage