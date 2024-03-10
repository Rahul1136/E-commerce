import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem';
import { ToastContainer, toast } from 'react-toastify';
import StripeCheckout from 'react-stripe-checkout';


const Cart = () => {
  const productData = useSelector((state)=> state.bazer.productData);
  const userInfo = useSelector((state) => state.bazer.userInfo);
  const [totalAmt, setTotalAmt] = useState("");
  const [payNow, setPayNow] = useState(false);

  useEffect(()=>{
    let price =0;
    
      productData.map((item) => {
        price += item.price * item.quantity;
        return price;
      })
      setTotalAmt(price.toFixed(2)); 

  },[productData])

  const handleCheckOut = () =>{
    if(userInfo){
      setPayNow(true);
    } 
    else{
      toast.error("Please Sign in to checkout");
    }
  }

  return (
    <div>
      <img className='w-full h-60 object-cover' 
      src='https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg' 
      alt='cartImg' />
      
      <div className='max-w-screen-xl mx-auto py-20 flex'>
        <CartItem />
        <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
          <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
            <h2 className='text-2xl font-medium'>Cart Totals</h2>
            
            <p className='flex items-center gap-4 text-base'>
             subtotal{""}
             <span className='font-titleFont font-bold text-lg'>{totalAmt}</span>
            </p>

            <p className='flex items-center gap-4 text-base'>
             Shipping{""}
             <span>Lorem Empsum website help for genrating texts</span>
            </p>
          </div>
          <p className='font-titleFont font-semibold flex justify-between mt-6'>Total<span className='text-xl font-bold'>{totalAmt}</span></p>
          <button onClick={handleCheckOut} className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300'>proceed to checkout</button>
          {
            payNow && (<div className='w-full mt-6 flex items-center justify-center'>
              <StripeCheckout
              stripeKey='pk_test_51OfHVeSBvb1ByCdOuABJzMbFR2jXEsvN00YrxmMfNd4NpJUO7h2T4nokRxuqqfQ3U6uM0BVHjrn8qkvN3hVKOHlP006tfYsV7y'
              name='Bazer Ecommerece'
              amount={totalAmt*100}
              label='Pay to bazer'
              description={`Your payment amount is ${totalAmt}`}
              email={userInfo.email}
              />
              </div>
          )}
        </div>
       </div>
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

export default Cart