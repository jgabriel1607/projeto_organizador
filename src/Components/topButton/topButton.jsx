import topIcon from "../../images/top_icon.svg"
import "../../style/topButton.css"

export const TopButton = () =>{
    
    return(
        <>
            <a href="#" className="backToTop" id="backToTop"> <img src={topIcon} alt="" /> </a>
        </>
    )
}