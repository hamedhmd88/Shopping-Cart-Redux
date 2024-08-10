import React from 'react'
// import { useCart } from '../context/CartProvider'
import BasketCard from '../components/BasketCard';
import empty from "../assets/preview-removebg-preview.png"
import BasketSidbar from '../components/BasketSidbar';
import { useSelector } from 'react-redux';

function CheckOut() {
  const state = useSelector((store) => store.cart);


  // اگر سبک خرید خالی بود
  if(!state.itemsCounter) {
    return (
      <div className='flex flex-col justify-center items-center'>
        <p className='text-2xl mb-5 text-blue-800 font-bold italic'>Basket is Empty !!!</p>
        <img className='w-full h-[600px]' src={empty} alt="empty" />
      </div>
    )
  }


  return (
    <div className="flex justify-between items-start p-2 min-h-[1000px]">
      <BasketSidbar state={state} />
      <div  className="w-full">
      {state.selectedItems.map((product) => (
       <BasketCard key={product.id} data={product}/>
      ))}
      </div>
      
    </div>
  )
}

export default CheckOut
