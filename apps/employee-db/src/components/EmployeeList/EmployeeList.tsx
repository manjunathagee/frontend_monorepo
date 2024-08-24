import { Employee } from "../../constants/common";

const Employeelist = ({
  data,
  setSelectedEmployee,
}: {
  data: Employee[];
  setSelectedEmployee: React.Dispatch<React.SetStateAction<Employee>>;
}) => {
  return (
    <>
      <h1 className="text-center">Employee List</h1>
      <ul className="space-y-2 mt-2">
        {data.map((employee) => (
          <li
            className="border p-4 rounded-lg text-center bg-slate-100 hover:cursor-pointer hover:scale-105 duration-150"
            key={employee.id}
            onClick={() => setSelectedEmployee(employee)}
          >
            {employee.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Employeelist;
