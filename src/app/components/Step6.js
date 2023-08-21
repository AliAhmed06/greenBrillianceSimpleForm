const Step6 = ({ formData, handleChangeInput, handleNextStep, handlePrevStep }) => {
  const Step6Handler = (val) => {
    let whySolar = [];
    document.querySelectorAll('input[name="whySolary"]:checked').forEach( function(e) {
      whySolar.push(e.value);
    });    
    handleChangeInput("why_solar", whySolar);      
    handleNextStep();
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className='mt-10 font-bold text-black text-3xl'>
        Why Are You Considering Going Solar?
      </h1>
      <p className="text-lg mt-5 md:w-[400px] text-center">Modifications/expansions of existing solar systems must be handled by the original installer</p>      
      <p className="border border-yellow-400 py-2 px-5 rounded-md w-[300px] text-center font-semibold text-lg my-5">Select all that apply</p>

        <div className="gap-3 bg-white w-[320px] md:w-[450px] py-5 px-10 flex items-center justify-start ">
          <input 
            type="checkbox" 
            name="whySolary" 
            className="accent-yellow-400 focus:ring-yellow-500 w-4 h-4" 
            value="Save On Electricity Bills"
            id="v1"
            />
            
          <label htmlFor="v1">Save On Electricity Bills</label>
        </div>

        <div className="gap-3 bg-white w-[320px] md:w-[450px] py-5 px-10 flex items-center justify-start ">
          <input 
            type="checkbox" 
            name="whySolary" 
            className="accent-yellow-400 focus:ring-yellow-500 w-4 h-4" 
            value="Earn Tax Credits and Rebates"
            id="v2"
            />
          <label htmlFor="v2">Earn Tax Credits and Rebates</label>
        </div>

        <div className="gap-3 bg-white w-[320px] md:w-[450px] py-5 px-10 flex items-center justify-start ">
          <input 
            type="checkbox" 
            name="whySolary" 
            className="accent-yellow-400 focus:ring-yellow-500 w-4 h-4" 
            value="Do My Part to Save The Environment"
            id="v3"
            />
          <label htmlFor="v3">Do My Part to Save The Environment</label>
        </div>

        <div className="gap-3 bg-white w-[320px] md:w-[450px] py-5 px-10 flex items-center justify-start ">
          <input 
            type="checkbox" 
            name="whySolary" 
            className="accent-yellow-400 focus:ring-yellow-500 w-4 h-4" 
            value="I Want to Replace My Current System"
            id="v4"
            />
          <label htmlFor="v4">I Want to Replace My Current System</label>
        </div>

        
        <button
          className='px-5 py-3 bg-yellow-400 w-[320px] md:w-[450px] rounded-md mt-5 text-black underline font-semibold'
          onClick={Step6Handler}
        >
          Next
        </button>  

        <button
          className='px-4 py-2 rounded-xl mt-5 text-black underline font-semibold'
          onClick={handlePrevStep}
        >
          Go Back
        </button>
    </div>
  );
};

export default Step6;
