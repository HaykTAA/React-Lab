import {createContext, useContext, useState} from "react";

const SleepContext = createContext({})

export const SleepProvider = ({ children }) => {
    const [state, setState] = useState([
        {
            id : Math.random(),
            theAmount : "12",
            wealthy : "goooood"
        }
    ])
    const addSleepTime = (time) => {
        setState([...state,time])
    }
    return <SleepContext.Provider value={{state, addSleepTime}}>
        {children}
    </SleepContext.Provider>
}

export const useSleep = () => {
    return  useContext(SleepContext)
}
export default SleepProvider