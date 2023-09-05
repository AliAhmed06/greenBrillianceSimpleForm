import LottieAnimation from "./LootieAnimations";
import animationData from '../../../public/lootieAnimations/step2.json';


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
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <div className="lg:w-[50%]">
        <LottieAnimation animationData={animationData} />
      </div>
      <div className="flex flex-col items-center justify-center lg:w-[50%]">
        <h1 className='mt-10 font-bold text-3xl text-white px-3 md:px-0'>
          What Type Of Home Do You Live In?
        </h1>
        <p className="text-lg mt-5 w-[400px] text-center text-white">The type of home you own can impact the incentives that are available to you</p>      
        <button          
          className={`${formData.home_type === "SINGLE FAMILY HOME" ? "stepButton1Active" : "stepButton1"} `}
          onClick={ () => step2Handler("SINGLE FAMILY HOME") }
          >SINGLE FAMILY HOME</button>
        <button
          className={`${formData.home_type === "TOWNHOME" ? "stepButton1Active" : "stepButton1"} `}
          onClick={ () => step2Handler("TOWNHOME") }
          >TOWNHOME</button>
        <button
          className={`${formData.home_type === "MULTI-FAMILY" ? "stepButton1Active" : "stepButton1"} `}
          onClick={ () => step2Handler("MULTI-FAMILY") }
          >MULTI-FAMILY</button>
        
        <button
          className={`${formData.home_type === "MOBILE HOME" ? "stepButton1Active" : "stepButton1"} `}
          onClick={ () => step2Handler("MOBILE HOME") }
          >MOBILE HOME</button>
          
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

export default Step2;
