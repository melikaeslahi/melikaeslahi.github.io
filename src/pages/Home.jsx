
import { Helmet } from "react-helmet";
import { blogs } from "../constants/blogs";
import { projects } from "../constants/projects";
import { About, Blogs, Contact, Projects, Resume } from './index'

const Home = ({ helmet }) => {
  return (
    <>
      <About helmet={'ملیکا اصلاحی|درباره ی من '} />
      <Resume helmet={'ملیکا اصلاحی| رزومه من'} />
      {projects.length > 0 ? <Projects helmet={'ملیکا اصلاحی|پروژه ها '} /> : null}
      {blogs.length > 0 ? <Blogs helmet={'ملیکا اصلاحی|بلاگ ها'} /> : null}
      <Contact helmet={'ملیکا اصلاحی|ارتباط با من'} />
      <Helmet >
        <title> {`${helmet}`} </title>
      </Helmet>
    </>
  )
}
export default Home;