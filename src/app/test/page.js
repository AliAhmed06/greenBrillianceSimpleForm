"use client";
import DataTable from "react-data-table-component";

const page = () => {
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Year",
      selector: (row) => row.year,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
  ];

  return (
    <div className="">
      <div className="w-[80%] mx-auto">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default page;
