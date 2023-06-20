import {    useContext } from "react";

import { DarkmodeContext } from "../../context";
import {SidebarItems} from "./index";

const Sidebar = ({children}) => {
    const {darkModeToggle} = useContext( DarkmodeContext)
    return (

        //   Sidenav  
        <>
            <nav
                id="sidenav-2"
                className={` ${darkModeToggle ? 'dark bg-zinc-800' :'light'} fixed right-0 top-0 z-[1035] h-screen w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800`}
                data-te-sidenav-init
                data-te-sidenav-hidden="false"
                data-te-sidenav-mode="side"
                data-te-sidenav-content="#content">
                {children}
               <SidebarItems />  
            </nav>
        </>

        // Sidenav


    )
}
export default Sidebar;