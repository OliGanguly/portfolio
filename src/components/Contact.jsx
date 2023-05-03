import React from 'react';

function Contact(props) {
    return (
        <div name="contact" className='bg-gradient-to-b from-black to-gray-800 w-full h-screen p-4 text-white'>
           <div className='flex flex-col max-w-screen-lg h-full mx-auto'>
            <div className='pb-8'>
                <p className='font-bold text-4xl border-b-4 inline border-gray-500'>Contact</p>
                <p className='text-gray-500 font-bold py-6'>Fill the form below and contact with me!</p>
            </div>
            <div className='flex justify-center items-center'>
                <form className='flex flex-col md:w-1/2'>
                    <input 
                    type="text" 
                    name='name' 
                    placeholder='Enter your Name' 
                    className='p-2 border-2 bg-transparent rounded-md text-white my-4'/>
                    <input 
                    type="text" 
                    name='email' 
                    placeholder='Enter your email' 
                    className='p-2 border-2 bg-transparent rounded-md text-white '/>
                    <textarea 
                    name="message" 
                    rows="10" 
                    className='p-2 border-2 bg-transparent rounded-md text-white my-4'
                    placeholder='Enter Message'></textarea>
                    <button className='px-6 py-3 text-white bg-gradient-to-b from-cyan-500  to-blue-800 cursor-pointer rounded-md flex items-center
                    my-8 mx-auto hover:scale-105 duration-300
                    '>Submit</button>
                </form>
            </div>
            </div> 
        </div>
    );
}

export default Contact;