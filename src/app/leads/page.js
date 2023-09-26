// backup for server side rendering of leads page
import axios from "axios";
import Link from "next/link";
import React from "react";

const getData = async () => {  
  // let response = await fetch("http://api.solarenergypros.org/api/solar_inquiries", { cache: 'no-store' });
  let response = await fetch(`${process.env.DOMAIN_NAME}/api/simpleForm`, { cache: 'no-store' });
  // let response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/simpleForm`, { cache: 'no-store' });

  response = await response.json();
  // response = response.meals;

  return response.formData;
};

const page = async () => {
  const data = await getData();
  // console.log(data);
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
              <th>Address</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr key={item.id}>
                <td>
                  {item.full_name}
                </td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.zip}</td>
                <td>{item.is_home_owner}</td>
                <td>{item.address}</td>
                <td>{item.message}</td>                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
