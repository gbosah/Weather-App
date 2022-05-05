import React, { useState } from 'react';
import Navbar from './components/Navbar';

const App = () => {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('')
  const [celsuis, setCelsuis] = useState(true)


  function searchLocation(event) {
    if (event.key === 'Enter') {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=3faa63e6e0cdb5f4589dbf9d507fe17c&units=imperial`)
    .then(res => res.json())
    .then(data => setData(data))
    setLocation('')
    }
  }

  function handleChange(event) {
    setLocation(event.target.value)
  }

  function changeCelsuis() {
    return(
       (data.main.temp - 32) * 5/9
    )
  }

  function celsuisClick() {
    setCelsuis(!celsuis)
  }

  
  return (
    <div className='h-screen bg-no-repeat bg-cover bg-[url(https://cdn.pixabay.com/photo/2018/05/30/00/24/thunderstorm-3440450_960_720.jpg)]'>
      <Navbar handleChange={handleChange} 
      location={location} 
      searchLocation={searchLocation}/>
      {data.weather !== undefined &&
         <div className=' m-auto w-[300px] mt-20 bg-inherit '>
      
        <div className='flex flex-row space-x-10 justify-center items-center pr-10 py-2 bg-inherit '>
            <div className='flex flex-col px-4'>
                  <h3 className='text-2xl font-medium pr-12 text-gray-100'>{data.name}</h3>
                  <p className='text-xl text-gray-200'>{data.sys ? data.sys.country : null}</p>
            </div>

            <div className='flex flex-col'>
                  <p>{data.weather ? <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} 
                  alt="icongit" /> : null}</p>
              
                  <h3 className='text-xl text-gray-100 font-bold'>{data.weather ? data.weather[0].main : null}</h3>
            </div>
      </div>
          <div className=' py-5 px-20 m-auto bg-inherit flex flex-row space-x-10 justify-center items-center mt-5'>
                  <div>
                      <h3 className='text-4xl font-bold text-gray-300'>{celsuis ? <p>{data.main.temp.toFixed()}°F</p> : <p>{changeCelsuis().toFixed()}°C</p>} </h3>
                  </div>

              <div className=' space-y-5 text-gray-100 bg-inherit px-10 py-5 rounded-lg'>
                  <p className='text-xl font-normal'>{data.main ? <p>Humidity: {data.main.humidity}%</p> : null }</p>
                  <p className='text-xl font-normal'>{data.main ? <p>Pressure: {data.main.pressure} hpa</p> : null }</p>
              </div>
            </div>
            <div className='flex justify-end px-5 pb-2 text-gray-100'>
            <button onClick={celsuisClick} className=' font-bold rounded-xl px-2'>Change to Celsuis</button>
            </div>
            </div>
}
    </div>
  
  );
};

export default App;