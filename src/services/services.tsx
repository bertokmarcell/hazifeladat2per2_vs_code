import type { TASKTYPE } from "../types/task_type";

const api_url='http://127.0.0.1:8000/api/t';
export function getTasks(){
return fetch(api_url)
    .then((response)=>{
        if(!response.ok){
            throw new Error("failed to load")
        }
        return response.json() as Promise<TASKTYPE[]>
    })//(response=>response.json()) ez le van cserélve
}