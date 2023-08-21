const Step2 = ({ formData, handleChangeInput, handleNextStep, handlePrevStep }) => {
  const step2Handler = (val) => {
    if(val == "SINGLE FAMILY HOME"){
      handleChangeInput("home_type", "SINGLE FAMILY HOME")      
      handleNextStep()
    }
    else if(val == "TOWNHOME"){
      handleChangeInput("home_type", "TOWNHOME")      
      handleNextStep()
    }
    else if(val == "MULTI-FAMILY"){
      handleChangeInput("home_type", "MULTI-FAMILY")      
      handleNextStep()
    }
    else if(val == "MOBILE HOME"){
      handleChangeInput("home_type", "MOBILE HOME")      
      handleNextStep()
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className='mt-10 font-bold text-black text-3xl'>
        What Type Of Home Do You Live In?
      </h1>
      <p className="text-lg mt-5 w-[400px] text-center">The type of home you own can impact the incentives that are available to you</p>      
      <button
        className="bg-white w-[300px] py-5 px-5 hover:bg-yellow-400 font-bold text-xl mt-10"
        onClick={ () => step2Handler("SINGLE FAMILY HOME") }
        >SINGLE FAMILY HOME</button>
      <button
        className="bg-white w-[300px] py-5 px-5 hover:bg-yellow-400 font-bold text-xl mt-3"
        onClick={ () => step2Handler("TOWNHOME") }
        >TOWNHOME</button>
      <button
        className="bg-white w-[300px] py-5 px-5 hover:bg-yellow-400 font-bold text-xl mt-3"
        onClick={ () => step2Handler("MULTI-FAMILY") }
        >MULTI-FAMILY</button>
      
      <button
        className="bg-white w-[300px] py-5 px-5 hover:bg-yellow-400 font-bold text-xl mt-3"
        onClick={ () => step2Handler("MOBILE HOME") }
        >MOBILE HOME</button>
        
        <button
          className='px-4 py-2 rounded-xl mt-5 text-black underline font-semibold'
          onClick={handlePrevStep}
        >
          Go Back
        </button>
    </div>
  );
};

export default Step2;
