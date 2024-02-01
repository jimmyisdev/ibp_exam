"use client"
import { MdDeleteForever } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";
import React, { memo, useEffect } from 'react'
import { useStateContext } from "@/context";
import { BuyListItemType } from "@/type/BuyListItem";

function Cart_item({ data, calcTotal }: { data: BuyListItemType, calcTotal: () => void }) {
    const { buyList, setBuyList } = useStateContext();
    const { id, name, amount, discountInfo } = data
    function handleDeleteBtn(id: number) {
        let newList = buyList.filter(item => item.id !== id)
        setBuyList(newList)
    }
    function handleAmountBtn(action = "", id: number) {
        let updatedList = buyList.map(item => {
            if (item.id === id) {
                if (action === "plus") {
                    item.amount++
                } else if (action === "minus") {
                    item.amount--
                }
                return item
            } else {
                return item
            }
        })
        setBuyList(updatedList)
    }
    useEffect(() => {
        if (amount <= 0) {
            handleDeleteBtn(data.id)
        }
    }, [amount])
    useEffect(() => {
        if (buyList.length) {
            calcTotal()
        }
    }, [amount])


    return (
        <li key={id} className='mb-4 border-b-2'>
            <div className='flex flex-col'>
                <span className='font-bold flex flex-row justify-between'>
                    <span>
                        {name}
                    </span>
                    <span>
                        {amount}
                    </span>
                </span>
                <span className='ml-2'>${discountInfo.discountPrice}</span>
            </div>
            <div className='mt-2 w-full flex flex-row justify-around mb-2'>
                <button onClick={() => handleAmountBtn("plus", id)}><FaPlus size={13} /></button>
                <button onClick={() => handleAmountBtn("minus", id)}><FaMinus size={13} /></button>
                <button onClick={() => handleDeleteBtn(data.id)}><MdDeleteForever size={13} /></button>
            </div>
        </li>)
}

export default memo(Cart_item)
