"use client";
import React, { useState } from 'react';
import SimpleMultiStepForm from './components/SimpleMultiStepForm';



const Page = () => {
  const [zip, setZip] = useState("");
  const [showForm, setShowForm] = useState(false);
  // console.log(`zip = ${zip} and zip length = ${zip.length} and show form = ${showForm}`)
  const showFormHandler = () => {
    if(zip.length === 5){
      setShowForm(true);
    }
    else{
      setShowForm(false);
    }
  }

  return (
    <div className='bg-gray-100 min-h-screen'>
      
      {showForm === false ? (
        <div className='flex items-center justify-between '>
          <div className='w-[60%] px-[200px] '>
            <div className='bg-gray-400 w-fit py-2 px-5 rounded-full text-white'>You may be eligible for zero down solar!</div>
            <h3 className='text-5xl text-blue-900 font-bold mt-5'>DO YOU QUALIFY?</h3>
            <p className='text-lg font-semibold mt-10'>Enter your zip code to see how much you could save</p>
            <input 
              type="text" 
              placeholder='Your Zip Code *' 
              className='text-gray-600 outline-none border border-gray-400 py-5 px-10 rounded-sm w-full mt-5'
              value={zip}
              onChange={(e)=>setZip(e.target.value)}
            />
            <button
              disabled={zip === "" ? true : false}
              onClick={ showFormHandler }
              className='bg-yellow-400 py-5 px-10 w-full rounded-sm text-center text-lg font-bold mt-5 hover:bg-opacity-80'
              >GET STARTED</button>
          </div>
          <div className='w-[40%] '>
            <img src="/images/hero-image.png" className='w-full h-full object-cover' alt="" />
          </div>
        </div>
      ) : (
        <SimpleMultiStepForm showStepNumber={true} />
      )}
      
      {/* <SimpleMultiStepForm showStepNumber={true} /> */}
    </div>
  );
};

export default Page;
