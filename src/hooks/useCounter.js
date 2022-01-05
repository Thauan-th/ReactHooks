import {useState} from "react";

export const useCounter = (initialValue=100) =>{
    const [count,setCount]=useState(initialValue);
    function inc(){
        setCount(count+1)
    }
    function dec(){
        setCount(count-1)
    }
    function title(){
        document.title='CUSTOM'
    }
    return [count,inc,dec,title]
}
