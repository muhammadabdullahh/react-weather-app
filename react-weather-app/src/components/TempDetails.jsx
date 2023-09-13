import React from 'react'
import {
    UilArrowDown,
    UilArrowUp,
    UilSun,
    UilWind,
    UilTear,
    UilSunset,
    UilTemperature,
} from "@iconscout/react-unicons";

function TempDetails() {
  return (
    <div>

        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
            <p>Atmosphere</p>
        </div>

        <div className='flex items-center justify-between text-white'>
            <img
                src='http://openweathermap.org/img/wn/01d@2x.png'
                alt=''
                className='w-20'
            />

            <p className='text-5xl'>
                00°
            </p>

            <div className='flex flex-col space-y-2'>

                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTemperature size={18} className='mr-1'/>
                    Feels like:
                    <span className='font-medium ml-1'>
                        00°
                    </span>
                </div>

                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTear size={18} className='mr-1'/>
                    Humidity:
                    <span className='font-medium ml-1'>
                        00%
                    </span>
                </div>

                <div className='flex font-light text-sm items-center justify-center'>
                    <UilWind size={18} className='mr-1'/>
                    Wind:
                    <span className='font-medium ml-1'>
                        00 km/h
                    </span>
                </div>

            </div>
            

        </div>

        <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
             
            <UilSun />
            <p className='font-light'>
                Rise: <span>00:00 AM</span>
            </p>
            <p className='font-light'>|</p>

            <UilSunset />
            <p className='font-light'>
                Set: <span>00:00 AM</span>
            </p>
            <p className='font-light'>|</p>

            <UilSun />
            <p className='font-light'>
                High: <span>00°</span>
            </p>
            <p className='font-light'>|</p>

            <UilSun />
            <p className='font-light'>
                Low: <span>00°</span>
            </p>
            <p className='font-light'>|</p>

        </div>

    </div>
  )
}

export default TempDetails