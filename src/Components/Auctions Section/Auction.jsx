import React, { useId, useState } from 'react';
import { GoHeart,GoHeartFill  } from "react-icons/go";
import { ToastContainer, toast } from 'react-toastify';


const Auction = ({ item, handleFavCount }) => {

    const { image, title, currentBidPrice, timeLeft, bidsCount } = item

    // React Toastify

    const favItemListDetails = { image, title, currentBidPrice, bidsCount }

    const containerId = useId(); 

    const notify = () => toast(
        <h1 className=' font-medium text-white text-[1rem]'>Item Is Added To Your Favorite Lists</h1>
        , { containerId });


    // Button Disable
    const [clicked, setClicked] = useState(false)
    
    

    return (
        <>

            <tr className='border-b border-[#DCE5F3] '>
                <td className="px-4 py-3 flex items-center gap-3 ">
                    <img src={image} alt="Vintage Leica Camera" className="w-12 h-12 object-cover " />
                    <span className='text-[#0E2954] font-normal'>{title}</span>
                </td>
                <td className=" px-11 py-3 text-[#0E2954] font-medium">${currentBidPrice}</td>
                <td className="px-4 py-3 font-medium text-[#0E2954] ">{timeLeft}</td>

                <td className="px-9 py-3 text-[1.4rem]">

                <button

                    className={`${clicked? " text-red-500 cursor-not-allowed" : "text-[#0E2954] cursor-pointer"} `}

                    disabled={clicked}

                    onClick={() =>
                    {handleFavCount(favItemListDetails) ; 
                    notify();
                    setClicked(true);} }>

                    
                    {clicked? <GoHeartFill /> : <GoHeart /> }

                </button>


                <ToastContainer
                        containerId={containerId}  
                        position="top-right"
                        autoClose={5000}
                        newestOnTop
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        theme="dark"
                   />

                </td>
            </tr>



        </>
    );
};

export default Auction;