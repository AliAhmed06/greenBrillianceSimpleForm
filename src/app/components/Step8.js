import { useState } from "react";

const Step8 = ({ formData, handleChangeInput, handleNextStep, handlePrevStep }) => {
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("")
  const Step8Handler = (val) => {
      if(address === ""){
        setAddressError("Address is required")
      }
      else{
        handleChangeInput("address", address)      
        handleNextStep();    
      }
  }

  // console.log(address.length);
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <div className="lg:w-[40%]">
        {/* <img src="/images/step6.png" alt="" className="lg:mt-20" /> */}
      </div>
      <div className="flex flex-col items-center justify-center lg:w-[60%] mt-20 lg:mt-32">
        <h1 className='font-bold text-3xl text-white px-3 md:px-0'>
          What Is Your Address?
        </h1>
        <p className="text-lg mt-5 w-[400px] text-center text-white mb-5">Lets make sure your home is eligible!</p>      
        
        <input 
          type="text"  
          placeholder="Address"
          className="stepField w-[320px] md:w-[500px]"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
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
