import { education } from "../../constants/education";

const Education = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <ol className="border-r-2 border-hover dark:border-primary-500 mt-5">
          {education.map(({id , title , date , desc}) => (
            <li key={id}>
              <div className="flex-end flex items-center">
                <div
                  className="-mr-[9px] -mt-2 ml-3 flex h-4 w-4 items-center justify-center rounded-full bg-hover"></div>
                <h4 className="-mt-2 text-xl text-hover font-semibold">  {title} </h4>
              </div>
              <div className="mb-6 mr-6 pb-6">
                <h4 className="text-sm text-blue transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                > {date} </h4>
                <p className="mb-4 mt-2 text-neutral-600 dark:text-neutral-300">
                 {desc}
                </p>

              </div>
            </li>
          ))}


        </ol>
      </section>

    </>
  )
}
export default Education;