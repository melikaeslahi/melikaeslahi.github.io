import { useContext } from "react";
import { DarkmodeContext } from "../context";

const ContentNotFound = () =>{
    const {darkModeToggle} = useContext(DarkmodeContext)
    
    return(
    
        <div className={`flex  justify-center  items-center bg-gray-200 w-full h-36  ${darkModeToggle ===true  ? 'dark dark:bg-zinc-700' : 'light'}`}>
            <h1 className="text-xl text-blue font-bold font-tanha m-5">
         « محتوایی یافت نشد »
            </h1>
        </div>

    )
}
export default ContentNotFound;