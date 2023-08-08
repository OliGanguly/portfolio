import React from 'react';
// import {GiSelfLove} from 'react-icons/gi';

function About(props) {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to to-black text-white'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full justify-center'>
         <div className='pb-8 '>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
         </div>
         <p className='text-xl mt-10'>I love developing interactive websites!</p>
         <br/>
         <p className='text-xl'>
      I specialize in developing sites for individuals and small businesses. I believe that websites are the way to tell your story to the world.
       I always look forward to work on fun projects. Take a look at my portfolio below, if you think I'd be a good match</p>
        </div> 

        </div>
    );
}

export default About;