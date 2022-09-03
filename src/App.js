import Navbar from "./components/Navbar";
import {AuthContextProvider} from "./context/authContext";
import ToastList from "./components/ToastList";
import React, {useState} from "react";
import Header from "./components/Header";

function App() {
    const [list, setList] = useState([])


  return (
       <AuthContextProvider>
           <ToastList toastList={list} setToasterList={setList}/>
           <Navbar/>
       </AuthContextProvider>
  );
}

export default App;
