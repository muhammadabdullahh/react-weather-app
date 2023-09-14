import React from 'react'

function TopButtons({setQuery}) {
  
    const cities = [
        {
            id: 1,
            title: 'Paris'
        },
        {
            id: 2,
            title: 'New York'
        },
        {
            id: 3,
            title: 'Tokyo'
        },
        {
            id: 3,
            title: 'Dubai'
        },
        {
            id: 3,
            title: 'Toronto'
        }
    ]
  
    return (
        <div className="flex items-center justify-around my-6 ">
         {cities.map((city) => (

                <button key={city.id} 
                className="text-white text-lg font-medium transition ease-out hover:scale-125"
                onClick={() => setQuery({q: city.title})}>
                    {city.title}
                </button>

          ))}
        </div>
    );
}

export default TopButtons