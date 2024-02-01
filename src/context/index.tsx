"use client"
import React, { createContext, useState } from 'react';


interface stateContextValue {
    buyList: string[];
    setBuyList: React.Dispatch<React.SetStateAction<string[]>>,
    searchVal: string;
    setSearchVal: React.Dispatch<React.SetStateAction<string>>,
}
const StateContext = createContext<stateContextValue | undefined>(undefined);

const StateContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [buyList, setBuyList] = useState<string[]>([])
    const [searchVal, setSearchVal] = useState<string>('')

    return (
        <StateContext.Provider
            value={{
                buyList, setBuyList,
                searchVal, setSearchVal

            }
            }
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
