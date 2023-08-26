const Step4 = ({ formData, handleChangeInput, handleNextStep, handlePrevStep }) => {
  const Step4Handler = (val) => {
    if(val == "ConEd, subsidiary of Consolidated Edison"){
      handleChangeInput("electricity_provider", "ConEd, subsidiary of Consolidated Edison")      
      handleNextStep()
    }
    else if(val == "National Grid"){
      handleChangeInput("electricity_provider", "National Grid")      
      handleNextStep()
    }
    else if(val == "New York Power Authority (NYPA)"){
      handleChangeInput("electricity_provider", "New York Power Authority (NYPA)")      
      handleNextStep()
    }
    else if(val == "NYSEG: New York State Electric and Gas Corporation"){
      handleChangeInput("electricity_provider", "NYSEG: New York State Electric and Gas Corporation")      
      handleNextStep()
    }
    else{
      handleChangeInput("electricity_provider", "Other")      
      handleNextStep()
    }
  }

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <div className="lg:w-[40%]">
        <img src="/images/step4.png" alt="" className="lg:mt-20" />
      </div>
      <div className="flex flex-col items-center justify-center lg:w-[60%]">
        <h1 className='mt-10 font-bold text-3xl text-white px-3 md:px-0'>
          Who Is Your Electricity Provider?
        </h1>
        <p className="text-lg mt-5 w-[400px] text-center text-white">Lets make sure your electric provider has a homeowner solar program.</p>      
        <button
          className="bg-white w-[320px] md:w-[600px] py-5 px-10 hover:bg-yellow-100 rounded-t-md font-semibold mt-10 text-start"
          onClick={ () => Step4Handler("ConEd, subsidiary of Consolidated Edison") }
          >ConEd, subsidiary of Consolidated Edison</button>
        <button
          className="bg-white w-[320px] md:w-[600px] py-5 px-10 hover:bg-yellow-100 border-t border-gray-200 font-semibold text-start"
          onClick={ () => Step4Handler("National Grid") }
          >National Grid</button>
        <button
          className="bg-white w-[320px] md:w-[600px] py-5 px-10 hover:bg-yellow-100 border-t border-gray-200 font-semibold text-start"
          onClick={ () => Step4Handler("New York Power Authority (NYPA)") }
          >New York Power Authority (NYPA)</button>
        <button
          className="bg-white w-[320px] md:w-[600px] py-5 px-10 hover:bg-yellow-100 border-t border-gray-200 font-semibold text-start"
          onClick={ () => Step4Handler("NYSEG: New York State Electric and Gas Corporation") }
          >NYSEG: New York State Electric and Gas Corporation</button>
        <button
          className="bg-white w-[320px] md:w-[600px] py-5 px-10 hover:bg-yellow-100 rounded-b-md border-t border-gray-200 font-semibold text-start"
          onClick={ () => Step4Handler("Other") }
          >Other</button>
        
          <button
            className='px-4 py-2 rounded-xl mt-5 text-black underline font-semibold'
            onClick={handlePrevStep}
          >
            Go Back
          </button>
      </div>
    </div>
  );
};

export default Step4;
