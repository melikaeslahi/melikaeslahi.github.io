import { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { skills } from '../../constants/skills';

const Skills = () => {
    const [skill, setSkill] = useState(1);
    const [percentage, setPercentage] = useState();
    const skillOnClick = (id) => {
        setSkill(id);
    }
  
    useEffect(() => {

        const found = skills.find(obj => {
            return obj.id === skill;
        }
        )
        setPercentage(found.percentage);

    }, [skill]);
    
 
    const style = `text-sm md:text-lg lg:text-xl bg-cyan-400 hover:bg-cyan-500 transition py-1 lg:py-2 lg:px-5 px-2 my-5 lg:m-5 border rounded break-all`
    return (
        <section className="font-vazir w-full lg:w-3/4 xl:w-3/4 ">
            <section className="felx flex-col">
                <section
                    className="flex flex-col lg:flex-row md:flex-row my-5  lg:m-5 justify-around items-center h-auto border rounded shadow shadow-hover">
                    <section className="grid grid-cols-2 lg:grid-cols-2 mb-5 md:grid-cols-2 gap-1 lg:gap-2">
                        {
                            skills.map(({ label, id }) => (
                                <button key={id}
                                    className={skill === id ? `${style} border-hover text-white dark:bg-cyan-900 bg-cyan-700` : style} onClick={() => skillOnClick(id)}  > {label}</button>
                            ))
                        }
                    </section>
                    <section className='lg:w-36 lg:h-64 h-36 flex flex-col justify-center  items-center pb-5'>
                        <CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                            // background='bg-cyan-400'
                            styles={
                                {
                                    trail: {
                                        stroke: 'bg-gray-400',
                                        trailColor: 'red',
                                    },
                                    path: {
                                        stroke: "rgb(34, 211 , 238)"
                                    },
                                    text: {
                                        fill: 'rgb(34, 211 , 238)'
                                    }
                                }
                            }
                        />
                    </section>
                </section>
            </section>
        </section>
    )
}
export default Skills;