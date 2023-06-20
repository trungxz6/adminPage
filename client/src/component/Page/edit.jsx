import React from 'react'
import Header from '../Header/header' 
import Navbar from '../NavBar/navbar' 
import EditUser from '../User/editUser'
import EditProduct from '../Product/editProduct'


const EditPage = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <EditProduct/>
    </div>
  )
}

export default EditPage