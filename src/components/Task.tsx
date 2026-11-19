import type { TASKTYPE } from "../types/task_type";

interface TASKPROPS{
    elem:TASKTYPE
}
export default function Task({elem}:TASKPROPS){
    return(
    <>
    <div className="egykartya">
        <p>{elem.name}</p>
        <p>{elem.date}</p>
        <p>{elem.done}</p>
        <p>{elem.id}</p>
    </div>
    </>)
}