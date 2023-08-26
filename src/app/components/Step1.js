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
    <div className="flex flex-col items-center justify-center  mt-20">
      <h1 className='mt-10 font-bold text-white text-4xl pb-10'>
        Are You A Homeowner?
      </h1>
      <button
        className="stepButton1"
        onClick={ () => step1Handler("yes") }
        >YES</button>
      <button
        className="stepButton1"
        onClick={ () => step1Handler("no") }
        >NO</button>
      
      <button
          className='px-4 py-2 rounded-xl mt-5 text-white underline font-semibold'
          onClick={handlePrevStep}
        >
          Go Back
        </button>
      
    </div>
  );
};

export default Step1;
