import { useState } from "react";

const Step9 = ({ formData, handleChangeInput, handleNextStep, handlePrevStep }) => {
  const [email, setEmail] = useState("");

  const Step9Handler = (val) => {
      handleChangeInput("email", email)      
      handleNextStep();    
  }

  // console.log(address.length);
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-green-600 font-bold text-3xl lg:text-6xl uppercase mt-10">Congratulations <br /> you pre-qualify!</h3>

      <h3 className='mt-10 font-bold text-black text-3xl'>
        Where Should We Send Your Quote(S)?
      </h3>      
      
      <input 
        type="email"  
        placeholder="Email"
        className="w-[320px] md:w-[500px] py-5 px-10 rounded-sm outline-none border border-gray-400 mt-5"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
      <button
        className="bg-yellow-400 w-[320px] md:w-[500px] py-5 px-10 hover:bg-opacity-80 font-bold text-xl mt-5"
        onClick={ () => Step9Handler("NO SHADE") }
        disabled={email.length > 0 ? false : true}
        >GET YOUR SOLAR QUOTE</button>
        
        <button
          className='px-4 py-2 rounded-xl mt-5 text-black underline font-semibold'
          
          onClick={handlePrevStep}
        >
          Go Back
        </button>
    </div>
  );
};

export default Step9;
