import {SocialMedia }from "./index";

const WaysOfCommunication =()=>{
    return(
        <section className="m-5 flex flex-col items-center text-right">
        <h1 className="text-hover text-right font-bold mb-3">     راه های ارتباطی </h1>
            <section className="text-center lg:text-base xl:text-base md:text-base text-sm">
            <p className="font-bold mb-1  dark:text-white">پست الکترونیکی: </p>
            <p className="break-all  dark:text-gray-200">melika.eslahi@gmail.com</p>
            </section>

            <section className="mb-2 text-center dark:text-white">

                <p className="font-bold mb-1">شبکه های اجتماعی:</p>
                <SocialMedia />

            </section>
        </section>
    )
}
export default WaysOfCommunication;