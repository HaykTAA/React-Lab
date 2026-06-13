import React, {useState} from 'react';
import {useSleep} from "./Context.jsx";

const Sleep = () => {
    const {state,addSleepTime} = useSleep()
    const [cortisolLevel,setCortisolLevel] = useState('')
    const [sleepTime,setSleepTime] = useState('')
    return (
        <div className="flex justify-start flex-col gap-3">
            <input
                className="border border-solid w-50"
                onChange={(e) =>  setSleepTime(e.target.value) }
                value={sleepTime}
                type="text"
                placeholder="how much you sleep?"
            />
            <input
                className="border border-solid w-50"
                value={cortisolLevel}
                onChange={(e) =>  setCortisolLevel(e.target.value) }
                placeholder="is it good?"
                type="text"
            />
            <button
                onClick={()=> addSleepTime({theAmount:sleepTime, wealthy :cortisolLevel, id: Math.random()}) }
            >
                add
            </button>
            <ul  className="flex flex-col gap-3">
                {state.map(el => {
                    return <li  key={el.id}>
                        <span className="flex gap-3">
                            {el.theAmount}
                            {el.wealthy}
                        </span>

                    </li>
                })}
            </ul>
        </div>
    );
};

export default Sleep;