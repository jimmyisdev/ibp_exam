"use client"
import React, { useState } from 'react'
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function About_sect() {
    const [isShow, setIsShow] = useState(false)
    return (
        <div className='flex flex-col justify-between mb-8'>
            <h1 className='text-xl mb-4 font-bold'>ABOUT iBUYPOWER GEAR STORE</h1>
            <span className='text-base  mb-4'>Frequently Asked Questions</span>
            <span className='text-base  mb-4'>What equipment do you need to be a gamer?</span>
            {
                isShow && (
                    <>
                        <span className='text-base  mb-4'>
                            Every great gaming setup starts with a custom gaming PC. Whether you use our EasyBuilder tool, select a prebuilt RDY system, customize an Intel or AMD system, or choose one of our high-end laptops, we have solutions for every budget and style.
                        </span >
                        <span className='text-base  mb-4'>
                            What is the best gaming equipment?
                        </span >
                        <span className='text-base  mb-4'>
                            Once you’ve decided on the best gaming computer for you, you’ll also want to purchase one of the best gaming monitors in our gear store. Resolution quality is very important to get the most out of your PC gaming experience.
                        </span >
                        <span className='text-base  mb-4'>
                            We also offer keyboards, headsets, and other accessories to compliment your perfect battlestation. Whatever PC gaming hardware you’re looking for, we have gaming peripherals, gaming chairs, and other PC accessories to suit your needs.
                        </span >
                        <span className='text-base  mb-4'>
                            For the ultimate gaming experience, look into upgrades such as external storage to help back up all your save files, and grabbing some iBUYPOWER apparel for maximum comfort during those marathon sessions.
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
