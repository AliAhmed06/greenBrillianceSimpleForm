import { useState } from "react";

const Step10 = ({ formData, handleChangeInput, handleSubmitFormData, handlePrevStep }) => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [phone, setPhone] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  
  const Step10Handler = () => {
      // console.log(`f = ${formData.first_name} and l = ${formData.last_name} and ph = ${formData.phone}`);
      if(formData.first_name === ""){
        setFirstNameError("first name is required")
      }
      else{
        setFirstNameError("")
      }
      
      if(formData.last_name === ""){
        setLastNameError("last name is required");
      }
      else{
        setLastNameError("");
      }

      if(formData.phone === ""){
        setPhoneError("phone is required");
      }
      else{
        setPhoneError("");
      }

      if(formData.firstName !== "" && formData.lastName !== "" && formData.phone !== ""){
        handleSubmitFormData();    
      }
  }

  // console.log(address.length);
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-[#ffd75d] font-bold text-3xl lg:text-6xl uppercase mt-10">Congratulations <br /> you pre-qualify!</h3>

      <h3 className='mt-10 font-bold text-white text-3xl'>
        Where Should We Send Your Quote(S)?
      </h3>      
      
      <input 
        type="text"  
        placeholder="First Name"
        className="w-[320px] md:w-[500px] stepField"
        value={formData.firstName}
        onChange={(e) => handleChangeInput("first_name", e.target.value) }
        />
        { firstNameError !== "" && <p className="text-red-500 font-semibold">{firstNameError}</p> }
      <input 
        type="text"  
        placeholder="Last Name"
        className="w-[320px] md:w-[500px] stepField"
        value={formData.lastName}
        onChange={(e) => handleChangeInput("last_name", e.target.value) }
        />
        { lastNameError !== "" && <p className="text-red-500 font-semibold">{lastNameError}</p> }
      <input 
        type="number"  
        placeholder="Phone Number"
        className="w-[320px] md:w-[500px] stepField"
        value={formData.phone}
        onChange={(e) => handleChangeInput("phone", e.target.value) }
        />
        { phoneError !== "" && <p className="text-red-500 font-semibold">{phoneError}</p> }
      <button
        className="w-[320px] md:w-[500px] stepButton2"
        onClick={ () => Step10Handler() }        
        // onClick={handleSubmitFormData}
        >GET YOUR SOLAR QUOTE</button>
        
        <button
          className='px-4 py-2 underline text-white'
          
          onClick={handlePrevStep}
        >
          Go Back
        </button>
    </div>
  );
};

export default Step10;
