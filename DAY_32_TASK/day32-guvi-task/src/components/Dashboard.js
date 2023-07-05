import React,{ useContext }from 'react'
import Card from './Card'
import UserContext from './contect';


function Dashboard() {
  let context = useContext(UserContext);
  const {update}= context;
  
  return (
    <>
   <div className="container " style={{backgroundColor:"#ADAFB3"}}>
   <div className='row' >
    {
        update.map((item)=>{
            return<>
            <Card data = {item}/>
            </>
        })
    }
       
       

      
    </div>
   </div>
    </>
  )
}

export default Dashboard