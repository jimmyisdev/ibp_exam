"use client"
import { pcDataType } from '@/type/pcData';
import React, { createContext, useState } from 'react';


interface stateContextValue {
    buyList: pcDataType[];
    setBuyList: React.Dispatch<React.SetStateAction<pcDataType[]>>,
    searchVal: string;
    setSearchVal: React.Dispatch<React.SetStateAction<string>>,
    showSearch: boolean;
    setShowSearch: React.Dispatch<React.SetStateAction<boolean>>,
    showSidebar: boolean;
    setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>,
}
const StateContext = createContext<stateContextValue | undefined>(undefined);

const StateContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [buyList, setBuyList] = useState<pcDataType[]>([])
    const [searchVal, setSearchVal] = useState<string>('')
    const [showSearch, setShowSearch] = useState(false)
    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <StateContext.Provider
            value={{
                buyList, setBuyList,
                searchVal, setSearchVal,
                showSearch, setShowSearch,
                showSidebar, setShowSidebar
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
