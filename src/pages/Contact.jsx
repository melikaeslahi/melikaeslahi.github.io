import { Helmet } from 'react-helmet';
const Contact = ({helmet}) => {
    return (
        <section className="flex flex-col items-center justify-center font-vazir">
             <Helmet >
            <title>  {helmet} </title>
          </Helmet>
            <h1 className="text-hover font-bold text-2xl mt-5">ارتباط با من </h1>
            <section className="flex flex-col items-center shadow shadow-hover w-full lg:w-2/4 md:w-2/4 p-10 m-10 rounded" >
                <section>
                    <section className="flex flex-col items-center">
                        <div className="flex justify-center items-center bg-hover rounded-full w-28 h-28 mb-3">
                            <span className="  text-white text-2xl"><i className="fa fa-envelope"></i></span>
                        </div>
                        <p className="font-bold mb-3 dark:text-white text-sm lg:text-base md:text-base xl:text-base">آدرس ایمیل</p>
                    </section>
                </section>
                <section className="mb-3">
                    <p className="break-all  text-gray-400 dark:text-gray-20 text-sm lg:text-base md:text-base xl:text-base">melika.eslahi@gmail.com</p>
                </section>
                <section>
                <a
                                    href="mailto:younes.gh@chmail.ir"
                                    alt="email"
                                    className='text-hover text-sm lg:text-base md:text-base xl:text-base'
                                >
                                      برای ارسال پیام کلیک کنید
                                </a>
                  
                </section>

            </section>

        </section>
    )
}
export default Contact;