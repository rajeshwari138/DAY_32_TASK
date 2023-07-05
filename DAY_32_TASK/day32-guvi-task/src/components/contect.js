import { useNavigate } from "react-router-dom";
import axios from "axios";

import { createContext, useEffect, useState } from "react";



let UserContext = createContext();


export const UserProvider = ({children}) => {
 
 const  [update,setUpdate] = useState([]);
 const [deleteLoading,setDeleteLoading] = useState(false);
 const [addLoading,setAddLoading] = useState(false);
 const [putLoading,setPutLoading] = useState(false);
 let navigate = useNavigate()
    
    useEffect(()=>{
        getData()
    },[])
    const getData = async ()=>{
       let value =  await axios.get("https://630f267c379256341888b141.mockapi.io/library")
       setUpdate(value.data)
    }
  const postData =async (values)=>{
    setAddLoading(true)
    let val =   await axios.post("https://630f267c379256341888b141.mockapi.io/library",values)
  if(val.status===201){
    await getData()
    setAddLoading(false)
    navigate("/portal/dashboard")
  }
  }

  const deleteData =async (id)=>{
    setDeleteLoading(true)
    let val =   await axios.delete(`https://630f267c379256341888b141.mockapi.io/library/${id}`)
  if(val.status===200){
    await getData()
    setDeleteLoading(false)
    navigate("/portal/dashboard")
  }
  }

  const putData =async (values,id)=>{
    setPutLoading(true)
    let val =   await axios.put(`https://630f267c379256341888b141.mockapi.io/library/${id}`,values)
  if(val.status===200){
    await getData()
    setPutLoading(false)
    navigate("/portal/dashboard")

  }

  }

  return (

    <UserContext.Provider value={{postData,update,deleteData,getData,deleteLoading,addLoading,putData,putLoading}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
