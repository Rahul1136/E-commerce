import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {MdOutlineClose} from 'react-icons/md';
import {HiOutlineArrowLeft} from 'react-icons/hi';
import { IoMdClose } from "react-icons/io";
import {decrementQuantity, deleteItem, incrementQuantity, resetCart} from '../redux/BazarSlice'
import { ToastContainer, toast } from 'react-toastify';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const CartItem = () => {
    const productData = useSelector((state)=> state.bazer.productData);
    const dispatch = useDispatch();

  return (
    <div className='w-2/3 pr-10'>
        <div className='w-full'>
            <h2 className='font-titleFont text-2xl'>Shopping Cart</h2>
        </div>
        <div>
            {
                productData.map((item) =>(
                    <div key={item._id} className='flex items-center justify-between gap-6 mt-6'>
                        <div className='items-center flex gap-2'>
                            <IoMdClose onClick={() => dispatch(deleteItem(item._id))& toast.error(`${item.title} is removed`)} className='text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300' />
                            <img className='w-32 h-32 object-cover' src={item.image} alt='' />
                        </div>
                        <h2 className='w-52'>{item.title}</h2>
                        <p className='w-10'>{item.price}</p>
                        <p className='text-sm'>Quantity</p>
                            <div className='flex gap-4'>
                                <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
                                    <p className='text-sm'>Quantity</p>
                                    <div className='flex items-center gap-4 text-sm font-semibold'>
                                        <span onClick={() =>
                                        dispatch(
                                            decrementQuantity({
                                                _id:item._id,
                                                title:item.title,
                                                image:item.image,
                                                price:item.price,
                                                quantity:1,
                                                description:item.description,
                                            })
                                        )} className='border h-5 font-normal text-lg flex items-center justify-center
                                        px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>-</span>
                                        <span>{item.quantity}</span>
                                        <span onClick={() =>
                                        dispatch(
                                            incrementQuantity({
                                                _id:item._id,
                                                title:item.title,
                                                image:item.image,
                                                price:item.price,
                                                quantity:1,
                                                description:item.description,
                                            })
                                        )} className='border h-5 font-normal text-lg flex items-center justify-center
                                        px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>+</span>
                                    </div>
                                </div>
                            </div>
                            <p className='w-14'>${item.quantity * item.price}</p>
                        </div>
                ))
            }
        </div>
        <button onClick={() => dispatch(resetCart()) & toast.error('Your cart is Empty')} className='bg-red-500 text-white mt-6 ml-5 py-1 px-6'>Reset Cart</button>
        <Link to='/'>
            <button className='mt-8 flex ml-4 items-center gap-1 text-gray-600 hover:text-black duration-300'>
                <span>
                    <HiOutlineArrowLeft />
                </span>
                Go to Shopping
            </button>
        </Link>
        <ToastContainer 
            position = "top-left"
            autoClose = {2000}
            hideProgressBar = {false}
            newsOnTop = {false}
            closeOnClick rtl ={false}
            pauseOnFocusLoss draggable pauseOnHover theme = "dark"
        />
    </div>
  )
}

export default CartItem