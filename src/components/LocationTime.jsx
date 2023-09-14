import React from 'react'

function LocationTime({ weather: { name, country } }) {
  return (
    <div>
        <div className='flex items-center justify-center mt-12'>
            <p className='text-white text-5xl font-medium'>
                {`${name}, ${country}`}
            </p>
        </div>

    </div>
  )
}

export default LocationTime;