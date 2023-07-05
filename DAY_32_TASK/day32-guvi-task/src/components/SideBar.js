
import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <nav style={{
      backgroundColor: "#3C4680",
      width:"15rem",
    minHeight:"100%",
   
    
     
    }}>
       
       <div >
       <Link className='w-100 d-flex justify-content-center'to="/portal/dashboard" style={{textDecoration: 'none'}}><button className='btns mt-5'>Dashboard</button></Link>
        <Link className='w-100 d-flex justify-content-center' to="/portal/add-book" style={{textDecoration: 'none'}}><button className='btns'>Add book</button></Link>
        
       </div>
        
    </nav>
  )
}

export default SideBar