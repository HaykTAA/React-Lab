export const UseRefCode = `
 useRef is almost the same useState but by updating useRef the component doesn't render again as it is with useState
 and wanna say that if you use Hook called useState the all components that ar in the main component where you used that gonna render also 
 and here how to use it
import React, {useEffect, useRef} from 'react';

const UseRef = () => {
    const div = useRef(null);
    const a = useRef(10);

    useEffect(()=>{
        if(div.current){
            div.current.style.background = 'red'  //You can even  do such things
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
`