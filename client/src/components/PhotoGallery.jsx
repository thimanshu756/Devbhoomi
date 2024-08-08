import React from 'react'
import ImageCard from './ImageCard';
import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from 'react-icons/io';   
const PhotoGallery = () => {
  return (
    <div className='my-20 bg-white flex flex-col justify-center items-center'>
        <h3 className='text-3xl font-semibold my-14'>Photos</h3>

        {/*📌all my photos will go there :  */}
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 mb-20'>

            {/*image card will go there */}
                    <ImageCard
                         title="The Beach" author="anshuman" img="https://images.pexels.com/photos/3238764/pexels-photo-3238764.jpeg" price ={10} 
                         icon1 = { 
                            <FaShoppingCart className='text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />
                        }
                        icon2={
                        <IoIosHeart className='text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />
                        } 
                    />

                    <ImageCard
                         title="The Unknown" author="anshuman" img="https://images.pexels.com/photos/26159384/pexels-photo-26159384/free-photo-of-a-window-with-a-flower-box-on-it.jpeg" price ={25} 
                         icon1 = { 
                            <FaShoppingCart className='text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />
                        }
                        icon2={
                        <IoIosHeart className='text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />
                        } 
                    />
                    <ImageCard
                         title="The Unknown" author="anshuman" img="https://images.pexels.com/photos/26159384/pexels-photo-26159384/free-photo-of-a-window-with-a-flower-box-on-it.jpeg" price ={25} 
                         icon1 = { 
                            <FaShoppingCart className='text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />
                        }
                        icon2={
                        <IoIosHeart className='text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />
                        } 
                    />
                    <ImageCard
                         title="The Unknown" author="anshuman" img="https://images.pexels.com/photos/26159384/pexels-photo-26159384/free-photo-of-a-window-with-a-flower-box-on-it.jpeg" price ={25} 
                         icon1 = { 
                            <FaShoppingCart className='text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />
                        }
                        icon2={
                        <IoIosHeart className='text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />
                        } 
                    />
                    <ImageCard
                         title="The Unknown" author="anshuman" img="https://images.pexels.com/photos/26159384/pexels-photo-26159384/free-photo-of-a-window-with-a-flower-box-on-it.jpeg" price ={25} 
                         icon1 = { 
                            <FaShoppingCart className='text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />
                        }
                        icon2={
                        <IoIosHeart className='text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />
                        } 
                    />
                    <ImageCard
                         title="The Unknown" author="anshuman" img="https://images.pexels.com/photos/26159384/pexels-photo-26159384/free-photo-of-a-window-with-a-flower-box-on-it.jpeg" price ={25} 
                         icon1 = { 
                            <FaShoppingCart className='text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />
                        }
                        icon2={
                        <IoIosHeart className='text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />
                        } 
                    />
                    <ImageCard
                         title="The Unknown" author="anshuman" img="https://images.pexels.com/photos/26159384/pexels-photo-26159384/free-photo-of-a-window-with-a-flower-box-on-it.jpeg" price ={25} 
                         icon1 = { 
                            <FaShoppingCart className='text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />
                        }
                        icon2={
                        <IoIosHeart className='text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />
                        } 
                    />
                    <ImageCard
                         title="The Unknown" author="anshuman" img="https://images.pexels.com/photos/26159384/pexels-photo-26159384/free-photo-of-a-window-with-a-flower-box-on-it.jpeg" price ={25} 
                         icon1 = { 
                            <FaShoppingCart className='text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />
                        }
                        icon2={
                        <IoIosHeart className='text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />
                        } 
                    />
           
        </div>

    </div>
  )
}

export default PhotoGallery
 