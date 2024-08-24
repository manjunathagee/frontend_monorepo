import { createContext } from "react";
import { Employee } from "../constants/common";

export const EmployeeDataContext = createContext<Employee[] | null>(null);
export const EmployeeDispatchContext = createContext<null | React.Dispatch<{
  type: string;
  payload?: Employee | undefined;
}>>(null);
