import React, { useState } from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

function Inputs({ setQuery, units, setUnits }) {
    const [city, setCity] = useState('')

    const handleSearchClick = () => {
        if (city !== '') setQuery({q: city})
    }

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                setQuery({
                    lat,
                    lon
                });
            });
        };
    };

    return (
        <div className='flex flex-row justify-center my-6'>

            <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>

                <input
                    value={city}
                    onChange={(e) => setCity(e.currentTarget.value)}
                    type='text'
                    placeholder='search...'
                    className='text-xl font-light p-4 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase rounded-full'
                />
                <UilSearch
                    size={25}
                    className="text-white cursor-pointer transition ease-out hover:scale-125" 
                    onClick={handleSearchClick}/>
                <UilLocationPoint
                    size={25}
                    className="text-white cursor-pointer transition ease-out hover:scale-125" 
                    onClick={handleLocationClick}/>
            </div>

        </div>
    )
}

export default Inputs