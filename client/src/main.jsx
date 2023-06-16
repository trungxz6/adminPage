import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddPage from './component/Page/add.jsx'
import EditPage from './component/Page/edit.jsx'
import DeletePage from './component/Page/delete.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
    
      <Routes>

        <Route path='/'>
          <Route path='/' element={<App />}></Route>
          <Route path='/add' element={<AddPage/>}></Route>
          <Route path='/edit' element={<div><EditPage/></div>}></Route>
          <Route path='/delete' element={<div><DeletePage/></div>}></Route>
        </Route>

      </Routes>
    
    </BrowserRouter>
  
  </React.StrictMode>,
)
