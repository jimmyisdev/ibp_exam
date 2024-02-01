import { useStateContext } from '@/context';
import React from 'react'

export default function Sidebar_sect() {
    const { buyList, setBuyList, showSidebar, setShowSidebar } = useStateContext();

    return (
        <div className='absolute top-20 right-0 bg-white w-64 h-screen z-50 border-l-2  p-4'>
            <div className=' text-center mb-4'>
                <h1 className='text-xl font-bold'>Buy List</h1>
                <button className='absolute top-6 right-4' onClick={() => setShowSidebar(!showSidebar)}>X</button>
            </div>
            <ul>
                {buyList.length === 0 && <li className='text-center'>Your list is empty</li>}
                {buyList.length !== 0 &&
                    buyList.map(item => {
                        return (
                            <li key={item.id} className='pb-4 flex flex-col'>
                                <span className='font-bold'>{item.name} </span>
                                <span className='ml-2'>${item.discountInfo.discountPrice} </span>
                            </li>
                        )
                    })

                }
            </ul>
            <div className='flex flex-col justify-center items-center m-4'>
                <button className='text-xl'>Confirm</button>
            </div>
        </div>
    )
}
