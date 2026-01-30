import { get_one_pickup_line } from "../utils/pickUpLine";
import { useState } from "react";

export function usePickUpLine(){
    const [pickupLine, setPickupLine] = useState(null)

    function getPickupLine(){
        
        setPickupLine(get_one_pickup_line())
    }
    function clearPickupLine (){
        setPickupLine(null)
    }
    return {pickupLine, getPickupLine, clearPickupLine}
}