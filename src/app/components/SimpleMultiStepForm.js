'use client';
import React, { useEffect, useState } from 'react';

import Step0 from './Step0';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7 from './Step7';
import Step8 from './Step8';
import Step9 from './Step9';
import Step10 from './Step10';
import Step11 from './Step11';
import StepFinal from './StepFinal';
import StepFinalFailed from './StepFinalFailed';

const initialFormData = {
  zip: '',
  is_owner: '',
  home_type: '',
  monthly_bill: '',
  electricity_provider: '',
  shade_measurement: '',
  why_solar: '',
  credit_score: 0,
  address:'',
  email:'',
  first_name:'',
  last_name:'',
  phone:'',
};

const stepsArray = ['0','1', '2', '3', '4','5', '6', '7', '8','9', '10'];

const SimpleMultiStepForm = ({ showStepNumber }) => {
  const [step, setStep] = useState('0');
  const [formData, setFormData] = useState(initialFormData);    
  
  // We need a method to go to next step
  const handleNextStep = () => {
    if (step === '0') setStep('1');
    else if (step === '1') setStep('2');
    else if (step === '2') setStep('3');
    else if (step === '3') setStep('4');
    else if (step === '4') setStep('5');
    else if (step === '5') setStep('6');
    else if (step === '6') setStep('7');
    else if (step === '7') setStep('8');
    else if (step === '8') setStep('9');
    else if (step === '9') setStep('10');
  };

  // We need a method to go to prev step
  const handlePrevStep = () => {
    if (step === '10') setStep('9');
    else if (step === '9') setStep('8');
    else if (step === '8') setStep('7');
    else if (step === '7') setStep('6');
    else if (step === '6') setStep('5');
    else if (step === '5') setStep('4');
    else if (step === '4') setStep('3');
    else if (step === '3') setStep('2');
    else if (step === '2') setStep('1');
    else if (step === '1') setStep('0');
  };

  // We need a method to update our formData
  const handleChangeInput = (title, value) => {
    setFormData({
      ...formData,
      [title]: value,
    });
  };

  // We need a method to do final operation
  const handleSubmitFormData = () => {
    // Here You can do final Validation and then Submit Your form
    setStep('Final');
    // if (formData.is_owner === "no") {
    //   alert('You must be a home owner to get the services');
    // } else {
    // //   console.log(formData);
    // }
    
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  // Section for render StepNumbers
  const renderTopStepNumbers = () => {
    if (!showStepNumber || step === 'Final' || step === "0") {
      return null;
    }
    return (
        <section className='mt-2 mb-4 flex items-center justify-center'>
        {stepsArray.map((item, index) => (
          <div key={item} className='flex items-center'>
            {index > 0 && (
              <div
                className={`h-[5px] md:w-[20px] ${
                  index + 1 === parseInt(step) ? 'bg-yellow-400' : 'bg-white'
                }`}
                
              />
            )}
            <div
              className={`w-7 md:w-9 h-7 md:h-9 flex justify-center items-center border-2 border-gray-600 rounded-full cursor-pointer ${
                parseInt(item) + 1 === parseInt(step) ? 'bg-yellow-400' : 'bg-white'
              }`}
            >
              {parseInt(item) + 1}
            </div>
            {index < stepsArray.length - 1 && (
              <div
                className={`h-[5px] lg:w-[20px] ${
                  index + 1 === parseInt(step) ? 'bg-yellow-400' : 'bg-white'
                }`}
                
              />
            )}
          </div>
        ))}
      </section>


    );
  };

  return (
    <div className='w-full flex items-center justify-center'>
        <div className='w-[80%] min-h-[800px] mt-20 '>
        {renderTopStepNumbers()}

        {/* // Render Steps */}
        {step === '0' ? (
            <Step0
            formData={formData}
            handleChangeInput={handleChangeInput}
            handleNextStep={handleNextStep}            
            />
        ) : null}
        
        {step === '1' ? (
            <Step1
            formData={formData}
            handleChangeInput={handleChangeInput}
            handleNextStep={handleNextStep}
            handleSubmitFormData={handleSubmitFormData}
            handlePrevStep={handlePrevStep}
            />
        ) : null}
        {step === '2' ? (
            <Step2
            formData={formData}
            handleChangeInput={handleChangeInput}
            handlePrevStep={handlePrevStep}
            handleNextStep={handleNextStep}
            />
        ) : null}
        {step === '3' ? (
            <Step3
            formData={formData}
            handleChangeInput={handleChangeInput}
            handlePrevStep={handlePrevStep}
            handleNextStep={handleNextStep}
            />
        ) : null}
        {step === '4' ? (
            <Step4
            formData={formData}
            handleChangeInput={handleChangeInput}
            handlePrevStep={handlePrevStep}
            handleNextStep={handleNextStep}
            />
        ) : null}
        {step === '5' ? (
            <Step5
            formData={formData}
            handleChangeInput={handleChangeInput}
            handlePrevStep={handlePrevStep}
            handleNextStep={handleNextStep}
            />
        ) : null}
        {step === '6' ? (
            <Step6
            formData={formData}
            handleChangeInput={handleChangeInput}
            handlePrevStep={handlePrevStep}
            handleNextStep={handleNextStep}
            />
        ) : null}
        {step === '7' ? (
            <Step7
            formData={formData}
            handleChangeInput={handleChangeInput}
            handlePrevStep={handlePrevStep}
            handleNextStep={handleNextStep}
            />
        ) : null}
        {step === '8' ? (
            <Step8
            formData={formData}
            handleChangeInput={handleChangeInput}
            handlePrevStep={handlePrevStep}
            handleNextStep={handleNextStep}
            />
        ) : null}
        {step === '9' ? (
            <Step9
            formData={formData}
            handleChangeInput={handleChangeInput}
            handlePrevStep={handlePrevStep}
            handleNextStep={handleNextStep}
            />
        ) : null}
        {step === '10' ? (
            <Step10
            formData={formData}
            handleChangeInput={handleChangeInput}
            handlePrevStep={handlePrevStep}
            // handleNextStep={handleNextStep}
            handleSubmitFormData={handleSubmitFormData}
            />
        ) : null}
        {/* {step === '11' ? (
            <Step11
            formData={formData}
            handleChangeInput={handleChangeInput}
            handlePrevStep={handlePrevStep}
            handleSubmitFormData={handleSubmitFormData}
            />
        ) : null} */}
        {step === 'Final' && formData.is_owner === "yes" ? <StepFinal /> : null}
        {step === 'Final' && formData.is_owner === "no" ? <StepFinalFailed /> : null}
        </div>
    </div>
  );
};

export default SimpleMultiStepForm;
