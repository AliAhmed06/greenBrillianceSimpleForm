import LottieAnimation from "./LootieAnimations";
import animationData from '../../../public/lootieAnimations/step7.json';

const Step7 = ({ formData, handleChangeInput, handleNextStep, handlePrevStep }) => {
  const Step7Handler = (val) => {
    if(val == "FAIR < 640"){
      handleChangeInput("credit_score", "FAIR < 640")      
      handleNextStep()
    }    
    else if(val == "GOOD 640 - 739"){
      handleChangeInput("credit_score", "GOOD 640 - 739")      
      handleNextStep()
    }
    else if(val == "VERY GOOD 740 - 799"){
      handleChangeInput("credit_score", "VERY GOOD 740 - 799")      
      handleNextStep()
    }
    else if(val == "EXCELLENT > 800"){
      handleChangeInput("credit_score", "EXCELLENT > 800")      
      handleNextStep()
    }
    else if(val == "UNSURE"){
      handleChangeInput("credit_score", "UNSURE")      
      handleNextStep()
    }
    
  }

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <div className="lg:w-[50%]">
        <LottieAnimation animationData={animationData} />
      </div>
      <div className="flex flex-col items-center justify-center lg:w-[50%]">
        <h1 className='font-bold text-3xl text-white px-3 md:px-0'>
          Approximately What Is Your Credit Score?
        </h1>
        <p className="text-lg mt-5 w-[400px] text-center text-white">Most homeowners finance their system, which generally requires a minimum credit score of 640 or higher</p>      
        <button
          className={`${formData.credit_score === "FAIR < 640" ? "stepButton2Active" : "stepButton2"} w-[300px] lg:w-[400px]`}          
          onClick={ () => Step7Handler("FAIR < 640") }
          >FAIR &lt; 640</button>
        <button
          className={`${formData.credit_score === "GOOD 640 - 739" ? "stepButton2Active" : "stepButton2"} w-[300px] lg:w-[400px]`}          
          onClick={ () => Step7Handler("GOOD 640 - 739") }
          >GOOD 640 - 739</button>
        
        <button
          className={`${formData.credit_score === "VERY GOOD 740 - 799" ? "stepButton2Active" : "stepButton2"} w-[300px] lg:w-[400px]`}          
          onClick={ () => Step7Handler("VERY GOOD 740 - 799") }
          >VERY GOOD 740 - 799</button>

        <button
          className={`${formData.credit_score === "EXCELLENT > 800" ? "stepButton2Active" : "stepButton2"} w-[300px] lg:w-[400px]`}          
          onClick={ () => Step7Handler("EXCELLENT > 800") }
          >EXCELLENT &gt; 800</button>

        <button
          className={`${formData.credit_score === "UNSURE" ? "stepButton2Active" : "stepButton2"} w-[300px] lg:w-[400px]`}          
          onClick={ () => Step7Handler("UNSURE") }
          >UNSURE</button>
          
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

export default Step7;
