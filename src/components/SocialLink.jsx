import React from 'react';
import {FaGithub,FaLinkedin} from 'react-icons/fa';
// import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
function SocialLink(props) {
    const links=[
        {
            id:1,
            child:(
                <>
                 Linkedin <FaLinkedin size={25}/>
                </>
            ),
            href:'https://linkedin.com',
            style:'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                 GitHub <FaGithub size={25}/>
                </>
            ),
            href:'https://github.com/OliGanguly',
           
        }
        ,
        
        // {
        //     id:3,
        //     child:(
        //         <>
        //          Resume <BsFillPersonLinesFill size={25}/>
        //         </>
        //     ),
        //     href:'/resume.pdf',
        //     style:'rounded-br-md',
        //     download:true
        // }
    ]
    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
           <ul>
           {
            links.map((link)=>(
                <li key={link.id} 
                className={
                    "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
                    " " +
                    link.style
                  }>
                    <a 
                    href={link.href} 
                    className='flex justify-between items-center w-full'
                    download={link.download}
                    rel="noreferrer"
                    target="_blank">
                       {link.child}
                    </a>
                </li>
            ))
           }
           
            </ul> 
        </div>
    );
}

export default SocialLink;