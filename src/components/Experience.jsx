import React from 'react';
import html from "../assets/html.png";
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import reactImage from "../assets/react.png"
import github from "../assets/github.png"
import tailwind from "../assets/tailwind.png"

function Experience(props) {
    const allExperiences=[
        {
            id:1,
            exp:"html",
            src:html,
            style:'shadow-orange-500'
        },
        {
            id:2,
            exp:"css",
            src:css,
            style:'shadow-blue-500'
        },
        {
            id:3,
            exp:"javascript",
            src:javascript,
            style:'shadow-yellow-500'
        },
        {
            id:4,
            exp:"react",
            src:reactImage,
            style:'shadow-blue-800'
        },
        {
            id:5,
            exp:"github",
            src:github,
            style:'shadow-green-600'
        },
        {
            id:6,
            exp:"tailwind css",
            src:tailwind,
            style:'shadow-sky-400'
        }
    ]
    return (
        <div name="experience"
            className='bg-gradient-to-b from-gray-800 to-black
        md:h-screen w-full'>
            <div className='max-w-screen-lg mx-auto text-white w-full h-full  flex flex-col justify-center p-4'>
                <div className='pb-8'>
                    <p className='font-bold text-4xl border-b-4 inline border-gray-500'>Experience</p>
                    <p className='text-gray-500 font-bold py-6'>This are the technologies I worked on</p>
                </div>

                {/* grid */}
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center px-12 sm:p-0 py-6'>
                    {
                        allExperiences.map((items)=>(
                            <div key={items.id} 
                            className={`shadow-md hover:scale-105 duration-200 py-2 rounded-lg ${items.style}`}>
                            <img src={items.src} alt="" className='w-20 mx-auto'/>
                            <p className='text-2xl capitalize'>{items.exp}</p>
                        </div>
                        ))
                    }
                   
                </div>
            </div>

        </div>
    );
}

export default Experience;