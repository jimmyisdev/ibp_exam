"use client"
import { useStateContext } from '@/context';
import React, { useEffect, useState } from 'react'

export default function Search_sect() {
    const { setSearchVal } = useStateContext();
    const [inputVal, setInputVal] = React.useState("");
    const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        setInputVal(event.currentTarget.value);
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setSearchVal(inputVal);
        }, 800);
        return () => clearTimeout(timeoutId);
    }, [inputVal, 800]);

    return (
        <div className="bottom-0 top-0 w-full ">
            <input
                className="w-full p-4 outline-none text-base bg-customized-blue-2"
                placeholder="input product name..."
                value={inputVal}
                onChange={handleInputChange}
            />
        </div>)
}
