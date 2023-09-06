import React from 'react'

const getData = async () => {
    let response = await axios.get("https://api.solarenergypros.org/api/solar_inquiries");
    // let response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
    // response = await response.json();
    // response = response.meals;
    
    return response.data.solar_inquiries;
}

const page = ({params}) => {
  return (
    <div className='min-h-[500px] flex items-center justify-center'>
        <div className='bg-white w-[40%] p-20'>
            {params.id}
        </div>
    </div>
  )
}

export default page