const Step5 = ({ formData, handleChangeInput, handleNextStep, handlePrevStep }) => {
  const Step5Handler = (val) => {
    if(val == "UNCERTAIN"){
      handleChangeInput("shade_measurement", "UNCERTAIN")      
      handleNextStep()
    }    
    else if(val == "NO SHADE"){
      handleChangeInput("shade_measurement", "NO SHADE")      
      handleNextStep()
    }
    else if(val == "A LITTLE SHADE"){
      handleChangeInput("shade_measurement", "A LITTLE SHADE")      
      handleNextStep()
    }
    else if(val == "A LOT OF SHADE"){
      handleChangeInput("shade_measurement", "A LOT OF SHADE")      
      handleNextStep()
    }
    
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className='mt-10 font-bold text-black text-3xl'>
        How Much Shade Does Your Roof Get?
      </h1>
      <p className="text-lg mt-5 w-[400px] text-center">Heavily shaded homes may require tree trimming or removal as a condition of going solar</p>      
      <button
        className="bg-white w-[300px] py-5 px-5 hover:bg-yellow-400 font-bold text-xl mt-3"
        onClick={ () => Step5Handler("NO SHADE") }
        >NO SHADE</button>
      <button
        className="bg-white w-[300px] py-5 px-5 hover:bg-yellow-400 font-bold text-xl mt-3"
        onClick={ () => Step5Handler("A LITTLE SHADE") }
        >A LITTLE SHADE</button>
      
      <button
        className="bg-white w-[300px] py-5 px-5 hover:bg-yellow-400 font-bold text-xl mt-3"
        onClick={ () => Step5Handler("A LOT OF SHADE") }
        >A LOT OF SHADE</button>

      <button
        className="bg-white w-[300px] py-5 px-5 hover:bg-yellow-400 font-bold text-xl mt-3"
        onClick={ () => Step5Handler("UNCERTAIN") }
        >UNCERTAIN</button>
        
        <button
          className='px-4 py-2 rounded-xl mt-5 text-black underline font-semibold'
          onClick={handlePrevStep}
        >
          Go Back
        </button>
    </div>
  );
};

export default Step5;
