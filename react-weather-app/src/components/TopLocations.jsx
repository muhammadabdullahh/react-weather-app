import React from 'react'

function TopButtons() {
  
    const cities = [
        {
            id: 1,
            title: 'Toronto'
        },
        {
            id: 2,
            title: 'Tokyo'
        },
        {
            id: 3,
            title: 'Sydney'
        }
    ]
  
    return (
        <div className="flex items-center justify-around my-6 ">
         {cities.map((citiy) => (

                <button key={citiy.id} className="text-white text-lg font-medium transition ease-out hover:scale-125">
                    {citiy.title}
                </button>

          ))}
        </div>
    );
}

export default TopButtons