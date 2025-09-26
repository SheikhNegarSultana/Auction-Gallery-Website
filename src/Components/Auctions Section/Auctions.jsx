import React, { useEffect, useState } from 'react';
import Auction from './Auction';

const Auctions = () => {

    const [items, setItems] = useState([])

    useEffect(()=>{
        fetch('bidItems.json')
        .then(res => res.json())
        .then( data => setItems(data))
    },[])

    return (
        <>



        <div className=' px-[7.8rem] py-[7rem] bg-[#EBF0F5]'>

        <div >
            <h1 className=' font-medium text-[1.8rem] text-[#0E2954] '>Active Auctions</h1>
            <p>Discover and bid on extraordinary items</p>
        </div>


<div className=' flex gap-[1rem] mt-[2rem] '>

        {/* Items */}
<div className=' bg-white w-[70%] rounded-2xl   '>

<table className="table-auto text-left">
  <thead className=' gap-[1rem] border-b border-[#DCE5F3]'>
    <tr>
          <th class="px-[1rem] py-[1rem] font-normal ">Items</th>
          <th class="px-4 py-3 font-normal ">Current Bid</th>
          <th class="px-4 py-3 font-normal ">Time Left</th>
          <th class="px-4 py-3 font-normal ">Bid Now</th>
    </tr>
  </thead>
  <tbody>
        {
            items.map( item => <Auction key={item.id} item={item}></Auction> )
        }
  </tbody>
</table>

</div>


        {/* Favorites */}
        <div className='bg-white w-[30%]'>
       

        </div>



</div>
            
        </div>
        </>

    );
};

export default Auctions;