import React, {useEffect, useState} from 'react';
import axios from "axios";

const Db = () => {
    const [appName, setAppName] = useState('')
    const [apps, setApps] = useState([])
    const [appsId, setAppsId] = useState('')

    const getApps = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/apps`)
            setApps(response.data)
        }catch(err) {
            console.error(err)
        }
    }
    const addApp = async () => {
        try {
            const response = await axios.post(`http://localhost:3000/apps`,{name: appName})
            setApps([...apps,response.data])
        }catch (e){
            console.error(e)
        }
    }
    const deleteApp = async (id) => {
        try{
            const response = axios.delete(`http://localhost:3000/apps/${id}`)
            setApps(apps.filter(app => app.id !== id))
        }catch(err){
            console.error(err)
        }
    }
    const editApp = async (id) => {
        try{
            const response = await axios.put(`http://localhost:3000/apps/${id}`,{name: appName})
            const editApp = apps.filter(el => el.id !== id)
      ///////BAN CHEM HASKANUM ES TAKI TOGHI PAHOV
            editApp.name = response.data.name
            console.log(response.data)
            console.log(editApp)
            setApps([...apps])
        }catch (e){
            console.error(e)
        }
    }
    useEffect(()=>{
        getApps()
    },[])

    return (
        <div className="flex flex-col gap-5">
            <div className="flex  gap-1">
                <input
                    className='border border-gray-500  pl-2 rounded-lg'
                    type="text"
                    placeholder="app name"
                    value={appName}
                    onChange={(e) => {
                     setAppName(e.target.value)
                    }}
                />
                <button
                    className='border border-gray-500 w-10 rounded-lg'
                    onClick={() => {
                        if (appName){
                            if (appsId){
                                editApp(appsId)
                            }else{
                                addApp()
                            }
                            setAppName("")
                            setAppsId("")
                        }
                    }}
                >
                    {appsId ?"save" :"add"}
                </button>
            </div>
            <div>
                {
                    apps.map(el => {
                        return(
                            <div
                                className="flex gap-2"
                                key={el.id}
                            >
                                {el.name}
                                <button
                                    className='border border-gray-500 w-15 rounded-lg'
                                    onClick={(e)=>{
                                        setAppName(el.name)
                                        setAppsId(el.id)
                                    }}
                                >
                                    edit
                                </button>
                                <button
                                    className='border border-gray-500 w-20 rounded-lg'
                                    onClick={()=> deleteApp(el.id)}
                                >
                                    delete
                                </button>
                            </div>
                            )
                    })
                }
            </div>
        </div>
    );
};

export default Db;