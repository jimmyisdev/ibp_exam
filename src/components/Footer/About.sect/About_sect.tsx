"use client"
import React, { useState } from 'react'
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function About_sect() {
    const [isShow, setIsShow] = useState(false)
    return (
        <div className='flex flex-col justify-between mb-8 max-2/3'>
            <h1 className='text-xl mb-4 font-bold'>ABOUT IBP GEAR STORE</h1>
            <span className='text-base  mb-4'>Frequently Asked Questions</span>
            <span className='text-base  mb-4'>What equipment do you need to be a gamer?</span>
            {
                isShow && (
                    <>
                        <span className='text-base  mb-4'>
                            Every great gaming setup starts with a custom gaming PC. Whether you use our EasyBuilder tool, select a prebuilt RDY system, customize an Intel or AMD system, or choose one of our high-end laptops, we have solutions for every budget and style.
                        </span >
                        <span className='text-base  mb-4'>
                            What is the est gaming equieqepment?
                        </span >
                        <span className='text-base  mb-4'>
                            Once you’ve decideded oern the best gaming computer forde you, you’ll also want to purchne of tbest gamitors in our gear seetore. Resolution quality is very impeto get the mt of yC gamrwqr erience.
                        </span >
                        <span className='text-base  mb-4'>
                            We also offer keybeeoards, headddsets, and other accessories to compliment your perfect battlestation. Whatever PC gaming hardware you’re lodfeok ing for, we have gam ingeerals, gaming chais, and other PC accessories to su ityour needs.
                        </span >
                        <span className='text-base  mb-4'>
                            For deltimate gamd ing experied nce, look into upgrades such as external stoege tdehelp back up all your save files, and grabbing some IBP apparel for maximum comfort during those marathon sessions.
                        </span >
                    </>
                )
            }
            <button className='flex flex-row items-center my-10 text-base hover:font-bold' onClick={() => setIsShow(!isShow)}>
                {isShow ? (<FaMinus />) : <FaPlus />}
                <span className='ml-2'>{isShow ? "Show less" : "Show more"}</span>
            </button>
            <hr />
        </div>
    )
}
