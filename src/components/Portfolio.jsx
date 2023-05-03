import React from 'react';
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'

function Portfolio(props) {
    const portfolios=[
     {
        id:1,
        src:arrayDestruct
     },
     {
        id:2,
        src:installNode
     },
     {
        id:3,
        src:navbar
     },
     
        {
            id:4,
            src:reactSmooth
         }
     
    ]
    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white'>
         
         <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
           <div className='pb-8'>
           <p className='text-4xl font-bold border-b-4 inline'>Portfolio</p> 
             <p className='text-gray-500 font-bold py-4'>Check out my Work...</p>
           </div>
         <div>
         <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:p-0'>
         {
                portfolios.map((portfolio)=>(

                
                <div key={portfolio.id}  className=' shadow-md shadow-gray-600 rounded-lg'>
                    <img src={portfolio.src} alt="" className='rounded-md duration-200
                    hover:scale-105'/>
                    <p>this is</p>
                    <div className='flex items-center justify-center'>
                        <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                        <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                    </div>
                </div>
               
                ))
            }
         </div>
      
                {/* grid system */}
                
                
                
            </div>
         
         </div>
        </div>
    );
}

export default Portfolio;