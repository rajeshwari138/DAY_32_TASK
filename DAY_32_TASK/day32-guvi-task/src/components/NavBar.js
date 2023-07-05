import React from 'react'

function NavBar() {
  return<>
  <nav className='main'>
    <div className=' d-flex justify-content-between align-items-center'>
        <div className=' text-white ps-2'>Library Management System</div>
        <div className=' text-white pe-2'>Admin<img src="https://img.icons8.com/ios/50/FFFFFF/admin-settings-male.png"  alt='admin' className=" rounded-circle p-1" style={{width:"3rem"}}/></div>
    </div>
  </nav>
  </>
}

export default NavBar