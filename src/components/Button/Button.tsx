import { memo, useCallback } from "react"

function Button({ name = "Click", action = (...args: any[]) => { } }: { name?: string, action?: (...args: any[]) => void }) {
    const handleClick = useCallback(() => {
        action();
    }, [action]);
    return (
        <button
            className={`
            text-black px-4 py-2  shadow-md rounded
            bg-white
            hover:text-white hover:bg-customized-gray-1 hover:transition-colors,
            duration-150 ease-in-out
            m-2

         `}
            onClick={handleClick}
        >
            {name}
        </button>
    )
}

export default memo(Button)