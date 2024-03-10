import React from 'react'
import { IoLogoFoursquare } from "react-icons/io5";
import { BsFillCartCheckFill } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Header = () => {
    const productData = useSelector((state) =>state.bazer.productData);
    const userInfo = useSelector((state) => state.bazer.userInfo);
    console.log(userInfo);
  return (
    <div className='w-full h-20 bg-gray-700 text-white border-b-[4px] border-b-gray-800 font-titleFont sticky top-0 z-50'>
        <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
            <Link to='/'>
                <div className='flex '>
                    <IoLogoFoursquare className='h-14 w-60 py-2 text-2xl bg-black items-center text-purple-700 justify-center rounded-full hover:text-red-800 hover:underline underline-offset-4' />
                </div>
            </Link>
            <div className='flex items-center gap-9'>
                <ul className='flex items-center gap-9'>
                    <Link to="/aboutus" className='text-base text-white font-bold hover:text-purple-800 hover:underline underline-offset-2 decoration-[1px] cursor-pointer'>About us</Link>
                    <Link to="/shops" className='text-base text-white font-bold hover:text-purple-800 hover:underline underline-offset-2 decoration-[1px] cursor-pointer'>Shops</Link>
                    <Link to="/elements" className='text-base text-white font-bold hover:text-purple-800 hover:underline underline-offset-2 decoration-[1px] cursor-pointer'>Elements</Link>
                    <li className='text-base text-white font-bold hover:text-purple-800 hover:underline underline-offset-2 decoration-[1px] cursor-pointer'>Blogs</li>
                </ul>

                <Link to="/cart">
                <div className='relative'>
                    <AiOutlineShopping className='size-7'/>
                    <span className='absolute w-7 top-2 left-0 text-sm flex items-center justify-center'>{productData.length}</span>
                </div>
                </Link>
                <Link to="/login"><img className='w-8 h-8 rounded-full ' src= {userInfo? userInfo.image : 'https://yt3.ggpht.com/I_wZvHWWTgEHcfYwzn9QRGKz1Vu1lX-hPqOGV_mWkFH17r3QNcfeapcPnplsiRn8s79Ke9WM_PE=s108-c-k-c0x00ffffff-no-rj'} alt='useLogo' /></Link>
                {
                    userInfo && <p className='text-base font-titleFont font-semibold underline underline-offset-2'>{userInfo.name}</p>
                }
            </div>
        </div>
        

    </div>
  )
}

export default Header