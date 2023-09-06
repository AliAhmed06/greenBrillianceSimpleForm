const Step4 = ({ formData, handleChangeInput, handleNextStep, handlePrevStep }) => {
  const Step4Handler = (val) => {
    if(val == "Shenandoah Valley Electric cooperative"){
      handleChangeInput("electricity_provider", "Shenandoah Valley Electric cooperative")      
      handleNextStep()
    }
    else if(val == "Dominion Energy"){
      handleChangeInput("electricity_provider", "Dominion Energy")      
      handleNextStep()
    }
    else if(val == "American Electric Power"){
      handleChangeInput("electricity_provider", "American Electric Power")      
      handleNextStep()
    }
    else if(val == "Mecklenburg Electric cooperative"){
      handleChangeInput("electricity_provider", "Mecklenburg Electric cooperative")      
      handleNextStep()
    }
    else if(val == "Southside Electric Cooperative"){
      handleChangeInput("electricity_provider", "Southside Electric Cooperative")      
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
        <h1 className='mt-10 font-bold text-3xl text-white px-8 md:px-0'>
          Who Is Your Electricity Provider?
        </h1>
        <p className="text-lg mt-5 w-[400px] text-center text-white">Lets make sure your electric provider has a homeowner solar program.</p>      
        <button
          className={`${formData.electricity_provider === "Shenandoah Valley Electric cooperative" ? "stepButton2Active" : "stepButton2"} w-[300px] md:w-[600px]`}
          // className="stepButton2 w-[350px] md:w-[600px]"
          onClick={ () => Step4Handler("Shenandoah Valley Electric cooperative") }
          >Shenandoah Valley Electric cooperative</button>
        <button
          className={`${formData.electricity_provider === "Dominion Energy" ? "stepButton2Active" : "stepButton2"} w-[300px] md:w-[600px]`}
          onClick={ () => Step4Handler("Dominion Energy") }
          >Dominion Energy</button>
        <button
          className={`${formData.electricity_provider === "American Electric Power" ? "stepButton2Active" : "stepButton2"} w-[300px] md:w-[600px]`}
          onClick={ () => Step4Handler("American Electric Power") }
          >American Electric Power</button>
        <button
          className={`${formData.electricity_provider === "Mecklenburg Electric cooperative" ? "stepButton2Active" : "stepButton2"} w-[300px] md:w-[600px]`}
          onClick={ () => Step4Handler("Mecklenburg Electric cooperative") }
          >Mecklenburg Electric cooperative</button>
        <button
          className={`${formData.electricity_provider === "Southside Electric Cooperative" ? "stepButton2Active" : "stepButton2"} w-[300px] md:w-[600px]`}
          onClick={ () => Step4Handler("Southside Electric Cooperative") }
          >Southside Electric Cooperative</button>
        <button
          className={`${formData.electricity_provider === "Other" ? "stepButton2Active" : "stepButton2"} w-[300px] md:w-[600px]`}
          onClick={ () => Step4Handler("Other") }
          >Other</button>
        
          <button
            className='px-4 py-2 rounded-xl mt-5 underline font-semibold text-white'
            onClick={handlePrevStep}
          >
            Go Back
          </button>
      </div>
    </div>
  );
};

export default Step4;
