import React from 'react'
import {product} from '../data'

export default function Shop() {
  return (
    <div className='p-8 flex justify-center flex-col items-center'>
        <div className='justify-center items-center flex flex-col space-y-5 pb-20 pt-10'>
            <p>FALL WINTER' 24</p>
            <p  className='text-xl font-semibold'>THE GRACE TO DO IT ALL</p>
        </div>

        <div className='grid lg:grid-cols-4 grid-cols-2 justify-between gap-6'>

          

            {product.map((items, id) => ( 
              <div key={id} className='flex flex-col justify-center items-center uppercase' > 
                 <img src={items.imgUrl} className='h-[300px] w-full'  />
                <p className='py-3'> {items.name} </p>
                <p className='pb-3'> $ {items.price} </p>
                <button className='border-black/30 w-full p-3 border lg:hidden'>QUICK ADD</ button>
              </div>
            ))}
             
         
       
        
         
        
       
        
            
        </div>

        <div className='py-20'>
            <button className='bg-black text-white font-semibold p-3 px-8'>DISCOVER MORE</button>
        </div>
    </div>
  )
}
