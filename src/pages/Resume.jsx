import { Helmet } from 'react-helmet';
import { useState } from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import {data} from '../constants/tabResume'
const Resume = ({helmet}) => {

    const [activeTab, setActiveTab] = useState('Skills');
    
    return (
        <>
         <Helmet >
            <title> {helmet} </title>
          </Helmet>
            <section className="m-5">
                <h1 className="text-2xl text-hover text-center font-bold mr-10">رزومه من</h1>
            </section>
            <Tabs value={activeTab} className='p-3 m-3 flex flex-col'>
                <TabsHeader
                    className="rounded-none  border-b border-gray-200 dark:text-white bg-transparent  text-sm md:text-base lg:text-base xl:text-base font-vazir font-bold lg:w-2/4 p-0  items-center"
                    indicatorProps={{
                        className: "bg-transparent  cursor-pointer border-b-2 border-hover shadow-none rounded-none",
                    }}
                >
                    {data.map(({ label, value ,disable }) => (
                        <Tab
                            key={value}
                            value={value}
                            onClick={() => setActiveTab(value)}
                            className={ `${disable ? 'cursor-not-allowed' : ''} ${disable === false && activeTab === value ? "text-hover border-b border-hover hover:cursor-pointer" :  ''} text-sm md:text-base lg:text-base xl:text-base`}
                            disabled={disable}
                        >
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody >
                    {data.map(({ value, desc ,disable }) => (
                        <TabPanel className='flex flex-col items-center text-sm md:text-base lg:text-base xl:text-base' key={value} value={value}>
                            {disable=== false? desc : ''}
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </>
    )
}
export default Resume;

  