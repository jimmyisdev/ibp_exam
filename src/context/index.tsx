"use client"
import { BuyListItemType } from '@/type/BuyListItem';
import { pcDataType } from '@/type/pcData';
import React, { createContext, useState } from 'react';


interface stateContextValue {
    buyList: BuyListItemType[];
    setBuyList: React.Dispatch<React.SetStateAction<BuyListItemType[]>>,
    searchVal: string;
    setSearchVal: React.Dispatch<React.SetStateAction<string>>,
    showSearch: boolean;
    setShowSearch: React.Dispatch<React.SetStateAction<boolean>>,
    showSidebar: boolean;
    setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>,
}
const StateContext = createContext<stateContextValue | undefined>(undefined);

const StateContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [buyList, setBuyList] = useState<BuyListItemType[]>([])
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
