 
import {  useState } from 'react';
import DarkModeToggle from '../DarkModeToggle';
import {Sidebar} from './index';
 
const ScrollNav =( ) =>{
    const [showSidebar, setShowSidebar] = useState(false);
    const handleClickSidebar = (e, showSidebar) => {
        e.preventDefault()
        setShowSidebar(!showSidebar);
 
    }
    return(
        <span className="lg:hidden xl:hidden 2xl:hidden md:hidden sm:block ">

        <nav className="flex flex-row-reverse justify-between  p-3 z-10">
            <span className="text-base text-white font-vazir hover:text-hover px-5">
                <a href=""> ملیکا اصلاحی</a>
            </span>
            <span className="text-base font-vazir text-white hover:text-hover px-5">
                <a href="" onClick={(e) => handleClickSidebar( e, showSidebar)}> <i className={showSidebar===false? 'fa fa-bars' :``}></i> </a>
            </span>

        </nav>
       {showSidebar===true ? <Sidebar >
        <section className='flex flex-row justify-around m-5 border-b-2 border-hover pb-3'>
            <span>
                <DarkModeToggle />
            </span>
            <span>
                <h1 className='text-hover ml-1 lg:text-base md:text-base xl:text-base text-xs font-tanha'>    ملیکا اصلاحی</h1>
            </span>
            <span className="text-base font-vazir text-hover hover:text-hover px-5">
                <a href="" onClick={(e) => handleClickSidebar( e, showSidebar)}> <i className={showSidebar===true? 'fa fa-close' :``}></i> </a>
            </span>
        </section>
          
       </Sidebar> :null}
    </span>
    )
}
export default ScrollNav;