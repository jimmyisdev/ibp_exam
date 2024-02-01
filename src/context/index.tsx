"use client"
import { pcData } from '@/mock/pcData';
import { BuyListItemType } from '@/type/BuyListItem';
import { pcDataType } from '@/type/pcData';
import React, { createContext, useEffect, useState } from 'react';


interface stateContextValue {
    typedList: pcDataType[];
    setTypedList: React.Dispatch<React.SetStateAction<pcDataType[]>>,
    buyList: BuyListItemType[];
    setBuyList: React.Dispatch<React.SetStateAction<BuyListItemType[]>>,
    searchVal: string;
    setSearchVal: React.Dispatch<React.SetStateAction<string>>,
    showSearch: boolean;
    setShowSearch: React.Dispatch<React.SetStateAction<boolean>>,
    showSidebar: boolean;
    setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>,
    handleSelectType: (type?: string) => void
}
const StateContext = createContext<stateContextValue | undefined>(undefined);

const StateContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [typedList, setTypedList] = useState<pcDataType[]>([])
    const [buyList, setBuyList] = useState<BuyListItemType[]>([])
    const [searchVal, setSearchVal] = useState<string>('')
    const [showSearch, setShowSearch] = useState(false)
    const [showSidebar, setShowSidebar] = useState(false)

    function handleSelectType(type?: string) {
        let newList: pcDataType[] = []
        if (type === "prebuilt") {
            newList = pcData.filter((item) => item.type.toLowerCase().includes("prebuilt") === true)
            setTypedList(newList)
        } else if (type === "custom") {
            newList = pcData.filter((item) => item.type.toLowerCase().includes("custom") === true)
            setTypedList(newList)

        } else if (type === "all") {
            setTypedList(pcData)
        } else return
    }

    useEffect(() => {
        handleSelectType('all')
    }, [])


    return (
        <StateContext.Provider
            value={{
                typedList, setTypedList,
                buyList, setBuyList,
                searchVal, setSearchVal,
                showSearch, setShowSearch,
                showSidebar, setShowSidebar,
                handleSelectType
            }}
        >
            {children}
        </StateContext.Provider>
    )
}
const useStateContext = () => {
    const stateContext = React.useContext(StateContext);
    if (stateContext === undefined) {
        throw new Error('useStateContext must be inside stateProvider');
    }
    return stateContext;
};
export { StateContextProvider, useStateContext };
