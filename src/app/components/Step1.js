import LottieAnimation from "./LootieAnimations";
import animationData from '../../../public/lootieAnimations/step1.json';

const Step1 = ({ formData, handleChangeInput, handleNextStep, handleSubmitFormData, handlePrevStep }) => {
  
  const step1Handler = (val) => {
    if(val == "yes"){
      handleChangeInput("is_owner", "yes")      
      handleNextStep()
    }
    else{
      handleChangeInput("is_owner", "no")      
      handleSubmitFormData()
    }
  }

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mt-20">
      <div className="lg:w-[50%]">
        <LottieAnimation animationData={animationData} />
      </div>
      <div className="flex flex-col items-center justify-center lg:w-[50%]">
        <h1 className='mt-10 font-bold text-3xl text-white px-3 md:px-0'>
          Are You A Homeowner?
        </h1>
        <button
          className={`${formData.is_owner === "yes" ? "stepButton1Active" : "stepButton1"} `}
          onClick={ () => step1Handler("yes") }
          >YES</button>
        <button
          className="stepButton1"
          onClick={ () => step1Handler("no") }
        >NO</button>
          
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

export default Step1;
