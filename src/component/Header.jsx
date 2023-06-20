import {profile} from '../assets/image'
import Navbar from './Navbar';
import {SocialMedia} from './index';
import TypeAnimate from './TypeAnimate';
const Header = () => {
    return (
        <>
        
        <header className="header">
            <span className="flex flex-col items-between flex-wrap">
               
            <Navbar />
                <div className="my-10 flex flex-col items-center ">
                    <div>
                        <div className="p-2 rounded-full shadow-inner shadow-hover">
                            <img className="w-24 h-24 border-orange-500 rounded-full" src={profile} alt="profile" />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-hover font-vazir mt-5">ملیکا اصلاحی</h1>
                    </div>
                    <div>
                        <h4 className="text-white text-center text-sm lg:text-base md:text-base xl:text-base font-vazir p-1"> <TypeAnimate  /> </h4>
                    </div>
                    <SocialMedia />
                </div>

            </span>

        </header></>
        
    )
}
export default Header;