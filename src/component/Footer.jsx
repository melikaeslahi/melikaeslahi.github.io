import { useContext } from "react";
import { Link } from "react-router-dom";
import { links } from "../constants/links";
import { DarkmodeContext } from "../context";
import {WaysOfCommunication , AboutCol} from "./index";

const Footer = () => {
    const {darkModeToggle} =useContext(DarkmodeContext)
    return (
        <footer>
            <section className={`flex flex-col items-center font-vazir w-full bg-white  ${darkModeToggle ===true ?  'dark bg-zinc-800' : 'light'} p-2 mt-5 shadow shadow-hover`}>
                <section className="flex flex-col lg:flex-row p-5 justify-around md:flex-col">

                 <AboutCol />

                    <section className="flex flex-col items-center text-right m-5 ">
                        <h1 className="text-hover text-right font-bold mb-3"> لینک های مهم </h1>
                        {links.map(({id , linkTo , name})=>(
                              <Link key={id}  to={linkTo} className="hover:text-cyan-500 text-sm lg:text-base xl:text-base md:text-base dark:text-white">  {name} </Link>
                        ))}
                        
                    </section>
              
                  <WaysOfCommunication />
               
                </section>
                <section className="dark:text-gray-20 text-gray-400  lg:text-base xl:text-base md:text-base text-sm">    Copyright © 2023 All rights reserved  </section>
            </section>
        </footer>
    )
}
export default Footer;