import React from 'react'
import { FaItalic } from 'react-icons/fa'
import img from '../images/j10.jpg'
import img1 from '../images/t7.jpg'
import '../style/Men.css'
 const WomenData=[
    { id: 1,name:'New Arrivels',pic: img},
     { id: 2,name:'Basic Tees',pic: img1 }
 ]

const Men = () => {
    return (
        <>
            <div className='flex flex-wrap gap-8 pl-16 pt-14'>
                 {WomenData.map((it)=>(
            <>
                <div key={it.id} >
                    <img className='w-[250px] h-[250px]  rounded-lg gap-4' src={it.pic}></img>
                    <p className='text-center pt-4'>{it.name}</p>
                    <button className='text-center ml-20 mt-2 leading-3'>Shop Now</button>

                </div>
                
            </> 

                 ))} 

                {/* <img src={img} className="w-[250px] h-[250px] rounded-lg" alt='img1' ></img>
                
                <img src={img1} className="w-[250px] h-[250px] rounded-lg" alt='img2'></img> */}
                <div className='men-right flex  leading-10'>
                    <div>
                        <p className='font-bold text-gray-700'>Clothing</p>
                        <button className='text-sm font-bold text-gray-500 pl-4'>Top</button><br/>
                        <button className='text-sm font-bold text-gray-500 pl-4'>dresses</button><br/>
                        <button className='text-sm font-bold text-gray-500 pl-4'>pant</button><br/>
                        <button className='text-sm font-bold text-gray-500 pl-4'>danim</button><br/>
                        <button className='text-sm font-bold text-gray-500 pl-4'>sweater</button><br/>
                        <button className='text-sm font-bold text-gray-500 pl-4'>t-shits</button><br/>
                        <button className='text-sm font-bold text-gray-500 pl-4'>Jackets</button><br/>
                        <button className='text-sm font-bold text-gray-500 pl-4'>ActiveWear</button><br/>
                        <button className='text-sm font-bold text-gray-500 pl-4'>Browse ALl</button><br/>
                       
                    </div>

                    <div>
                        <p className='font-bold text-gray-700'>Accessories</p>
                       
                        <button className='text-sm font-bold text-gray-500 pl-4'>Watches</button><br/>
                        <button className='text-sm font-bold text-gray-500 pl-4'>Wallets</button><br/>
                        <button className='text-sm font-bold text-gray-500 pl-4'>Bag</button><br/>
                        <button className='text-sm font-bold text-gray-500 pl-4'>Sunglasses</button><br/>
                        <button className='text-sm font-bold text-gray-500 pl-4'>Hats</button><br/>
                        <button className='text-sm font-bold text-gray-500 pl-4'>Belts</button><br/>
                        
                       
                    </div>
                    <div>
                        <p className='font-bold text-gray-700'>Brands</p>
                        <button className='text-sm font-bold text-gray-500 '>Fully Nelson</button><br/>
                        <button className='text-sm font-bold text-gray-500 '>My way</button><br/>
                        <button className='text-sm font-bold text-gray-500 '>Re_arrange</button><br/>
                        <button className='text-sm font-bold text-gray-500 '>Counties</button><br/>
                        <button className='text-sm font-bold text-gray-500 '>Hats</button><br/>
                        <button className='text-sm font-bold text-gray-500 '>Belts</button><br/>
                        
                       
                    </div>
                </div>

            </div>


        </>


    )
}

export default Men