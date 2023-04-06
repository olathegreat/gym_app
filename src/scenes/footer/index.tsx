import { SelectedPage } from '@/shared/types';
import React from 'react'
import logo from "@/assets/Logo.png"

type Props = {
    setSelectedPage : (value: SelectedPage) => void;
}

const Footer = ({setSelectedPage}: Props) => {
  return (
    <footer className='bg-primary-100 py-16'>
        <div className='justify-center mx-auto w-5/6 gap-16 md:flex'>


            <div className='mt-16 basis-1/2 md:mt-0'>
                <img alt="logo" src={logo}/>

                <p className='my-5'>
                  Get fit and feel great at our gym. Our state-of-the-art facility offers a wide range of equipment,
                 personalized training programs, and expert guidance to help you achieve your fitness goals. Join
                  us today and start your journey towards a healthier, happier you!
                </p>

                <p>© EVOGYM All Rights Reserved.</p>

            </div>

            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Links</h4>
                <p className='my-5'>Yoga</p>
                <p className='my-5'>Training</p>
                <p className='my-5'>Abs Core</p>

            </div>


            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Contact Us</h4>
                <p className='my-5'>You can reach out to the number below</p>
            
                <p>(555) 435-216</p>

                <p className='font-bold'>Developed by <a href="http://olarotimi-dev.vercel.app" className='text-primary-500'>Olarotimi</a></p>

            </div>

        </div>
    
    </footer>
  )
}

export default Footer