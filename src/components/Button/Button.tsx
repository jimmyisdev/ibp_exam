import { memo, useCallback } from "react"

function Button({ name = "Click", size = "", action = (...args: any[]) => { } }: { name?: string, size?: string, action?: (...args: any[]) => void }) {
    const handleClick = useCallback(() => {
        action();
    }, [action]);
    return (

        <button
            className={`
            text-black px-2 py-2  shadow-md rounded
            bg-white
            transition  ease-in-out
            hover:transition-all
            hover:text-white hover:bg-customized-gray-1 
            duration-300
            m-1
            ${size === "half" ? "w-8" : "w-16"}
         `}
            onClick={handleClick}
        >
            {name}
        </button>
    )
}

export default memo(Button)