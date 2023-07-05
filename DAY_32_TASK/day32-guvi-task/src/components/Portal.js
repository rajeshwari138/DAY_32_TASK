import React from 'react'
import { Outlet} from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
const Portal = () => {
  return (
    <>

<div className="container-fluid p-0">
        <NavBar />
        <div className="d-flex">
          <div className="a">
            <SideBar />
           
          </div>

          <div className="w-100" style={{backgroundColor:"#ADAFB3"}}>
          


< Outlet/>
                  
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Portal