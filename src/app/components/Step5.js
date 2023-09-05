
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
   <div className="flex flex-col lg:flex-row items-center justify-center">
      <div className="lg:w-[40%]">
        <img src="/images/step5.png" alt="" className="lg:mt-20" />
      </div>
     <div className="flex flex-col items-center justify-center lg:w-[60%]">
      <h1 className='font-bold text-3xl text-white px-8 md:px-0'>
        How Much Shade Does Your Roof Get?
      </h1>
      <p className="text-lg mt-5 w-[400px] text-center text-white px-8 md:px-0">Heavily shaded homes may require tree trimming or removal as a condition of going solar</p>      
      <button
        className={`${formData.shade_measurement === "NO SHADE" ? "stepButton1Active" : "stepButton1"} `}
        onClick={ () => Step5Handler("NO SHADE") }
        >NO SHADE</button>
      <button
        className={`${formData.shade_measurement === "A LITTLE SHADE" ? "stepButton1Active" : "stepButton1"} `}
        onClick={ () => Step5Handler("A LITTLE SHADE") }
        >A LITTLE SHADE</button>
      
      <button
        className={`${formData.shade_measurement === "A LOT OF SHADE" ? "stepButton1Active" : "stepButton1"} `}
        onClick={ () => Step5Handler("A LOT OF SHADE") }
        >A LOT OF SHADE</button>

      <button
        className={`${formData.shade_measurement === "UNCERTAIN" ? "stepButton1Active" : "stepButton1"} `}
        onClick={ () => Step5Handler("UNCERTAIN") }
        >UNCERTAIN</button>
        
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

export default Step5;
