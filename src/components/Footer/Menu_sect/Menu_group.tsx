"use client"
import React, { useEffect, useState } from 'react'
import { FaMinus, FaPlus } from "react-icons/fa6";
import ListLink from '@/components/List/ListLink';

export default function Menu_group({ title = '', listData = [] }: { title: string, listData: string[] }) {
    const [isShow, setIsShow] = useState(true)
    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth > 768) {
                setIsShow(true)
            } else {
                title === "Shop" ? setIsShow(true) : setIsShow(false)
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <div className='flex flex-row justify-between'>
                <h1 className='font-bold text-base	mb-2'>{title}</h1>
                <button className='md:invisible' onClick={() => setIsShow(!isShow)}>{isShow ? <FaMinus /> : <FaPlus />}</button>
            </div>
            {
                isShow &&
                <div className='pl-4 md:pl-0'>
                    <ListLink listData={listData} />
                </div>
            }
        </div >
    )
}
