import React from 'react'

const Newsletter = () => {
  return (
    <div name='contact' className='w-full px-4 py-16 text-[#D9D9D9]'>
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-2'>
            <h1 className='md:text-4xl sm-text-3xl text-2xl font-normal py-2'>Join our community to find out more?</h1>
            <p>Sign up to our newsletter and stay current on new and upcoming projects.</p>
        </div>
        <div className='my-4'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <input className='p-3 flex w-full rounded-md text-[#1b1b1b]' type="email" name="email" id="email" placeholder='Enter a valid email.' />
                <button className='bg-[#6A8FD4] w-[200px] rounded-md font-medium ml-4 my-6 mx-auto py-3 border border-[#D9D9D9] hover:border-transparent text-[#1B1B1B]'>Sign Up</button>
            </div>
            <p>We care about data protection. Review our <span className='text-[#6A8FD4]'>Privacy Policy</span>.</p>
        </div>
    </div>
    </div>
  )
}

export default Newsletter