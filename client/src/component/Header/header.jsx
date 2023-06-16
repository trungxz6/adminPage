import React from 'react'


const Header = () => {
  
  return (
    <div className="header">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

        <div className="admin">Admin Page</div>
        <div className="user">
          <div>Admin: Trung</div>
          <span class="material-symbols-outlined iconUser">account_circle</span>
          
          {/* <img src="https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fb%2Fx%2Fbx.swank.png&w=640&q=75" alt="he" className="adminPicture"/> */}
        </div>
    </div>
  )
}

export default Header