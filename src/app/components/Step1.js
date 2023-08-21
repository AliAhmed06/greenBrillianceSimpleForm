const Step1 = ({ formData, handleChangeInput, handleNextStep, handleSubmitFormData }) => {
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
    <div className="flex flex-col items-center justify-center">
      <h1 className='mt-10 font-bold text-black text-3xl'>
        Are You A Homeowner?
      </h1>
      <button
        className="bg-white w-[300px] py-5 px-10 hover:bg-yellow-400 font-bold text-xl mt-10"
        onClick={ () => step1Handler("yes") }
        >YES</button>
      <button
        className="bg-white w-[300px] py-5 px-10 hover:bg-red-500 font-bold text-xl mt-3"
        onClick={ () => step1Handler("no") }
        >NO</button>
      
    </div>
  );
};

export default Step1;
