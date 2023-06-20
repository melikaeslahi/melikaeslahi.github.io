// import { Children } from "react";
 
import { useState } from "react";
import { Outlet } from "react-router-dom";
 
import Footer from "../component/Footer";
import Header from "../component/Header"; 
import { DarkmodeContext } from "../context";
const MainLayout = ({ Children  }) => {
    const [darkModeToggle ,  setDarkModeToggle] = useState(false)
    return (
        <DarkmodeContext.Provider value={{ darkModeToggle  , setDarkModeToggle}} >
        <div className={`${darkModeToggle ? 'dark bg-zinc-800' : 'light'}`}>       
            <div>
                <Header />
            </div>

            <main>
                <Outlet />
                {Children}
            </main>

            <div>
                <Footer />
            </div>

        </div>
        </DarkmodeContext.Provider>
    )

}

export default MainLayout;