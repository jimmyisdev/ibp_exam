"use client"
import { useStateContext } from '@/context';
import React, { useEffect, useState } from 'react'
import Cart_item from './Cart_tsx/Cart_item';


export default function Sidebar_sect() {
    const { buyList, setBuyList, showSidebar, setShowSidebar } = useStateContext();
    // useEffect(() => {
    //     function calcTotal() {
    //         const sumWithInitial = buyList.reduce(
    //             (accumulator, currentValue) => accumulator + currentValue,
    //             0,
    //         );
    //     }
    //     calcTotal()

    // }, [buyList.length])



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
                            <Cart_item data={item} key={item.name} />)
                    })

                }
            </ul>
            <div className='flex flex-col justify-center items-center m-4'>
                <button className='text-xl'>Confirm</button>
            </div>
        </div>
    )
}
