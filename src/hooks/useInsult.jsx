import { get_one_clever_insult } from "../utils/cleaverInsult";
import { useState } from "react";

export function useInsult(){
    const [insult, setInsult] = useState(null)

    function getInsult(){
        setInsult(get_one_clever_insult())
    }
    function clearInsult (){
        setInsult(null)
    }
    return {insult, getInsult, clearInsult}
}