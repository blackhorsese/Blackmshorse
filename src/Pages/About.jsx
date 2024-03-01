import React from 'react'

export default function About() {
  return (
    <>
    <section id='about' className='mx-auto items-center justify-center scroll-smooth duration-500 text-[#e0e0e0] lg:pt-20 sm:pt-10 md:pt-10 pt-12'>
        <div className='mx-auto justify-center max-w-screen-xl lg:px-10 sm:px-10 md:px-10 px-5'>
            <div className='mx-auto text-[#000] items-center'>
                <div className=''>
                    <h1 className='lg:text-5xl md:text-4xl sm:text-4xl text-3xl mx-auto text-[#000] lg:py-5 py-2'>
                        Echoes of Eco-Luxury
                    </h1>
                    <p className='pt-3 tracking-wide text-sm md:text-lg text-[#000000]'>
                        Embark on a journey where luxury meets sustainability. Introducing our premium, all-electric fleet, featuring the revolutionary EQV VAN Electric 6 seater Van and the iconic Mercedes-Benz S-Class, 
                        crafted for discerning travelers seeking the pinnacle of comfort and eco-conscious elegance. 
                        <br/>
                        <br/>
                        From the heart of London to the serene landscapes of South Hampton, the vibrant Midlands, and the global gateway of Heathrow, your travel is transformed into an experience of unparalleled sophistication and environmental stewardship. 
                        Join us to redefine luxury travel, where every mile is a testament to our commitment to excellence and the planet. 
                        Discover the future of luxury travel with us—where your journey is as impactful as your destination.
                    </p>
                </div>
                <div className='flex justify-items-center gap-x-5 mx-auto lg:pt-12 sm:pt-16 pt-10'>
                    <a href='/'>
                        <button className='bg-black text-white rounded-md w-36 flex-1 relative px-6 py-2 font-semibold hover:bg-opacity-80 tracking-wider' type='button'>
                            Book Now  
                        </button>
                    </a>
                    <a href='/'>
                        <button className='bg-black text-white rounded-md px-6 py-2 font-semibold hover:bg-opacity-80 tracking-wider' type='button'>
                            Call Us
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </section>
    </>
  )
} 