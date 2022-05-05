import React from 'react';

const Navbar = ({handleChange, location, searchLocation}) => {
    return (
        <nav className='w-full sticky top-0 flex flex-col md:flex-row md:justify-around' >
            <div className='mr-2 md:mr-20 py-5 text-white flex px-5 '>
            <img src="https://cdn.iconscout.com/icon/free/png-256/cloudy-weather-11-1147979.png" alt="" 
                className='h-[50px] text-inherit items-center '/>
                <h3 className='text-3xl px-10'>Weather App</h3>
            </div>
            <div className='py-5 mx-3'>
            <input type="text" className='bg-inherit border-b px-4 focus:outline-none focus:text-white  placeholder:text-white'
                   placeholder='Enter your city'
                   value={location}
                   onChange={handleChange}
                   onKeyPress={searchLocation}
            />
            </div>
        </nav>
    );
};

export default Navbar;