import { useState } from "react";
import { Employee } from "../../constants/common";
import { AddEmployee } from "../AddEmployee";

const EmployeeDetails = ({ employee }: { employee: Employee }) => {
  const dateString = employee.dob ? new Date(employee.dob).toDateString() : "";
  const [showDialog, setShowDialogue] = useState<boolean>(false);

  const closeDialogue = () => setShowDialogue(false);

  return (
    <>
      <div className="flex justify-between">
        <h2>Employee Details: {employee.name}</h2>
        <button
          onClick={() => setShowDialogue(true)}
          className="px-2 py-1 bg-slate-400 rounded-sm hover:cursor-pointer hover:scale-95 duration-150 hover:bg-slate-300 outline-none"
        >
          Add
        </button>
      </div>
      <div className="p-4 bg-slate-100 rounded-lg mt-2 flex flex-col items-center">
        <div className="h-[200px] w-[200px] overflow-hidden rounded-full">
          <img
            alt="Employee Avatar"
            src={employee.defaultImageUrl}
            className="h-full w-full bg-contain"
          />
        </div>
        <span>Name: {employee.name}</span>
        {dateString.length > 0 ? (
          <span id="dob">Date of Birth: {dateString}</span>
        ) : null}
      </div>
      <AddEmployee showDialog={showDialog} closeDialogue={closeDialogue} />
    </>
  );
};

export default EmployeeDetails;
