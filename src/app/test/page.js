"use client"
import Autocomplete from "react-google-autocomplete";

const ContactForm = () => {
  
  return (
    <Autocomplete
      apiKey={"AIzaSyC_njDZE_3IOIeIhbMeJAJVfbzN8xBEjK8"}
      onPlaceSelected={(place) => console.log(place)}
      className="py-5"
    />
  );
};

export default ContactForm;
