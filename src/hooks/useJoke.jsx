import { get_one_joke } from "../utils/jokes";
import { useState } from "react";

export function useJoke(){
    const [joke, setJoke] = useState(null)
    
    function getJoke(){
        
        setJoke(get_one_joke())
    }
    function clearJoke (){
        setJoke(null)
    }
    return {joke, getJoke, clearJoke}
}