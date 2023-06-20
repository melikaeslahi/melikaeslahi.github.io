import { Link } from "react-router-dom";
import {links} from '../../constants/links'; 
const SidebarItems =( )=>{
    return(
        <ul className={ `dark:bg-zinc-800   m-0 list-none px-[0.2rem] `} data-te-sidenav-menu-ref>
            
          {links.map(({id , name , linkTo})=>(
        <li className="relative" key={id}>
        <Link
            to={linkTo}
            className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-hover hover:text-inherit hover:outline-none focus:bg-blue focus:text-inherit focus:outline-none active:bg-blue active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-blue/10 dark:focus:bg-white/10 dark:active:bg-white/10"
            data-te-sidenav-link-ref>
            <span
                className="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
               
            </span>
            <span>  {name}  </span>
        </Link>
    </li>
      ))}
        

    </ul>

           
     
    )
}
export default SidebarItems;