"use client"
import { MdDeleteForever } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";
import { pcDataType } from '@/type/pcData'
import React, { useEffect, useState } from 'react'
import { useStateContext } from "@/context";

export default function Cart_item({ data }: { data: pcDataType }) {
    const { buyList, setBuyList, showSidebar, setShowSidebar } = useStateContext();
    const [amount, setAmount] = useState(1)
    function handleDeleteBtn(id: number) {
        let newList = buyList.filter(item => item.id !== id)
        setBuyList(newList)
    }
    useEffect(() => {
        if (amount <= 0) {
            handleDeleteBtn(data.id)
        }
    }, [amount])

    return (
        <li key={data.id} className='mb-4 border-b-2'>
            <div className='flex flex-col'>
                <span className='font-bold flex flex-row justify-between'>
                    <span>
                        {data.name}
                    </span>
                    <span>
                        {amount}
                    </span>
                </span>
                <span className='ml-2'>${data.discountInfo.discountPrice}</span>
            </div>
            <div className='mt-2 w-full flex flex-row justify-around mb-2'>
                <button onClick={() => setAmount(amount + 1)}><FaPlus size={15} /></button>
                <button onClick={() => setAmount(amount - 1)}><FaMinus size={15} /></button>
                <button onClick={() => handleDeleteBtn(data.id)}><MdDeleteForever size={20} /></button>
            </div>
        </li>)
}
