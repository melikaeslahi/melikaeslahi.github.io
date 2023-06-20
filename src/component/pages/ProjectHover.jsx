const ProjectHover =() =>{
    return(
        <div className="hover:block absolute top-0 right-0  z-10 flex flex-col items-center justify-center w-56 h-56 hover:w-60 hover:h-60 bg-cyan-100 opacity-50 ">
        <h1 className="text-purple-900 text-center hover:text-gray-900 opacity-100">
            <a href="">
                برای دیدن پروژه کلیک کنید
            </a>
           </h1>
    </div>
    )
}
export default ProjectHover;