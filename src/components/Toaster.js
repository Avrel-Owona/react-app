import React, {useState} from 'react';

const Toaster = () => {
    const [list, setList] = useState([])
    console.log('Toaster', list)
    let toasterProperties = null
    const showToaster = () => {
        toasterProperties = {
            id : 1,
            title : 'Success',
            description : 'This is success toaster',
            className : 'bg-green-400 text-white'
        }
        setList([toasterProperties])
    }
    return (
        <div>
            <button onClick={()=>showToaster()} className='px-6 mt-40 py-3 bg-black text-white'>Toaster</button>
            {/*<ToastList toastList={list}/>*/}
        </div>
    );
};

export default Toaster;