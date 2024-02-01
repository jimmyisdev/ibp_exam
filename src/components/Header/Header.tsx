import { CiSearch, CiUser, CiShoppingCart } from "react-icons/ci";

export default function Header() {
    return (
        <div className="relative text-center p-4  border-b-2 border-black">
            <div className="items-center md:flex md:flex-row">
                <h1 className="font-bold text-headerMain-mobile  md:text-headerMain md:mr-4">Best Seller Gaming PC</h1>
                <span className="font-bold text-headerSub-mobile  md:text-headerSub">Prebuilt & Custom</span>
            </div>
            <div className="absolute right-4 top-4">
                <button className="m-2"><CiUser size={30} /></button>
                <button className="m-2"><CiShoppingCart size={30} /></button>
                <button className="m-2"><CiSearch size={30} /></button>
            </div>
        </div>
    )
}
