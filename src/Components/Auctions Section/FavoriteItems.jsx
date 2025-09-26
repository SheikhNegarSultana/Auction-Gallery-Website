import React from 'react';
import { GoHeart } from "react-icons/go";
import { RxCrossCircled } from "react-icons/rx";

const FavoriteItems = ({favItemsList}) => {

    // Total Amount
    let totalPrice = 0

    for( const price of favItemsList){
        totalPrice = totalPrice + price.currentBidPrice
    }

    return (
        <div className=' py-[1.4rem]   '>

<div className='border-b gap-[0.4rem] font-medium border-[#DCE5F3] flex items-center justify-center pb-[0.8rem] '>
<GoHeart className=' font-extrabold text-[1.2rem]' />
<h1 className=' text-[1.2rem]  '>Favorite Items</h1>
</div>


{/* Favorite Items Store */}

{favItemsList.length === 0 ? 

<div className=' text-center px-[1.4rem] py-[2rem]'>
<h1 className=' font-medium text-[1.2rem] mb-[1rem]'>No favorites yet</h1>
<p className=' font-normal text-[0.9rem]'>Click the heart icon on any item <br></br> to add it to your favorites</p>
</div>

:

favItemsList.map( (item,index) => (

<div key={index}> 

<div className=' flex gap-[1.2rem] items-center px-[1.4rem] border-b border-[#DCE5F3] py-[1rem] '>
    <img className=' h-[4rem] w-[4rem] object-cover' src={item.image}></img>

<div>

<div className="flex justify-between items-center gap-[1rem]">
  <h1 className="text-[1rem] ">{item.title}</h1>
  <button className="flex items-center justify-center">
    <RxCrossCircled className=' h-[2rem] w-[2rem] font-extrabold cursor-pointer' />
  </button>
</div>


    <div className=' flex justify-between mt-[0.4rem]'>
        <h4 className=' text-[#0E2954] '>${item.currentBidPrice}</h4>
        <h4 className=' text-[#0E2954] '>Bids : {item.bidsCount}</h4>
    </div>
</div>


</div>


</div>))

}



{/* Total Amount */}

{ favItemsList.length === 0 ? 

<div className=' text-[1.1rem] border-t border-[#DCE5F3] flex justify-between px-[1.6rem] pt-[1rem] '>
    <h1>Total bids Amount</h1>
    <h1 className=' font-medium'>
    $0000
    </h1>
</div>


    :

<div className=' text-[1.1rem] border-t border-[#DCE5F3] flex justify-between px-[1.6rem] pt-[1rem] '>
    <h1>Total bids Amount</h1>
    <h1>${totalPrice}</h1>
    
</div>

}

        
            
        </div>
    );
};

export default FavoriteItems;