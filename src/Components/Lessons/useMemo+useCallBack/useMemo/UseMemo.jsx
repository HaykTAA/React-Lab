import React, {useMemo, useState} from 'react';
import Menu from "../Menu.jsx";

const UseMemo = () => {
    const [count, setCount] = useState(1)

    const object = useMemo(() => {
        return {
            name: 'LLLL'
        }
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


            <Menu object={object}/>
        </header>
    );

};
export default UseMemo;