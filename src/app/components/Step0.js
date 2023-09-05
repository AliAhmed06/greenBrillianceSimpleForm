import { useState } from "react";
import LottieAnimation from "./LootieAnimations";
import animationData from '../../../public/lootieAnimations/dot1.json';


const Step0 = ({ formData, handleChangeInput, handleNextStep }) => {
    const [zipError, setZipError] = useState("")

    const Step0Handler = (val) => {
        if(formData.zip === ""){
            setZipError("Zip is required")
        }        
        else{
            handleNextStep(); 
        }
    }
  
    return (
    <div className='flex flex-col-reverse lg:flex-row items-center justify-center'>
        <div className='lg:w-[50%] md:px-[50px]   '>
            <div className='bg-[#ffd75d] lg:w-[450px] py-1 px-7 rounded-full text-[#235c94] flex text-lg items-center gap-3 '>
                <div className="h-[40px] w-[40px] ">
                    <LottieAnimation animationData={animationData}  />
                </div>
                <p>You may be eligible for zero down solar!</p>
            </div>
            <h3 className='text-4xl text-white font-bold mt-5 leading-[50px]'>DO YOU <br /> QUALIFY?</h3>
            <p className='text-lg  mt-5 text-white'>Enter your zip code to see how much you could save</p>
            <input 
                type="text" 
                placeholder='Your Zip Code *' 
                className='stepField w-full lg:w-[70%]'
                value={formData.zip}
                onChange={(e) => handleChangeInput("zip", e.target.value) }                
            />
            { zipError !== "" && <p className="text-red-500 font-semibold">{zipError}</p> }
            <button
                onClick={ () => Step0Handler() }
                className='bg-white text-[#235c94] rounded-xl py-4 px-10 w-full lg:w-[70%] cursor-pointer text-center text-lg font-bold mt-5 hover:bg-opacity-80'
            >GET STARTED</button>
        </div>
        <div className='lg:w-[50%] '>
            <img src="/images/step0.png" className='w-full h-full object-cover' alt="" />
        </div>
    </div>
    );
  };
  
  export default Step0;
  