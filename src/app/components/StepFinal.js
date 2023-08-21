const StepFinal = () => {
  return (
    <div>
      <h3 className="text-6xl text-blue-800 font-bold text-center">Thank you!</h3>
      <p className="text-center mt-5 text-lg font-semibold">Here is what happens next!</p>

      <div className="flex gap-10 mt-20">
        <div className="flex flex-col items-center justify-center">
          <img src="/images/logo1.svg" alt="" />
          <h3 className="mt-5 text-lg font-semibold">Nice work!</h3>
          <p className="text-center mt-5">Congratulations! You have taken the first step toward taking control of your electricity bill! We have matched you with the best solar companies in your area and they will contact you shortly!</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="/images/logo2.svg" alt="" />
          <h3 className="mt-5 text-lg font-semibold">No need to wait!</h3>
          <p className="text-center mt-5">Clean Energy Professionals, nor its solar partners, will ever pressure you. During the process, they will need to gather additional information from you, but you are in control of how fast or slow you want move.</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="/images/logo3.svg" alt="" />
          <h3 className="mt-5 text-lg font-semibold">What to prepar!</h3>
          <p className="text-center mt-5">In order for our solar partners to be able to help you, please have a detailed copy of your latest energy bill. Also, be prepared with all of your questions regarding costs, incentives and rebates!</p>
        </div>
      
      </div>

      <div className=" mt-10">
        <a href="/" className="text-xl font-bold underline ">Go Back</a>
      </div>
    </div>
  );
};

export default StepFinal;
