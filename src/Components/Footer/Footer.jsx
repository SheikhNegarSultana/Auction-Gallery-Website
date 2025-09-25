import React from 'react';

const Footer = () => {
    return (
        <div>

<footer className=" flex flex-col items-center  bg-white text-base-content rounded p-10">

<a className=" cursor-pointer text-[2rem]">
                        <span className='text-[#003EA4] font-normal'>Auction</span>
                        <span className=' text-[#FFD337] font-bold '>Gallery</span>
</a>

<div className=' mt-[0.4rem]'>
  <nav className="grid grid-flow-col gap-4 font-medium">
    <a className="link link-hover">Bid.</a>
    <a className="link link-hover">Win.</a>
    <a className="link link-hover">Own.</a>
</nav>
</div>

<div className=' mt-[1rem] mb-[1rem]'>
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Auctions</a>
    <a className="link link-hover">Categories</a>
    <a className="link link-hover">How to works</a>
  </nav>
</div>

  <aside>
    <p>© {new Date().getFullYear()}AuctionHub. All rights reserved.</p>
  </aside>
</footer>
            
        </div>
    );
};

export default Footer;