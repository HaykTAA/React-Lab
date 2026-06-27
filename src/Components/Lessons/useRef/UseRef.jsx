import React, {useEffect, useRef} from 'react';

const UseRef = () => {
    const div = useRef(null);
    const a = useRef(10);

    useEffect(()=>{
        if(div.current){
            div.current.style.background = 'red'
        }
    },[])
    return (
        <>
            <button
                onClick={() => {
                    a.current = 20
                }}
            >
                Button  {a.current}
            </button>

            <div ref={div} className="w-24 h-24 border">

            </div>
        </>
    )
};

export default UseRef;