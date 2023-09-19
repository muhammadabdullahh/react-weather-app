import React from 'react'
import {
    UilSun,
    UilWind,
    UilTear,
    UilSunset,
    UilTemperature,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconURLFromCode } from '../services/weatherService';

function TempDetails({ weather: { feels_like, humidity, temp, temp_max, temp_min, sunrise, sunset, icon, speed } }) {
    return (
        <div>

            <div className='flex items-center justify-center my-2 '>
                <img
                    src={iconURLFromCode(icon)}
                    alt=''
                    className='my-2'
                />
            </div>

            <div className='flex items-center justify-center text-white my-2'>

                <p className='text-9xl'>
                    {`${temp.toFixed()}°C`}
                </p>
            </div>
            <div className='flex flex-col space-y-2 text-white'>

                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTemperature size={18} className='mr-1' />
                    Feels like:
                    <span className='font-medium ml-1'>
                        {`${feels_like.toFixed()}°C`}
                    </span>
                </div>

                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTear size={18} className='mr-1' />
                    Humidity:
                    <span className='font-medium ml-1'>
                        {`${humidity.toFixed()}%`}
                    </span>
                </div>

                <div className='flex font-light text-sm items-center justify-center'>
                    <UilWind size={18} className='mr-1' />
                    Wind:
                    <span className='font-medium ml-1'>
                        {`${speed.toFixed()} km/h`}
                    </span>
                </div>

            </div>

            <div className='flex flex-col items-center justify-center sm:flex-row sm:items-center sm:space-x-2 text-white text-sm py-3'>
                <div className="flex items-center">
                    <UilSun />
                    <p className='font-light'>
                        Rise: <span>{formatToLocalTime(sunrise, "hh:mm a")}</span>
                    </p>
                </div>
                <div className="flex items-center">
                    <UilSunset />
                    <p className='font-light'>
                        Set: <span>{formatToLocalTime(sunset, "hh:mm a")}</span>
                    </p>
                </div>
                <div className="flex items-center">
                    <UilSun />
                    <p className='font-light'>
                        High: <span>{`${temp_max.toFixed()}°C`}</span>
                    </p>
                </div>
                <div className="flex items-center">
                    <UilSun />
                    <p className='font-light'>
                        Low: <span>{`${temp_min.toFixed()}°C`}</span>
                    </p>
                </div>
            </div>


        </div>
    )
}

export default TempDetails