import { useState } from "react";

const Step10 = ({ formData, handleChangeInput, handleSubmitFormData, handlePrevStep }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const Step10Handler = async (val) => {
      if(formData.firstName === "" || formData.lastName === "" || formData.phone === ""){
        return alert("All fields are required");
      }

      handleSubmitFormData();    
  }

  // console.log(address.length);
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-green-600 font-bold text-6xl uppercase mt-10">Congratulations <br /> you pre-qualify!</h3>

      <h3 className='mt-10 font-bold text-black text-3xl'>
        Where Should We Send Your Quote(S)?
      </h3>      
      
      <input 
        type="text"  
        placeholder="First Name"
        className="w-[500px] py-5 px-10 rounded-sm outline-none border border-gray-400 mt-5"
        value={formData.firstName}
        onChange={(e) => handleChangeInput("first_name", e.target.value) }
        />
      <input 
        type="text"  
        placeholder="Last Name"
        className="w-[500px] py-5 px-10 rounded-sm outline-none border border-gray-400 mt-5"
        value={formData.lastName}
        onChange={(e) => handleChangeInput("last_name", e.target.value) }
        />
      <input 
        type="number"  
        placeholder="Phone Number"
        className="w-[500px] py-5 px-10 rounded-sm outline-none border border-gray-400 mt-5"
        value={formData.phone}
        onChange={(e) => handleChangeInput("phone", e.target.value) }
        />
      <button
        className="bg-yellow-400 w-[500px] py-5 px-10 hover:bg-opacity-80 font-bold text-xl mt-5"
        // onClick={ () => Step10Handler("NO SHADE") }        
        onClick={handleSubmitFormData}
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

export default Step10;
