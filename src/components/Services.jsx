import React from 'react'
import ReactImg from '../../src/assets/react.svg';
import BlockchainImg from '../../src/assets/blockchain.svg';
import MobileImg from '../../src/assets/mobile.svg';
import HostingImg from '../../src/assets/hosting.svg';

const Services = () => {
  return (
    <div className='services'>
    <div class="py-16 bg-[#6A8FD4]">
              <div name='services' class="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
               <span class="font-semibold text-lg text-primary mb-2 block">
               Our Services
               </span>
               <h2
                  class="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                  >
                  What We Offer
               </h2>
               <p class="text-base text-body-color">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
               </p>
            </div> 
    <div class="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
        <div class="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-4">
            <div class="bg-white border rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 backdrop-filter bg-opacity-10 border-gray-200 hover:scale-105 duration-300">
                <div class="mb-12 space-y-4">
                    <h3 class="text-2xl font-semibold text-[#1B1B1B]">Full-Stack Web Design</h3>
                    <p class="mb-6">We offer FullStack web solutions for any size company. We utilize the most current technologies to provide you with fully responsive web solutions viewable on any device..</p>
                    <a href="#" class="block font-medium text-[#1B1B1B]">Know more</a>
                </div>
                <img src={ReactImg} class="w-2/3 ml-auto -mb-12" alt="illustration" loading="lazy" width="900" height="600" />
            </div>

            <div class="bg-white border rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 backdrop-filter backdrop-blur-lg bg-opacity-10 border-gray-200 hover:scale-105 duration-300">
                <div class="mb-12 space-y-4">
                    <h3 class="text-2xl font-semibold text-[#1B1B1B]">Blockchain & Smart Contracts</h3>
                    <p class="mb-6">We offer Blockchain solutions for any industry. We offer full-stack crypto services platform that works with crypto-native businesses and institutional clients tailored to meet your needs and budget.</p>
                    <a href="#" class="block font-medium text-[#1B1B1B]">Know more</a>
                </div>
                <img src={BlockchainImg} class="w-2/3 ml-auto" alt="illustration" loading="lazy" width="900" height="600" />
            </div>

            <div class="bg-white border rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 backdrop-filter backdrop-blur-lg bg-opacity-10 border-gray-200 hover:scale-105 duration-300">
                <div class="mb-12 space-y-4">
                    <h3 class="text-2xl font-semibold text-[#1B1B1B]">Mobile Apps (IOS/Android)</h3>
                    <p class="mb-6">We offer Mobile app solutions for any industry. We create apps for both IOS and Android platforms and tailored to meet your needs and budget.</p>
                    <a href="#" class="block font-medium text-[#1B1B1B]">Know more</a>
                </div>
                <img src={MobileImg}  class="w-2/3 ml-auto " alt="illustration" loading="lazy" width="900" height="600" />
            </div>

            <div class="bg-white border rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 backdrop-filter backdrop-blur-lg bg-opacity-10 border-gray-200 hover:scale-105 duration-300">
                <div class="mb-12 space-y-4">
                    <h3 class="text-2xl font-semibold text-[#1B1B1B]">Hosting Packages</h3>
                    <p class="mb-6">Once we build out your FullStack  solution, let us host your website. We offer affordable hosting solutions to launch your new site. Inquire for rates.</p>
                    <a href="#" class="block font-medium text-[#1B1B1B]">Know more</a>
                </div>
                <img src={HostingImg} class="w-2/3 ml-auto " alt="illustration" loading="lazy" width="900" height="600" />
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default Services