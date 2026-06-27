import React, {useCallback, useState} from 'react';
import Menu from "../Menu.jsx";

const UseCallBack = () => {
    const [count, setCount] = useState(1)

    // const getData = () => {
    //     return [1, 5, 8]
    // }

    const getData = useCallback(() => {
        return [1, 5, 8]
    }, [])


    return (
        <header className="h-24 bg-amber-100 flex gap-6 items-center">
            <button
                onClick={() => {
                    setCount(prev => prev + 1)
                }}
            >
                Plus
            </button>
            <div>
                {count}
            </div>
            <button
                onClick={() => {
                    setCount(prev => prev - 1)
                }}
            >
                Minus
            </button>
            <Menu getData={getData}/>
        </header>
    );
};

export default UseCallBack;