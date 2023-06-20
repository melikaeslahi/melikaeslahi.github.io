import { useContext } from "react"
import { DarkmodeContext } from "../context"

 

const DarkModeToggle =()=>{
   
 const { darkModeToggle , setDarkModeToggle }   = useContext(DarkmodeContext)
 

    const handleToggle =()=>{
        setDarkModeToggle(!darkModeToggle)
   
    }

    return(
        <section className="float-right w-8 h-8 bg-hover lg:m-2 mt-0 rounded-2xl text-xl text-center flex justify-center items-center">
           <section>
            {darkModeToggle===false ? <> <label htmlFor="moon"> <i className="fa fa-moon-o cursor-pointer"></i> </label> <input id='moon' type="checkbox" className="hidden" onClick={handleToggle} /></>  : null }
            {darkModeToggle === true ? <> <label htmlFor="sun">  <i className="fa fa-sun-o cursor-pointer"></i> </label> <input id="sun" type="checkbox" className="hidden" onClick={handleToggle} /></>: null }
           
           </section>  
        </section>
    )
}
export default DarkModeToggle;