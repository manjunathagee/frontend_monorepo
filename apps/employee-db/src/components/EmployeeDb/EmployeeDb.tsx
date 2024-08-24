import { useContext, useState } from "react";
import { EmployeeList } from "../EmployeeList";
import { EmployeeDetails } from "../EmployeeDetails";
import { Employee } from "../../constants/common";
import { EmployeeDataContext } from "../../context/AppContext";

const EmployeeDb = () => {
  const data = useContext(EmployeeDataContext) || [];
  const [selectedEmployee, setSelectedEmployee] = useState<Employee>(data[0]);

  return (
    <div className="container flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 rounded-lg p-4 m-4 bg-slate-300 mx-auto">
      <div className="md:w-[35%] rounded-lg bg-slate-200 p-4">
        <EmployeeList data={data} setSelectedEmployee={setSelectedEmployee} />
      </div>
      <div className="md:w-[65%] rounded-lg bg-slate-200 p-4">
        <EmployeeDetails employee={selectedEmployee} />
      </div>
    </div>
  );
};

export default EmployeeDb;
