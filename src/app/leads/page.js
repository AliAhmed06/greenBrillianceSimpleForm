"use client";
// backup for server side rendering of leads page
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const getData = async () => {
  // let response = await fetch("http://api.solarenergypros.org/api/solar_inquiries", { cache: 'no-store' });
  let response = await fetch(`${process.env.DOMAIN_NAME}/api/simpleForm`, {
    cache: "no-store",
  });
  // let response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/simpleForm`, { cache: 'no-store' });
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.indexOf("application/json") !== -1) {
    response = await response.json();
    return response.formData;
  } else {
    return;
  }
  // console.log(response.headers.get("content-type"));
  // console.log(response.Headers['content-type'])
  // response = response.meals;
};

const Page = () => {
  const [records, setRecords] = useState([]);
  // const data = await getData();
  // console.log(data);

  useEffect(() => {
    const getData = async () => {
      let response = await fetch(`/api/simpleForm`, {
        cache: "no-store",
      });
      // let response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/simpleForm`, { cache: 'no-store' });
      const contentType = response.headers.get("content-type");
      response = await response.json();
      setRecords(response.formData);
      // console.log(response);
      // if (contentType && contentType.indexOf("application/json") !== -1) {
      //   // return response.formData;
      // } else {
      //   // return;
      // }
    };
    getData();
  }, []);

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
            {records?.map((item) => (
              <tr key={item._id}>
                <td>{item.full_name}</td>
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

export default Page;
