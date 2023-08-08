import React from 'react';
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import CartProject2 from '../assets/portfolio/CartProject2.png'
import movieApp from '../assets/portfolio/movieApp.png'
import fileExplorer from '../assets/portfolio/fileExplorer.png'
import quizApp from '../assets/portfolio/quizApp.png';
import youtube from '../assets/portfolio/youtube.png';
import password from "../assets/portfolio/password.png";
function Portfolio(props) {
    const portfolios=[
     {
        id:1,
        src:CartProject2,
        describe:"Use Context API with useReducer Hook in React",
        link:"https://candid-croquembouche-3b3d85.netlify.app/",
        github:"https://github.com/OliGanguly/shopping_cart-_withContextHook"
     },
     {
        id:2,
        src:movieApp,
        describe:"Movies and TV Series Listing App in React JS and Material UI",
        link:"https://my-movie-app-without-redux.netlify.app/",
        github:"https://github.com/OliGanguly/MovieAppWithoutRedux"
     },
     {
        id:3,
        src:fileExplorer,
        describe:"Folder Explorer like VS Code Using React js",
        link:"https://file-explorer-like-vscode.netlify.app/",
        github:"https://github.com/OliGanguly/folder_explorer"
       
     },
     {
        id:4,
        src:quizApp,
        describe:"Quiz App using React js",
        link:"https://react-quiz-app-mobile-responsive.netlify.app/",
        github:"https://github.com/OliGanguly/QuizAppInReact"
       
     },
     {
        id:5,
        src:youtube,
        describe:"Youtube clone using React js",
        link:"https://oliganguly-youtube.netlify.app",
        github:"https://github.com/OliGanguly/youtubeClone"
     },
     {
        id:6,
        src:password,
        describe:"Password Generator using React js",
        link:"https://stirring-dango-31614f.netlify.app",
        github:"https://github.com/OliGanguly/React-password-Generator.git"
     },
     {
      id:7,
      // src:password,
      describe:"Food Ordering App using React js",
      // link:"https://stirring-dango-31614f.netlify.app",
      github:"https://github.com/OliGanguly/FoodApp.git"
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
                    <img src={portfolio.src} alt="Loading.." className='rounded-md duration-200
                    hover:scale-105'/>
                    <p className='text-center mt-2'>{portfolio.describe}</p>
                    <div className='flex items-center justify-center'>
                        <a  href={portfolio.link} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
                        <a href={portfolio.github}  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
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