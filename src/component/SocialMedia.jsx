import { socialMedia } from "../constants/socialMedia";

 

const SocialMedia =()=>{
    return(
        <span className="flex flex-row flex-wrap text-center p-1 mt-5">
        <span>
            {  socialMedia.map(({id, icon , link })=>(
                 <a key={id} href={link} className="text-hover  hover:text-blue m-2" target='_blank' rel="noreferrer">
                 <i className={`fa fa-${icon}`}></i>
             </a>
            )) }
           
        </span>
    
    </span>
    )
    }
    export default SocialMedia;