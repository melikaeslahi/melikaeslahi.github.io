import { Helmet } from 'react-helmet';
import  {profile} from '../assets/image';
import { about } from '../constants/about';
import  Resume from '../assets/pdf/melikaeslahi.pdf'
 
const About = ({helmet}) => {
 
    return (

        <section >
            <Helmet>
                <title>  {helmet} </title>
            </Helmet>
            <section
                className="container bg-red grid gap-2 my-5 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 place-content-center">

                <section className="hidden justify-end  lg:flex md:flex">
                    <img className="w-2/4 bg-hover shadow-2xl shadow-hover" src={profile} alt="profile" />
                </section>
                <section>
                    <h1 className="m-5 text-hover text-xl font-vazir font-bold font-weight-900">درباره من</h1>

                    <section className="p-5">
                        <p className="dark:text-white  text-sm md:text-base lg:text-base xl:text-base text-justify font-vazir mb-5">  
                         سلام ملیکا اصلاحی هستم.  متولد سال 1379 و ساکن تهران توسعه دهنده ی و برنامه نویس برنامه های تحت وب هستم و فعالیت خود را از سال 1398 آغاز کرده ام
                                </p>
                        <ul>
                            {about.map(({ id,  label , value }) => (
                                <li key={id} className="font-vazir grid grid-cols-2 mb-2 break-all dark:text-white ">
                                    <span className="font-bold  text-sm md:text-base lg:text-base xl:text-base text-right">  {label}: </span>
                                    <span className="text-sm md:text-base lg:text-base xl:text-base text-center"> {value}</span>
                                </li>
                            )
                            )}

                        </ul>


                    </section>

                    <section className="flex flex-row" >
                        <button className="bg-hover text-white text-sm lg:text-base md:text-base xl:text-base font-vazir btn btn-hover rounded  m-2 p-2">
                            <a href={Resume} 
                               download='melikaeslahi'
                               target='_blank'
                               rel="noopener noreferrer"
                            >
                                دریافت رزومه
                            </a>
                            
                        </button>
                        <button className="font-vazir bg-transparent text-hover text-sm lg:text-base md:text-base border border-hover rounded m-2 p-2 hover:text-white hover:bg-hover" >
                          <a
                                    href="mailto:melika.eslahi@gmail.com"
                                    alt="email"
                                    className='text-hover hover:text-white'
                                >
                                     ارسال ایمیل
                                </a>
                        </button>
                    </section>
                </section>
            </section>
        </section>


    )
}
export default About;