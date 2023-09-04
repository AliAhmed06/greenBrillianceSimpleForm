"use client";
import React, { useState } from 'react';
import SimpleMultiStepForm from './components/SimpleMultiStepForm';





const Page = () => {
  const [zip, setZip] = useState("");
  const [showForm, setShowForm] = useState(false);
  // console.log(`zip = ${zip} and zip length = ${zip.length} and show form = ${showForm}`)
  const showFormHandler = () => {
    if(zip.length === 5){
      setShowForm(true);
    }
    else{
      setShowForm(false);
    }
  }

  return (
    <div className='min-h-screen'>      
      <SimpleMultiStepForm showStepNumber={true} />
      <div className='mt-10'>
        
        <div className='bg-white w-[80%] max-w-[1100px] mx-auto py-10 px-10 rounded-xl'>
          <h3 className='font-bold text-3xl text-[#235c94] text-center lg:text-start'>WHAT DOES SOLAR COST?</h3>
          <div className='flex flex-col-reverse lg:flex-row mt-5 '>
            <div className='lg:w-[80%]'>
              <p className='text-lg'>We are disappointed when we see solar companies use language like <span className='font-bold'> Free</span> to get your attention...because it just is not true. Going solar WILL cost you money…but for the right candidates, the benefits of going solar far outweigh the cost of going solar…plain and simple. Making the move to solar even more attractive are the various incentives offered by the Federal Government and by many states, who offer tax incentives and rebates to help make your decision to switch more fiscally sound. Buyer beware…there are no free lunches!</p>
            </div>
            <div className='lg:w-[20%] flex items-center justify-center'>
              <img src="/images/logo4.png" alt="" className='h-[100px]' />
            </div>
          </div>
        </div>

        <div className='bg-white w-[80%] max-w-[1100px] mx-auto py-10 px-10 rounded-xl mt-10'>
          <h3 className='font-bold text-3xl text-[#235c94] text-center lg:text-start'>CAN YOUR ROOF SUPPORT PANELS?</h3>
          <div className='flex flex-col-reverse lg:flex-row mt-5 '>
            <div className='lg:w-[80%]'>
              <p className='text-lg'>Solar panels are a long-term investment. BUT, since it is a long term investment, you will want to make sure that your roof is fairly new and in great shape. You would not want to invest in installing solar panels only to remove them 2 years down the road to repair or replace your roof. If your roof is older than 15 years, it is generally a good idea to replace your roof first. The good news is that most reputable solar companies can provide both a roof replacement AND an expert installation!</p>
            </div>
            <div className='lg:w-[20%] flex items-center justify-center'>
              <img src="/images/logo5.png" alt="" className='h-[100px]' />
            </div>
          </div>
        </div>

        <div className='bg-white w-[80%] max-w-[1100px] mx-auto py-10 px-10 rounded-xl mt-10'>
          <h3 className='font-bold text-3xl text-[#235c94] text-center lg:text-start'>HOW IS YOUR CREDIT?</h3>
          <div className='flex flex-col-reverse lg:flex-row mt-5 '>
            <div className='lg:w-[80%]'>
              <p className='text-lg'>As mentioned above, solar is not free. In fact, most rooftop solar installations will cost between $10,000 and $30,000! That is why the vast majority of homeowners choose to finance the purchase over 10 to 20 years. And in order to qualify for the most competitive finance rates, you will need to have good credit…a score of 640 or higher will do the trick!</p>
            </div>
            <div className='lg:w-[20%] flex items-center justify-center'>
              <img src="/images/logo6.png" alt="" className='h-[100px]' />
            </div>
          </div>
        </div>

        <div className='bg-white w-[80%] max-w-[1100px] mx-auto py-10 px-10 rounded-xl mt-10'>
          <h3 className='font-bold text-3xl text-[#235c94] text-center lg:text-start'>FEDERAL TAX CREDITS & OTHER INCENTIVES</h3>
          <div className='flex flex-col-reverse lg:flex-row mt-5 '>
            <div className='lg:w-[80%]'>
              <p className='text-lg'>It is no secret that the Federal Government wants you to use clean energy. To incentivize you to make the move, the Government is making available a 30% TAX CREDIT! That is essentially a 30% discount on the cost of your solar system. Additionally, there may be local and state incentives available to you, as well…all of which will be explained when we have a chance to talk!</p>
            </div>
            <div className='lg:w-[20%] flex items-center justify-center'>
              <img src="/images/logo7.png" alt="" className='h-[100px]' />
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center mt-10 p-10'>
          <img src="/images/logo8.png" alt="" className='h-[120px]' />
          <p className='text-3xl text-white font-bold mt-5 text-center'>4 EASY STEPS TO GET YOUR <br /> FREE SOLAR PANEL QUOTE</p>
        </div>

        {/* Portions stars from here */}
        <div className='w-[80%] max-w-[1100px] mx-auto'>
          <div className='bg-white  py-10 px-10 rounded-xl mt-10 flex gap-5 lg:gap-16 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.4)]'>
            <span className=' font-bold text-3xl text-[#f8ba4d]'>1</span>
            <div>
              <h3 className='font-bold text-3xl text-[#235c94] text-start'>ENTER YOUR ZIP CODE</h3>
              <p className='mt-5 text-lg'>Allows us to find the best solar installers in your area as well as the best incentives and credits.</p>
            </div>
          </div>
          <img src="/images/seperator.png" alt="" className='ml-[60px] h-[70px]' />
          
          <div className='bg-white py-10 px-10 rounded-xl flex gap-5 lg:gap-16 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.4)]'>
            <span className=' font-bold text-3xl text-[#f8ba4d]'>2</span>
            <div>
              <h3 className='font-bold text-3xl text-[#235c94] text-start'>ENTER YOUR MONTHLY POWER BILL</h3>
              <p className='mt-5 text-lg'>This is one of the key factors in determining if solar is a smart move for you!</p>
            </div>
          </div>
          <img src="/images/seperator.png" alt="" className='ml-[60px] h-[70px]' />

          <div className='bg-white py-10 px-10 rounded-xl flex gap-5 lg:gap-16 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.4)]'>
            <span className=' font-bold text-3xl text-[#f8ba4d]'>3</span>
            <div>
              <h3 className='font-bold text-3xl text-[#235c94] text-start'>ENTER YOUR UTILITY PROVIDER</h3>
              <p className='mt-5 text-lg'>Sharing your utility provider with us allows us to understand what you are paying per kWh…another key factor to understanding if the move to solar makes sense.</p>
            </div>
          </div>
          <img src="/images/seperator.png" alt="" className='ml-[60px] h-[70px]' />

          <div className='bg-white py-10 px-10 rounded-xl flex gap-5 lg:gap-16 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.4)]'>
            <span className=' font-bold text-3xl text-[#f8ba4d]'>4</span>
            <div>
              <h3 className='font-bold text-3xl text-[#235c94] text-start'>4 ENTER YOUR ROOF SHADE</h3>
              <p className='mt-5 text-lg'>Understanding this helps us determine how much sunlight your roof sees during the course of the day…the last key element in matching you up with the right solar company.</p>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center mt-5 mb-20'>          
          <a href="/" className='stepButton0 text-center '>SEE IF YOU QUALIFY</a>
        </div>
      </div>
    </div>
  );
};

export default Page;
