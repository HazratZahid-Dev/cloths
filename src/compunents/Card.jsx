import React from 'react'
import CardData from '../Config/CardData'
import { FaShoppingCart } from "react-icons/fa";

import '../style/Card.css'

const Card = () => {
  return (
    

    <div className='flex flex-wrap  gap-7 pt-4 justify-center main-card-cloths ' >
      
    {CardData.map((it)=>(
        <>
        
            <div  className='w-[370px] h-[460px] p-4 bg-slate-300 cloths-card'>
                <div key={it.id} className='    '>
                    <div>
                        <img src={it.pic} alt='error' className='w-[300px] h-[280px] m-auto rounded-md'></img>
                    </div>
                    <p className='text-center font-bold p-4 Card__name '>{it.name}</p>
                    <p className=' text-center Card__desc'>{it.desc}</p>
                    <button className='product-btn flex gap-2 rounded-md' type='button' ><span className='mt-1'><FaShoppingCart/></span>Add To Cart</button>
                </div>
            </div>
        </>

       
    ))}

    </div>

   
  )
}

export default Card