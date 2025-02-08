import Links from "../../utils/menuitems"
import "./Header.css"
const Header=()=>{
    return(
        <>
        <div className="nav"> 
            <img className="image"src="https://vismaifood.com/themes/pivisions/assets/images/logo.png"/>
             <Links/>
             <div className="lan"><label >Site also available in:<a className="a"> Telugu</a></label></div>
        </div>
       <div className="search">
        <input type="text" placeholder="Search By Igredients,Cuisine,Category,Diet"></input>
       <img src="https://vismaifood.com/themes/pivisions/assets/images/icons/arrow-right-orange.svg" height="20px" ></img>
       </div>
        </>
    )
}
export default Header