"use client"
import { CiSearch, CiUser, CiShoppingCart } from "react-icons/ci";
import { useStateContext } from "@/context";
import Sidebar_sect from "../Sidebar_sect/Sidebar_sect";

export default function Header() {
    const { showSearch, setShowSearch, showSidebar, setShowSidebar } = useStateContext();
    return (
        <div className="fixed w-full h-20 bg-white z-20 flex flex-col">
            <div className="h-full md:text-center p-4  border-b-2 ">
                <div className="items-center md:flex md:flex-row">
                    <h1 className="font-bold text-headerMain-mobile  md:text-headerMain md:mr-4">Best Seller Gaming PC</h1>
                    <span className="font-bold text-headerSub-mobile  md:text-headerSub">Prebuilt & Custom</span>
                </div>
                <div className="absolute right-4 top-4">
                    <button className="m-2" onClick={() => setShowSidebar(!showSidebar)}><CiShoppingCart size={30} /></button>
                    <button className="m-2" onClick={() => setShowSearch(!showSearch)}><CiSearch size={30} className={`${showSearch && "text-customized-red"}`} /></button>
                </div>
            </div>
            {showSidebar && <Sidebar_sect />}
        </div>
    )
}
