import { Helmet } from 'react-helmet';
import {Blog} from '../component/pages/index';

const Blogs = ({helmet}) => {
    return (

   
        <section className="flex flex-col items-center justify-center">
            <Helmet >
                <title>  {helmet} </title>
            </Helmet>
            <div className="m-5">
                <h1 className="font-vazir font-bold text-2xl text-hover">     بلاگ ها</h1>
            </div>

            <Blog />

        </section>
    )
}
export default Blogs;