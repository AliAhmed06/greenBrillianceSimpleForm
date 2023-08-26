import { useState } from "react";
import LottieAnimation from "./LootieAnimations";
import animationData from '../../../public/lootieAnimations/dot.json';


const Step0 = ({ formData, handleChangeInput, handleNextStep }) => {
    const [zip, setZip] = useState("");
    
    const Step0Handler = (val) => {
        handleChangeInput("zip", zip)      
        handleNextStep(); 
    }
  
    return (
    <div className='flex flex-col-reverse lg:flex-row items-center justify-between '>
        <div className='lg:w-[60%] md:px-[50px] lg:px-[200px] lg:mt-20 '>
            <div className='bg-[#ffd75d] lg:w-[450px] py-3 px-7 rounded-full text-[#6946DD] flex text-lg items-center gap-3'>
                <div className="w-[15px] h-[15px] bg-red-700 rounded-full hidden md:block"></div>
                <p>You may be eligible for zero down solar!</p>
            </div>
            <h3 className='text-5xl text-white font-bold mt-5'>DO YOU QUALIFY?</h3>
            <p className='text-lg font-semibold mt-5 text-white'>Enter your zip code to see how much you could save</p>
            <input 
                type="text" 
                placeholder='Your Zip Code *' 
                className='stepField w-full'
                value={zip}
                onChange={(e)=>setZip(e.target.value)}
            />
            <button
                disabled={zip === "" ? true : false}
                onClick={ () => Step0Handler() }
                className='bg-white text-[#6946DD] rounded-xl py-4 px-10 w-full cursor-pointer text-center text-lg font-bold mt-5 hover:bg-opacity-80'
            >GET STARTED</button>
        </div>
        <div className='md:w-[70%] lg:w-[40%] '>
            <img src="/images/step0.png" className='w-full h-full object-cover' alt="" />
        </div>
    </div>
    );
  };
  
  export default Step0;
  