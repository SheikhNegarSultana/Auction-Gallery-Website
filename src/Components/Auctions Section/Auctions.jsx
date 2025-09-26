import React, { useEffect, useState } from 'react';
import Auction from './Auction';
import FavoriteItems from './FavoriteItems';

const Auctions = () => {

    const [items, setItems] = useState([])

    useEffect(()=>{
        fetch('bidItems.json')
        .then(res => res.json())
        .then( data => setItems(data))
    },[])


    const [favItemsList , setFavItemsList ] = useState([])

    const handleFavCount = (favItemListDetails) =>{
        setFavItemsList( prev => [...prev,favItemListDetails])
    }


    // Remove Items

    const handleRemoveItems = (id) =>{
        setFavItemsList( favItemsList.filter( item => item.id !== id) )
        console.log('clicked')
    } 


    
    return (
        <>



        <div className=' px-[7.8rem] py-[7rem] bg-[#EBF0F5]'>

        <div >
            <h1 className=' font-medium text-[1.8rem] text-[#0E2954] '>Active Auctions</h1>
            <p>Discover and bid on extraordinary items</p>
        </div>


<div className=' flex gap-[1rem] mt-[2rem] items-start '>

        {/* Items */}
<div className=' bg-white w-[70%] rounded-2xl   '>

<table className="table-auto text-left">
  <thead className=' gap-[1rem] border-b border-[#DCE5F3]'>
    <tr>
          <th className="px-[1rem] py-[1rem] font-normal ">Items</th>
          <th className="px-4 py-3 font-normal ">Current Bid</th>
          <th className="px-4 py-3 font-normal ">Time Left</th>
          <th className="px-4 py-3 font-normal ">Bid Now</th>
    </tr>
  </thead>
  <tbody>
        {
            items.map( item => 
            <Auction 
            key={item.id} 
            item={item}
            handleFavCount={handleFavCount}
            ></Auction> )
        }
  </tbody>
</table>

</div>


        {/* Favorites */}
        <div className='bg-white w-[30%] rounded-2xl '>
       <FavoriteItems 
       favItemsList={favItemsList}
       handleRemoveItems={handleRemoveItems}></FavoriteItems>

        </div>



</div>
            
        </div>
        </>

    );
};

export default Auctions;