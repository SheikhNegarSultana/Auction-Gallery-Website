import React from 'react';


const Banner = () => {
    return (

        <div className=' hero-overlay min-h-[28rem] bg-[url(https://i.postimg.cc/fWgmHFsf/Banner-min.jpg)] bg-no-repeat bg-cover   '>

        <div className=' py-[9.6rem] px-[8rem] '>
            
            <h1 className=' font-semibold text-[2.4rem] text-white'>Bid on Unique Items from<br></br> Around the World</h1>

            <h3 className=' font-light text-[1.2rem] mt-[1rem] text-white'>Discover rare collectibles, luxury goods, and vintage <br></br> treasures in our curated auctions</h3>

            <button className=' mt-[2rem] font-medium bg-white px-[2rem] py-[1rem] rounded-full cursor-pointer '>Explore Auctions</button>
        </div>

        </div>
        
    );
};

export default Banner;

