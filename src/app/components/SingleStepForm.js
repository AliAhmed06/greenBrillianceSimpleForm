"use client";
import axios from "axios";
import React, { useRef, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { toast } from "react-toastify";

const SingleStepForm = ({setShowForm}) => {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(true); // Track phone number validation
  const [email, setEmail] = useState("");
  const [isOwner, setIsOwner] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const inputRef = useRef(null);

  const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const formHandler = async (e) => {
    e.preventDefault();

    
    let isOwnerVal = document.querySelector(
      "input[name='owner']:checked"
    )?.value;

    // if(name === "" || phoneNumber === "" || email === "" || isOwnerVal === undefined || zip === "" || message === "" || address === undefined || address === ""){
    //   setError("All fields are required");
    //   return;
    // }
    // else{
    //   setError("");      
    // }

    // console.log("step2");
    // console.log("is valid = ", isValid) ;
    // if(isValid === false){
    //   setError("Phone number is not correct");
    //   return;
    // }
    // else{
    //   setError("");
    // }

    // console.log("step3");
    // if(!email.match(validEmailRegex)){
    //   setError("Email is not correct")
    //   return;
    // }
    // else{        
    //   setError("");
    // }

    // if(isOwnerVal === "no"){
    //   setError("You must be a house owner to avail this service")
    //   return;
    // }
    // else{        
    //   setError("");
    // }

    
    const data = {
      "zip": zip,
      "is_home_owner": isOwnerVal === "yes" ? 1 : 0,
      "address": address.label,
      "email": email,
      "full_name": name,
      "phone": phoneNumber,
      "message": message,
    }

    setLoading(true);
    try {
      const response =  await axios.post("https://api.solarenergypros.org/api/solar_inquiries", data);
      // const response =  await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/simpleForm`, data);
      // const response =  await axios.post(`${process.env.DOMAIN_NAME}/api/simpleForm`, data);
      console.log(response);
      // console.log("ali response is = ", response);
      // toast.success("Your Message has been received!", {position: toast.POSITION.TOP_RIGHT});            
      setLoading(false);
      document.documentElement.style.scrollBehavior = "smooth";
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      setShowForm(false);
  
    } catch (error) {
      toast.error("Something went wrong: " + error , {position: toast.POSITION.TOP_RIGHT});            
    }
    
    // setTimeout(function () {
    //   location.reload();
    // }, 3000);
    
  };

  // -------------------------------------------------------------------------------------------------------
  // phone logic starts
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    // Remove any non-digit characters from the input
    const formattedPhoneNumber = inputValue.replace(/\D/g, "");
    const formattedDisplay = formatPhoneNumber(formattedPhoneNumber);

    // Check if the phone number is valid (customize this validation as needed)
    const isValidPhoneNumber = formattedPhoneNumber.length === 10; // Example: 10 digits required

    setPhoneNumber(formattedDisplay);
    setIsValid(isValidPhoneNumber);
  };

  const formatPhoneNumber = (phoneNumber) => {
    // if (phoneNumber.length === 0) {
    //   return "";
    // }

    let formattedDisplay = "";

    if (phoneNumber.length >= 3) {
      formattedDisplay = `(${phoneNumber.slice(0, 3)}`;
    } else {
      formattedDisplay = `(${phoneNumber}`;
    }

    if (phoneNumber.length >= 6) {
      formattedDisplay += `) ${phoneNumber.slice(3, 6)}`;
    } else if (phoneNumber.length > 3) {
      formattedDisplay += `) ${phoneNumber.slice(3)}`;
    }

    if (phoneNumber.length >= 10) {
      formattedDisplay += `-${phoneNumber.slice(6, 10)}`;
    } else if (phoneNumber.length > 6) {
      formattedDisplay += `-${phoneNumber.slice(6)}`;
    }

    return formattedDisplay;
  };

  const handleKeyDown = (e) => {
    // Capture the cursor position before a backspace action
    if (e.key === "Backspace" && inputRef.current) {
      const selectionStart = inputRef.current.selectionStart;
      const selectionEnd = inputRef.current.selectionEnd;

      // If the cursor is at the beginning of a group (e.g., before '(', ')', or '-'),
      // move the cursor left by one position
      if (selectionStart === selectionEnd) {
        const value = inputRef.current.value;
        if (
          value[selectionStart - 1] === "(" ||
          value[selectionStart - 1] === ")" ||
          value[selectionStart - 1] === "-"
        ) {
          inputRef.current.setSelectionRange(
            selectionStart - 1,
            selectionStart - 1
          );
        }
      }
    }
  };

  // phone logic ends
  // -------------------------------------------------------------------------------------------------------

  return (
    <div className="bg-[#edf1f5] h-[1050px] md:h-[950px] lg:h-[900px] relative">
      {/* <div className="absolute top-0 h-full w-full bg-[rgba(0,0,0,0.5)] z-10"></div> */}
      <video
        src="/videos/bg.mp4"
        autoPlay
        loop
        muted
        className="h-full w-full object-cover absolute z-0"
      />
      <div className="z-20 w-full h-full absolute ">
        <div className="md:w-[80%] h-full bg-[#eff4f7] p-5 bg-opacity-90 flex flex-col items-center justify-center mx-auto">
          <h2 className="text-[#295795] text-5xl font-Teko ">
            Invest Today, Save Tomorrow
          </h2>
          <p className="text-[#F4BC33] text-3xl text-center">
            Exclusive Fall Solar Offers
          </p>
          <form className="flex flex-col mt-8 w-[280px] md:w-[450px] gap-3">
            {error !== "" && (
              <p className="text-red-500">{error}</p>
            )}
            <div className="flex bg-white border border-gray-300 w-full py-3 px-5 rounded-lg overflow-hidden focus-within:border-[#F4BC33]">
              <img
                src="/images/user-icon.svg"
                alt=""
                className="h-[17px] self-center"
              />
              <input
                type="text"
                className="outline-none border-none w-full px-5 bg-transparent text-lg"
                placeholder="Full Name*"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="flex bg-white border border-gray-300 w-full py-3 px-5 rounded-lg overflow-hidden focus-within:border-[#F4BC33]">
              <img
                src="/images/phone-icon.svg"
                alt=""
                className="h-[17px] self-center"
              />
              <input
                type="text"
                className="outline-none border-none w-full px-5 bg-transparent text-lg"
                placeholder="Phone Number*"
                value={phoneNumber}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                ref={inputRef}
              />
            </div>

            <div className="flex bg-white border border-gray-300 w-full py-3 px-5 rounded-lg overflow-hidden focus-within:border-[#F4BC33]">
              <img
                src="/images/message-icon.svg"
                alt=""
                className="h-[17px] self-center"
              />
              <input
                type="email"
                className="outline-none border-none w-full px-5 bg-transparent text-lg"
                placeholder="Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <p className="text-[#295795] text-xl">Are you home owner?*</p>
            <div className="flex items-center gap-20">
              <div className="flex items-center gap-5">
                <input
                  type="radio"
                  value="yes"
                  id="yes"
                  className="h-[15px] w-[15px]"
                  name="owner"
                />
                <label htmlFor="yes" className="text-lg text-gray-500">
                  Yes
                </label>
              </div>

              <div className="flex items-center gap-5">
                <input
                  type="radio"
                  value="no"
                  id="no"
                  className="h-[15px] w-[15px]"
                  name="owner"
                />
                <label htmlFor="no" className="text-lg text-gray-500">
                  No
                </label>
              </div>
            </div>

            
            <p className="text-[#295795] text-xl">Address*</p>
            <GooglePlacesAutocomplete              
              apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
              autocompletionRequest={{
                componentRestrictions: {
                  country: ["us"],
                },
              }}
              selectProps={{
                address,
                placeholder:"",                
                onChange: setAddress,
                
                styles: {
                  input: (provided) => ({
                    ...provided,
                    maxWidth: "500px",
                    width: "500px",
                    height: "40px",
                    padding: "0px 30px"                                        
                  }),
                },
              }}
              className="w-[320px] md:w-[500px] "
              placeholder="hello"
            />

            

            <div className="flex bg-white border border-gray-300 w-full py-3 px-5 rounded-lg overflow-hidden focus-within:border-[#F4BC33]">
              {/* <img src="/images/location-icon.svg" alt="" className="h-[17px] self-center" /> */}
              <input
                type="text"
                className="outline-none border-none w-full px-5 bg-transparent text-lg"
                placeholder="Zip Code*"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
            </div>

            <div className="flex bg-white border border-gray-300 w-full py-3 px-5 rounded-lg overflow-hidden focus-within:border-[#F4BC33]">
              <textarea
                className="outline-none border-none w-full px-5 bg-transparent text-lg h-[120px]"
                placeholder="Message*"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button
              onClick={formHandler}
              className="bg-[#295795] text-[#F4BC33] text-xl py-3 px-8 rounded-sm hover:bg-opacity-80 font-bold lg:w-[60%] lg:self-center flex items-center justify-center"
            >
              
              { !loading ? "GET OFFER" : <img src="/images/loading.gif" alt="" className="h-[40px]" />   }  

            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleStepForm;
