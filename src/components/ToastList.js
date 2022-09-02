import React, {useCallback, useEffect} from 'react';

const ToastList = ({toastList, setToasterList}) => {

    const deleteToaster = useCallback(id => {
        const toastListItem = toastList.filter(e => e.id !== id)
        setToasterList(toastListItem)
    },[toastList])

    useEffect(()=> {
        const interval = setInterval(()=> {
            if (toastList.length){
                deleteToaster(toastList[0].id)
            }
        }, 3000)
        return ()=> clearInterval(interval)
    },[toastList])

    return (
        <div className='absolute top-10 right-10 hover:shadow-lg ease-in duration-100 button-right'>
            {
                toastList.map((toaster, i) => {

                    return (
                        <div className={`${toaster.className} flex shadow-2xl flex-col w-80 relative px-4 py-3 button-right`} key={i}>
                            <button className='text-2xl font-bold absolute right-4 top-3 border' onClick={()=>deleteToaster(toaster.id)} >X</button>
                            <span className='mt-4 text-xl font-bold'>{toaster.title}</span>
                            <span className='mb-3'>{toaster.description}</span>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ToastList;