import React from 'react';
import { GoHeart } from "react-icons/go";

const Auction = ({ item }) => {

    const { image, title, currentBidPrice, timeLeft } = item

    return (
        <>

<tr className='border-b border-[#DCE5F3] '>
       <td className="px-4 py-3 flex items-center gap-3 ">
            <img src={image} alt="Vintage Leica Camera" class="w-12 h-12 object-cover " />
            <span className='text-[#0E2954] font-normal'>{title}</span>
        </td>
        <td className=" px-11 py-3 text-[#0E2954] font-medium">${currentBidPrice}</td>
        <td className="px-4 py-3 font-medium text-[#0E2954] ">{timeLeft}</td>
        <td className="px-9 py-3 text-[1.4rem] text-[#0E2954]"><GoHeart /></td>
</tr>

       </>
    );
};

export default Auction;