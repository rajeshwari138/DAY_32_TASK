import React from "react";
import {  Route, Routes } from "react-router-dom";
import "./App.css";
import Addbook from "./components/Addbook";
import Dashboard from "./components/Dashboard";
import ViewBook from "./components/ViewBook";
import Edit from "./components/Edit";
import Login from "./components/Login";
import Portal from "./components/Portal";

function App() {
  return (
    <>
    
          
    
          
           <Routes>
           <Route path="/" element={<Login />} />
          <Route path="/portal" element={<Portal />}>
           <Route index element={<Dashboard />}/>
           <Route path="dashboard" element={<Dashboard />}/>
           <Route path="add-book" element={<Addbook />}/>
           <Route path="view-book/:id" element={<ViewBook />}/>
           <Route path="edit-book/:id" element={<Edit />}/>
           
            </Route>
           </Routes>
         
      
     

    </>
  );
}

export default App;
