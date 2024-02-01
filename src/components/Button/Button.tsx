import { memo, useCallback } from "react"

function Button({ name = "Click", action = () => { } }: { name?: string, action?: () => void }) {
    const handleClick = useCallback(() => {
        action();
    }, [action]);
    return (
        <button
            className={`
            text-black px-4 py-2 mr-2 shadow-md rounded
            bg-white
            hover:text-white hover:bg-customized-gray-1 hover:transition-colors,
            duration-150 ease-in-out,
         `}
            onClick={handleClick}
        >
            {name}
        </button>
    )
}

export default memo(Button)