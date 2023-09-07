// backup for server side rendering of leads page
import axios from "axios";
import Link from "next/link";
import React from "react";

const getData = async () => {
  let response = await fetch("http://api.solarenergypros.org/api/solar_inquiries", { cache: 'no-store' });
  // let response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
  response = await response.json();
  // response = response.meals;

  return response.solar_inquiries;
};

const page = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div className="min-h-[500px] w-full flex items-center justify-center text-white py-10 overflow-hidden">
      <div className="w-[80%] overflow-auto border border-white">
        <table className="table">
          <thead>
            <tr className="">
              <th>Name</th>
              <th>Email</th>
              <th>phone</th>
              <th>zip</th>
              <th>Home Owner</th>
              <th>Home Type</th>
              <th>Averagre Monthly Bill</th>
              <th>Electricity Provider</th>
              <th>Credit Score</th>
              <th>Shade</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr key={item.id}>
                <td>
                  {item.first_name} {item.last_name}
                </td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.zip}</td>
                <td>{item.is_home_owner}</td>
                <td>{item.type_of_home}</td>
                <td>{item.average_monthly_bill}</td>
                <td>{item.electricity_provider}</td>
                <td>{item.credit_score}</td>
                <td>{item.shade}</td>
                <td>{item.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
