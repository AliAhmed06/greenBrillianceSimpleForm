"use client"
import React, { useState, useRef } from 'react';

const PhoneNumberInput = ({formData, handleChangeInput}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(true); // Track phone number validation
  const inputRef = useRef(null);

  console.log('ttee', isValid);
  console.log(phoneNumber.length);
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    // Remove any non-digit characters from the input
    const formattedPhoneNumber = inputValue.replace(/\D/g, '');
    const formattedDisplay = formatPhoneNumber(formattedPhoneNumber);

    // Check if the phone number is valid (customize this validation as needed)
    const isValidPhoneNumber = formattedPhoneNumber.length === 10; // Example: 10 digits required

    setPhoneNumber(formattedDisplay);
    setIsValid(isValidPhoneNumber);
  };

  const formatPhoneNumber = (phoneNumber) => {
    if (phoneNumber.length === 0) {
      return '';
    }

    let formattedDisplay = '';

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
    if (e.key === 'Backspace' && inputRef.current) {
      const selectionStart = inputRef.current.selectionStart;
      const selectionEnd = inputRef.current.selectionEnd;

      // If the cursor is at the beginning of a group (e.g., before '(', ')', or '-'),
      // move the cursor left by one position
      if (selectionStart === selectionEnd) {
        const value = inputRef.current.value;
        if (value[selectionStart - 1] === '(' || value[selectionStart - 1] === ')' || value[selectionStart - 1] === '-') {
          inputRef.current.setSelectionRange(selectionStart - 1, selectionStart - 1);
        }
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="(123) 456-7890"
        className="w-[320px] md:w-[500px] stepField"
        // value={formData.phone}
        // onChange={(e) => handleChangeInput("phone", e.target.value) }
        value={phoneNumber}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        ref={inputRef}
        // className={!isValid ? 'error' : ''}
      />
      {!isValid && <p className="text-red-500 font-semibold text-center">Please enter a valid phone number.</p>}
    </div>
  );
};

export default PhoneNumberInput;
