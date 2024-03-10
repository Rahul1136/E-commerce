import React from 'react'
import { IoLogoFoursquare } from "react-icons/io5";
import { RiVisaFill } from "react-icons/ri";
import { FaCcPaypal } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";
import { FaGooglePay } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { SiPaypal } from "react-icons/si";
import { FaHouseChimney } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";



const Footer = () => {
  return (
    <div className='bg-black text-[#949494] font-titleFont py-20'>
        <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
            <div className='flex flex-col gap-2'>
                <img className='w-32' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqQkH6ulBQN-1GVE84FCnqFWEIr-khDCmqeg&usqp=CAU' alt='' />
                <p className='text-white text-sm tracking-wide p-2'>FlashStore.com</p>
                
                <div className='flex gap-3 w-100 text-lg text-gray-400'>
                    <RiVisaFill className='size-10 hover:text-white duration-300'/>
                    <FaCcPaypal className='size-10 hover:text-white duration-300'/>
                    <SiPaytm className='size-10 hover:text-white duration-300'/>
                    <FaGooglePay className='size-10 hover:text-white duration-300'/>
                </div>
                <div className='flex gap-3 text-lg text-gray-500'>
                        <FaGithub className='size-10 hover:text-white duration-300'/>
                        <FaInstagram className='size-10 hover:text-white duration-300'/>
                        <FaYoutube className='size-10 hover:text-white duration-300'/>
                        <FaFacebookF className='size-10 hover:text-white duration-300'/>
                </div>
            </div>
            
            <div>
                <h2 className='text-2xl font-semibold text-white mb-4'>Locate us</h2>
                <p>Sangli</p>
                <p>Mobile:7028034080</p>
                <p>Email:rahulmk1434@gmail.com</p>
                <p></p>
            </div>
            
            <div>
            <h2 className='text-2xl font-semibold text-white mb-4'>Profile</h2>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><BsFillPersonFill/></span>my account</p>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><SiPaypal /></span>checkout</p>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><FaHouseChimney /></span>order tracking</p>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><IoLocationSharp /></span>help & support</p>
            </div>

            <div className='flex flex-col justify-center'>
                <input className='bg-transparent border px-4 py-2 text-sm' type='text' placeholder='Email' />
                <button className='text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black'>Subscribe</button>
            </div>

        </div>
    </div>
  )
}

export default Footer