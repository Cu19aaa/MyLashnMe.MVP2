import React from 'react'
import businesspic from '../assets/businesspic.png';

const Contact = () => {
  return (
    <div name='contact' className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        {/*Left Side*/}
      <div className='py-10 mb-10 flex justify-center items-center'>
        <img className='row-span-4 object-cover w-full h-full p-2' src={businesspic} alt="/" style={{width:'450px'}} />
      </div>
      {/*Right Side*/}
      <div className='flex flex-col h-full justify-center'>
      <form method='POST' action="https://getform.io/f/oeEJ3va0" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-black text-black'>Contact</p>
                <p className='text-black py-4'>Submit the form below</p>
            </div>
            <input className='bg-white border-2 p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-white border-2' type="email" placeholder='Email' name='email' />
            <textarea className='bg-white border-2 p-2' name="message"  rows="10" placeholder='Message'></textarea>
            <button className='rounded-lg text-black border-2 border-black hover:bg-orange-600 hover:text-white  px-4 py-3 my-8 mx-auto flex items-center'>Lets Collaborate</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
