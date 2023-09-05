import LottieAnimation from "./LootieAnimations";
import animationData from '../../../public/lootieAnimations/step3.json';
import animation2Data from '../../../public/lootieAnimations/step3_2.json';
const Step3 = ({ formData, handleChangeInput, handleNextStep, handlePrevStep }) => {
  const step3Handler = (val) => {
    if(val == "LESS THAN $100"){
      handleChangeInput("monthly_bill", "LESS THAN $100")      
      handleNextStep()
    }
    else if(val == "$100 - $200"){
      handleChangeInput("monthly_bill", "$100 - $200")      
      handleNextStep()
    }
    else if(val == "$201 - $300"){
      handleChangeInput("monthly_bill", "$201 - $300")      
      handleNextStep()
    }
    else if(val == "MORE THAN $300"){
      handleChangeInput("monthly_bill", "MORE THAN $300")      
      handleNextStep()
    }
  }

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <div className="lg:w-[50%]">
        <LottieAnimation animationData={animationData} />
        {/* <LottieAnimation animation2Data={animationData} /> */}
        aaa
      </div>
       <div className="flex flex-col items-center justify-center lg:w-[50%]">
        <h1 className=' font-bold text-3xl text-white px-3 md:px-0'>
          How Much Is Your Average Monthly Electric Bill?
        </h1>
        <p className="text-lg mt-5 w-[400px] text-center text-white">To maximize savings, you must spend at least $100 per month on electricity.</p>      
        <button
          className={`${formData.monthly_bill === "LESS THAN $100" ? "stepButton1Active" : "stepButton1"} `}
          onClick={ () => step3Handler("LESS THAN $100") }
          >LESS THAN $100</button>
        <button
          className={`${formData.monthly_bill === "$100 - $200" ? "stepButton1Active" : "stepButton1"} `}
          onClick={ () => step3Handler("$100 - $200") }
          >$100 - $200</button>
        <button
          className={`${formData.monthly_bill === "$201 - $300" ? "stepButton1Active" : "stepButton1"} `}
          onClick={ () => step3Handler("$201 - $300") }
          >$201 - $300</button>
        
        <button
          className={`${formData.monthly_bill === "MORE THAN $300" ? "stepButton1Active" : "stepButton1"} `}
          onClick={ () => step3Handler("MORE THAN $300") }
          >MORE THAN $300</button>
          
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

export default Step3;
