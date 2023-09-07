"use client"
import { useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';


const page = () => {
  const [address, setAddress] = useState("");
  console.log("address = ", address.label);
  return (
    <div>
      <GooglePlacesAutocomplete
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
        autocompletionRequest={{        
          componentRestrictions: {
            country: ['us', 'ca', 'uy'],
          }
        }}
        selectProps={{
          address,
          onChange: setAddress,
        }}      
      />
    </div>
  )
}

export default page