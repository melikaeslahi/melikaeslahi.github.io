import { Helmet } from 'react-helmet';
import {Project }from '../component/pages/index';
// import ProjectHover from '../component/pages/ProjectHover';

const Projects = ({helmet}) => {
    return (
        <section>
            <Helmet >
                <title>  {helmet}  </title>
            </Helmet>
            <section className="flex flex-col items-center">
                <div className="m-5">
                    <h1 className="font-vazir font-bold text-2xl text-hover">پروژه های من</h1>
                </div>
             <Project />
            </section>
        </section>
    )
}
export default Projects;