import React from 'react';
import myImage from '../assets/myImage.jpg'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from "react-scroll";


function Home(props) {
    return (
        <div name="home"
            className='h-screen w-full bg-gradient-to-b from-black via-black  to-gray-800'>
            <div className='flex-col items-center justify-center h-full  max-w-screen-lg mx-auto flex md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h1 className='text-white text-4xl sm:text-7xl font-bold'>I'm am a Full Stack Developer</h1>
                    <p className='text-gray-500 py-4 max-w-md'>Experienced React js Developer with a demonstrated history of working in the information technology and services industry. Skilled React, Redux, Redux Saga, Firebase ,  JavaScript , Java, HTML, Cascading Style Sheets (CSS).</p>
                    <div>
                        <Link to="portfolio" duration={500} smooth>
                        <button className='group text-white px-6 py-3 flex items-center rounded-lg bg-gradient-to-r from-cyan-400 to-blue-800 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300 ml-2'><MdKeyboardArrowRight size={25} /></span>
                        </button>
                        </Link>
                    </div>
                </div>

                <div>
                    <img src={myImage} alt="my profile" className='mx-auto w-2/3 md:w-full rounded-2xl' />
                </div>
            </div>

        </div>
    );
}

export default Home;