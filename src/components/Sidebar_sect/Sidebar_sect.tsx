"use client"
import { useStateContext } from '@/context';
import Cart_item from './Cart_item.tsx/Cart_item';
import { useEffect, useState } from 'react';
import Button from '../Button/Button';

export default function Sidebar_sect() {
    const { buyList, showSidebar, setShowSidebar } = useStateContext();
    const [totalPrice, setTotalPrice] = useState(0)
    function handleTotalPrice() {
        let currentTotalPrice = buyList.reduce((total, item) => {
            let itemTotal = Number(item.amount) * Number(item.discountInfo.discountPrice)
            return total + itemTotal
        }, 0)
        setTotalPrice(currentTotalPrice)
    }
    useEffect(() => {
        handleTotalPrice()
    }, [buyList.length])

    return (
        <div className='absolute top-20 right-0 bg-customized-blue-2 w-64 h-screen   z-18 border-l-2  p-4'>
            <div className=' text-center mb-4'>
                <h1 className='text-xl font-bold'>Buy List</h1>
                <button className='absolute top-6 right-4' onClick={() => setShowSidebar(!showSidebar)}>X</button>
            </div>
            <ul className='h-1/2 overflow-scroll'>
                {buyList.length === 0 && <li className='text-center'>Your list is empty</li>}
                {buyList.length !== 0 &&
                    buyList.map(item => {
                        return (
                            <Cart_item data={item} key={item.name} calcTotal={handleTotalPrice} />)
                    })

                }
            </ul>
            {!!totalPrice && <div className='flex flex-col justify-center items-center m-4'>
                <span className='text-xl'>${totalPrice}</span>
            </div>}
            {!!totalPrice &&
                <fieldset className='flex flex-col justify-center  m-4'>
                    <legend className='mb-2 text-xl font-bold text-center'>Payment</legend>
                    <div className='mb-2 flex flex-row items-center'>
                        <input className='mr-2' type="radio" id="visa" name="payment" value="visa" checked />
                        <label htmlFor="visa">Visa</label>
                    </div>
                    <div className='mb-2 flex flex-row items-center'>
                        <input className='mr-2' type="radio" id="master" name="payment" value="master" checked />
                        <label htmlFor="master">Master</label>
                    </div>
                    <div className='mb-2 flex flex-row items-center'>
                        <input className='mr-2' type="radio" id="paypal" name="payment" value="paypal" checked />
                        <label htmlFor="paypal">PayPal</label>
                    </div>
                </fieldset >
            }
            <div className='flex flex-col justify-center items-center m-4'>
                <Button name='Confirm' />
            </div>
        </div >
    )
}
