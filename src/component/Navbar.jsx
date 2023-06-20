
import { NavLink } from 'react-router-dom';
import { links } from '../constants/links';
import DarkModeToggle from './DarkModeToggle';
import {ScrollNav} from './sidebar/index';

const Navbar = () => {


  
    return (
        <>
            <span className="p-3 hidden lg:block md:block">
            <span>     <DarkModeToggle /></span>
                <nav className="flex flex-row justify-center"> 
                
           
                    {links.map(({ id, linkTo, name }) => (
                        <span className="text-base font-vazir text-white hover:text-hover px-5" key={id}>
                            <NavLink to={linkTo} className={({ isActive }) => (isActive ? 'active text-hover' : 'inactive')} > {name} </NavLink>
                        </span>
                    ))}

                </nav>

            </span>
           <ScrollNav />
        </>
    )
}
export default Navbar;