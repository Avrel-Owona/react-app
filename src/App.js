import Navbar from "./components/Navbar";
import {AuthContextProvider} from "./context/authContext";
import ToastList from "./components/ToastList";
import React, {useState} from "react";

function App() {
    const [list, setList] = useState([])
    console.log('Toaster', list)
    let toasterProperties = null
    const showToaster = type => {
        switch (type) {
            case 'Success' :
                toasterProperties = {
                    id: list.length + 1,
                    title: 'Success',
                    description: 'This is success toaster',
                    className: 'bg-green-400 text-white'
                }
                break
            case 'Error' :
                toasterProperties = {
                    id: list.length + 1,
                    title: 'Success',
                    description: 'This is success toaster',
                    className: 'bg-red-400 text-white'
                }
                break
            default:
                toasterProperties = []
        }


        setList([...list, toasterProperties])
    }

  return (
       <AuthContextProvider>
           <ToastList toastList={list} setToasterList={setList}/>
           {/*<div className="absolute bottom-20 left-20">*/}
           {/*    <button onClick={()=>showToaster('Success')} className='px-6 mt-40 py-3 bg-black text-white'>Toaster</button>*/}
           {/*    <button onClick={()=>showToaster('Error')} className='px-6 mt-40 py-3 bg-black text-white'>Toaster</button>*/}
           {/*</div>*/}
           <Navbar/>
       </AuthContextProvider>
  );
}

export default App;
