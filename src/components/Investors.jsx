import React from 'react'
import SupportImg from '../../src/assets/support.png';
import { FaBuffer } from 'react-icons/fa';

const Investors = () => {
  return (
    <div className='investors'>
<section class=" bg-[#f0eeeb] -mt-42">
  <div name='investors' class="container mx-auto px-4">
    <div class="flex flex-wrap">
      <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded-lg">
          <div class="px-4 flex-auto">
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-[570px] mb-12 lg:mb-0 ">
               <span class="block mx-24 mb-4 text-base text-primary font-semibold">
               Global Decentralized
               </span>
               <h2
                  class=" mx-24
                  text-dark
                  mb-6
                  uppercase
                  font-bold
                  text-[32px]
                  sm:text-[40px]
                  lg:text-[36px]
                  xl:text-[40px]
                  "
                  >
                  Relief Platform
               </h2>
            </div>

    <div class="flex flex-wrap items-center">
      <div class="w-full md:w-5/12 px-4 mr-auto ml-auto ">
        <div class="text-blueGray-500 mx-7 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white ">
          <i class="text-xl text-[#1B1B1B] "><FaBuffer size={24}/> </i>
        </div>
        <h3 class="text-3xl pt-8 mb-2 font-semibold leading-normal">
        We create sustainability out of chaos.
        </h3>
        <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
        CRISIS COINS™ has developed a groundbreaking investment model NEVER seen before in any country!
        CRISIS COINS LLC.™ is an innovative technological corporation committed to establishing a sustainable 21st 
        century global ecosystem of critical response infrastructures focused on critical and national crisis.
        </p>
        <p class="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
        Investors have access to the Decentralized Disaster Relief Platform, which offers 
        instantaneous market liquidity to an otherwise failed system.
        </p>
      </div>

      <div class="w-full md:w-4/12 px-4 mr-auto ml-auto ">
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-2 shadow-lg rounded-lg bg-[#6A8FD4] ">
          <img alt="..." src={SupportImg} class="w-full align-middle rounded-t-lg" />
          <blockquote class="relative p-8 mb-4">
          <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" class="absolute left-0 w-full block h-95-px -top-94-px">
                    <polygon points="-30,95 583,95 583" class="text-[#6A8FD4] fill-current"></polygon>
                  </svg>
         
            <h4 class="text-xl font-bold text-[#1B1B1B] text-center">
              Top Notch Development
            </h4>
            <p class="text-md font-light mt-2 text-[#1B1B1B]">
            <ul>
                <li>•Investors have "24/7 365" instant access to their investments.</li>
                <li>•Tokens are implemented within a "pre-established" token infrastructure and accepted globally at millions of locations.</li>
                <li>•Only the investor has access to the end-user portal and any assets within those accounts</li>
                <li>•Each investor is eligible for separate access to our uniquely developed vault.</li>
            </ul>
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
  <footer class="relative pt-8 pb-6 mt-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap items-center md:justify-between justify-center">
        <div class="w-full md:w-6/12 px-4 mx-auto text-center">
          <div class="text-sm text-blueGray-500 font-semibold py-1">
          </div>
        </div>
      </div>
    </div>
  </footer>
</section>
</div>
  )
}

export default Investors