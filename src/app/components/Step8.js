import { useState } from "react";

const Step8 = ({ formData, handleChangeInput, handleNextStep, handlePrevStep }) => {
  const [address, setAddress] = useState("");

  const Step8Handler = (val) => {
      handleChangeInput("address", address)      
      handleNextStep();    
  }

  // console.log(address.length);
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className='mt-10 font-bold text-black text-3xl'>
        What Is Your Address?
      </h1>
      <p className="text-lg mt-5 w-[400px] text-center">Lets make sure your home is eligible!</p>      
      
      <input 
        type="text"  
        placeholder="Address"
        className="w-[500px] py-5 px-10 rounded-sm outline-none border border-gray-400 mt-5"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        />
      <button
        className="bg-yellow-400 w-[500px] py-5 px-10 hover:bg-opacity-80 font-bold text-xl mt-3"
        onClick={ () => Step8Handler("NO SHADE") }
        disabled={address.length > 0 ? false : true}
        >CONTINUE</button>
        
        <button
          className='px-4 py-2 rounded-xl mt-5 text-black underline font-semibold'
          
          onClick={handlePrevStep}
        >
          Go Back
        </button>
    </div>
  );
};

export default Step8;
