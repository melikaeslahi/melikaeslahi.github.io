// import { useRouteError } from "react-router-dom";

import { useContext } from "react";
import { DarkmodeContext } from "../context";

const ErrorPage =()=>{
 
    // Uncaught ReferenceError: path is not defined
    const {darkModeToggle} = useContext(DarkmodeContext)
    return(
        <div className={`flex   flex-wrap  justify-center content-center items-center ${darkModeToggle ? 'dark bg-zinc-800':'light' } mt-32  w-full h-full`}>
           <div className="flex content-center justify-center items-center  p-10 bg-hover w-72 h-64 rounded-full">
            <div>
                <h1 className="text-9xl text-center font-extrabold text-blue tracking-wide">404</h1>
                <h5 className="text-xl text-center font-extrabold text-blue tracking-wide">sorry , page not found</h5>
            </div>
        </div>  
        </div>
       
    )
}
export default ErrorPage;