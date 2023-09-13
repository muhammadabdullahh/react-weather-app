import React from 'react'

function LocationTime() {
  return (
    <div>
        <div className='flex items-center justify-center my-6'> 
            <p className='text-white text-xl font-extralight'>
                Day, DD Month YY | Local Time: hh:mm PM/AM
            </p>
        </div>

        <div className='flex items-center justify-center my-3'>
            <p className='text-white text-3xl font-medium'>
                Location
            </p>
        </div>

    </div>
  )
}

export default LocationTime;