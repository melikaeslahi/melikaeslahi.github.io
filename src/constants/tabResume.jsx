 
import { Education,Skills }from "../component/pages/index";

export const data = [
    {
        label: 'مهارت ها ',
        value: 'Skills',
        desc:  <Skills /> ,
        disable:false
    },
    {
        label: 'تحصیلات',
        value: 'education',
        desc: <Education /> ,
        disable:false
    },
    {
        label: ' تجربیات ',
        value: 'experiences',
        desc:'محتوایی برای نمایش وجود ندارد',
         disable:true
    },
    {
        label: 'مدارک',
        value: 'documents',
        desc:'محتوایی برای نمایش وجود ندارد',
        disable:true
    },

]