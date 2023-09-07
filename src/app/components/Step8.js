"use client"
import LottieAnimation from "./LootieAnimations";
import animationData from '../../../public/lootieAnimations/step8.json';
import { useState } from "react";
// import Autocomplete from "react-google-autocomplete";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const Step8 = ({ formData, handleChangeInput, handleNextStep, handlePrevStep }) => {
  const [addressError, setAddressError] = useState("")
  const [address, setAddress] = useState("");
  const Step8Handler = (val) => {
      if(address === "" || address === undefined){
        setAddressError("Address is required")
      }
      else{        
        handleChangeInput("address", address.label)
        handleNextStep();    
      }
  }

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <div className="lg:w-[40%]">
        <LottieAnimation animationData={animationData} />
      </div>
      <div className="flex flex-col items-center justify-center lg:w-[60%] mt-20 lg:mt-32">
        <h1 className='font-bold text-3xl text-white px-3 md:px-0'>
          What Is Your Address?
        </h1>
        <p className="text-lg mt-5 w-[400px] text-center text-white mb-5">Lets make sure your home is eligible!</p>              
          <GooglePlacesAutocomplete
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}                        
            autocompletionRequest={{        
              componentRestrictions: {
                country: ['us'],
              }
            }}
            selectProps={{              
              address,
              onChange: setAddress,
              className: "bg-transparent w-[320px] md:w-[500px]",
              styles: {
                input: (provided) => ({
                  ...provided,
                  maxWidth: '500px',
                  width: '500px',
                  height: '40px',
                }),
              }
            }}   
            className="w-[320px] md:w-[500px] "
               
          />
          { addressError !== "" && <p className="text-red-500 font-semibold">{addressError}</p> }
        <button
          className="w-[320px] md:w-[500px] stepButton2"
          onClick={ () => Step8Handler("NO SHADE") }
          // disabled={address.length > 0 ? false : true}
          >CONTINUE</button>
          
          <button
            className='px-4 py-2 rounded-xl mt-5 text-white underline font-semibold'
            
            onClick={handlePrevStep}
          >
            Go Back
          </button>
      </div>
    </div>
  );
};

export default Step8;
