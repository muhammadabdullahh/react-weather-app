import React from 'react'

function TopButtons() {
  
    const cities = [
        {
            id: 1,
            title: 'Location1'
        },
        {
            id: 2,
            title: 'Location2'
        },
        {
            id: 3,
            title: 'Location3'
        },
        {
            id: 4,
            title: 'Location4'
        },
        {
            id: 5,
            title: 'Location5'
        }
    ]
  
    return (
        <div className="flex items-center justify-around my-6">
         {cities.map((citiy) => (

                <button key={citiy.id} className="text-white text-lg font-medium">
                    {citiy.title}
                </button>

          ))}
        </div>
    );
}

export default TopButtons