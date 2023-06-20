import { projects } from '../../constants/projects';
import {ContentNotFound} from '../index';
 
const Project = () =>{
    return(
        
        <section className= {`${projects.length >0 ? 'grid grid-cols-1 lg:grid-cols-3 lg:gap-3 md:grid-cols-2 mb-5 justify-around ' :'grid grid-cols-1 lg:grid-cols-1 lg:gap-3 md:grid-cols-1 mb-5 justify-around' }  `} >

        {projects.length > 0 ? (projects.map(({ id, link, image, alt }) => (
            <div key={id} className="lg:w-56 lg:h-56 w-40 h-40 border border-hover rounded hover:w-60 hover:h-60  m-3 relative" >
                <a href={link} target='_blank' rel='noreferrer'>
                    <img src={image} alt={alt} className="w-auto h-auto " />
                </a>

            </div>
        ))) :(<ContentNotFound />  ) }
    </section>
    )
}
export default Project;