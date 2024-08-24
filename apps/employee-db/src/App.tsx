import { useReducer } from "react";
import { EmployeeDb } from "./components/EmployeeDb";
import { reducerFn } from "./reducer/employeeReducer";
import data from "./data/EmployeeData.json";
import {
  EmployeeDataContext,
  EmployeeDispatchContext,
} from "./context/AppContext";

const DEFAULT_STATE = [...data];

function App() {
  const [state, dispatch] = useReducer(reducerFn, DEFAULT_STATE);

  return (
    <EmployeeDataContext.Provider value={state}>
      <EmployeeDispatchContext.Provider value={dispatch}>
        <EmployeeDb />
      </EmployeeDispatchContext.Provider>
    </EmployeeDataContext.Provider>
  );
}

export default App;
