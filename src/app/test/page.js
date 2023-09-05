"use client"
import axios from "axios";
import Autocomplete from "react-google-autocomplete";

const ContactForm = () => {
  const handler = async () => {
    const data = {
      "address": "some address here",
      "credit_score": "GOOD 640 - 739",
      "electricity_provider": "ConEd, subsidiary of Consolidated Edison",
      "email": "test@gmail.com",
      "first_name": "first name",
      "type_of_home": "SINGLE FAMILY HOME",
      "is_home_owner": 0,
      "last_name": "last name",
      "average_monthly_bill": "LESS THAN $100",
      "phone": "123456789",
      "shade": "NO SHADE",
      "zip": "54000",
      "solar_considering": ["yes","no"]
    }
    const response =  await axios.post("https://api.solarenergypros.org/api/solar_inquiries", data);
    console.log("ali response is = ", response);
  }
  return (
    <button onClick={handler}>
      click
    </button>
  );
};

export default ContactForm;
