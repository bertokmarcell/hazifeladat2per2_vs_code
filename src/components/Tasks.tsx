import React from "react";
import { useTaskContext } from "../taskcontext/TaskContext"
import Task from "./Task";

interface TASKSPROPS{
}
function Tasks(){
    const {tasklist,load,hiba}= useTaskContext();//brackets at the end
    if(load){
        return <p>hazifeladat elemek betoltese...</p>
    }
    if(hiba){
        return <p>{hiba}</p>
    }

    return(
        <>
        <div className="osszkartya">
        {tasklist.map((e,i)=>{return(<Task elem={e} key={i}/>)})}
        </div>
        </>
    )
}
export default Tasks;//refce shortcut, also dont forget ex de Pro