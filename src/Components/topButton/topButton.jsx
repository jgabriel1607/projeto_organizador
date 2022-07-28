import { React, useEffect } from "react"
import topIcon from "../../images/top_icon.svg"
import { topFunction } from "../../functions/functions"

export const TopButton = () =>{
    
    return(
        <>
            <button className="backToTop" onClick={() => {topFunction()}} id="backToTop"> <img src={topIcon} alt="" /> </button>
        </>
    )
}