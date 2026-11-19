import { createContext, use, useContext, useEffect, useState, type ReactNode } from "react";
import type { TASKTYPE } from "../types/task_type";
import { getTasks } from "../services/services"

//bigcharatbigining
interface TaskContextType{
    tasklist:TASKTYPE[];
    load:boolean;
    hiba:string|null;
}
const TaskContext=createContext<TaskContextType | undefined>(undefined);
export function TaskProvider({children}:{children:ReactNode}){
    const [tasklist,settasklist]=useState <TASKTYPE[]>([]);
    const [load,setload]=useState<boolean>(true);
    const [hiba,sethiba]=useState<string|null>(null);
    //new
    useEffect(()=>{
    getTasks().then(data=> {
        settasklist(data);
        sethiba(null)})
        .catch(()=>{
            sethiba('nem siker')
        })
        .finally(()=>{
            setload(false)
        });
    },[])//hook | 2 parameter, mikor fusson le | mellékhatások
    
    //new
    return(<TaskContext.Provider value={{tasklist, load, hiba}}>
        {children}
        </TaskContext.Provider>
        
        )
}
export function useTaskContext(){
    const context=useContext(TaskContext)
    if(context===undefined){
        throw new Error("csak provideren beul hasznalhato")
    }
    return(context);
}