import React from 'react'
import ProductCard from './ProductCard'

const Products = ({products}) => {

  return (
    <div className='py-10 bg-black'>
        <div className='flex flex-col items-center gap-4'>
            <h1 className='tex-2xl bg-black text-white py-2 w-80 text-center'>Shopping everyday</h1>
            <span className='w-20 h-[3px] bg-black'></span>
            <p className='text-center max-w-[700px] text-gray-600 text-white'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
        <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10 text-white'> 
            {
              products.map((item) =>(
                <ProductCard key={item._id} product ={item}/>
              ))
            }
        </div>
    </div>
  )
}

export default Products