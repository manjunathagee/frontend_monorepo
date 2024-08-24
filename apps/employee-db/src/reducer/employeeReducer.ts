import { Employee } from "../constants/common";

export const ADD_EMP = "ADD_EMP";
export const REMOVE_EMP = "REMOVE_EMP";

export const reducerFn: (
  state: Employee[],
  action: {
    type: string;
    payload?: Employee;
  }
) => Employee[] = (state, action) => {
  switch (action.type) {
    case ADD_EMP:
      return [...state, { ...action.payload }];
    default:
      return state;
  }
};
