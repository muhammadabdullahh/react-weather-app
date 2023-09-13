import React from 'react'
import { UilLocationPoint, UilSearch } from '@iconscout/react-unicons'

function Inputs() {
  return (
    <div className='flex flex-row justify-center my-6'>
        
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>

            <input 
                type='text' 
                placeholder='search...'
                className='text-xl font-light p-4 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase rounded-full'
            />
            <UilSearch 
            size={25} 
            className="text-white cursor-pointer transition ease-out hover:scale-125"/>
        </div>

        <div className='flex flex-row w-1/4 items-center justify-center '>
            <button 
            name='metric'
            className='textxl text-white font-light transition ease-out hover:scale-125'>
                °C
            </button>
            <p
            className='text-xl text-white mx-1'>|</p>
            <button 
            name='imperial' 
            className='textxl text-white font-ligh transition ease-out hover:scale-125't >
                °F
            </button>
        </div>
        
    </div>
  )
}

export default Inputs