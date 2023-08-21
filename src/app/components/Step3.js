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
    <div className="flex flex-col items-center justify-center">
      <h1 className='mt-10 font-bold text-black text-3xl'>
        How Much Is Your Average Monthly Electric Bill?
      </h1>
      <p className="text-lg mt-5 lg:w-[400px] text-center">To maximize savings, you must spend at least $100 per month on electricity.</p>      
      <button
        className="bg-white w-[300px] py-5 px-5 hover:bg-yellow-400 font-bold text-xl mt-10"
        onClick={ () => step3Handler("LESS THAN $100") }
        >LESS THAN $100</button>
      <button
        className="bg-white w-[300px] py-5 px-5 hover:bg-yellow-400 font-bold text-xl mt-3"
        onClick={ () => step3Handler("$100 - $200") }
        >$100 - $200</button>
      <button
        className="bg-white w-[300px] py-5 px-5 hover:bg-yellow-400 font-bold text-xl mt-3"
        onClick={ () => step3Handler("$201 - $300") }
        >$201 - $300</button>
      
      <button
        className="bg-white w-[300px] py-5 px-5 hover:bg-yellow-400 font-bold text-xl mt-3"
        onClick={ () => step3Handler("MORE THAN $300") }
        >MORE THAN $300</button>
        
        <button
          className='px-4 py-2 rounded-xl mt-5 text-black underline font-semibold'
          onClick={handlePrevStep}
        >
          Go Back
        </button>
    </div>
  );
};

export default Step3;
