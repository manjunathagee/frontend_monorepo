import { useContext, useId, useState } from "react";
import { EmployeeDispatchContext } from "../../context/AppContext";
import { ADD_EMP } from "../../reducer/employeeReducer";
import { v4 as uuidv4 } from "uuid";

const DEFAULT = {
  name: "",
  profile: "",
  dob: "",
  id: "",
};

const DefaultAvatar = "https://svgsilh.com/svg/659651.svg";

const AddEmployee = ({
  showDialog,
  closeDialogue,
}: {
  showDialog: boolean;
  closeDialogue: () => void;
}) => {
  const id = useId();
  const [employeeData, setEmployeeData] = useState(DEFAULT);
  const dispatch = useContext(EmployeeDispatchContext);

  const onSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    closeDialogue();
    setEmployeeData(DEFAULT);
    if (dispatch && typeof dispatch === "function") {
      dispatch({
        type: ADD_EMP,
        payload: {
          ...employeeData,
          id: uuidv4(),
          defaultImageUrl: employeeData.profile || DefaultAvatar,
        },
      });
    }
  };

  return showDialog ? (
    <div>
      <div className="backdrop"></div>
      <div className="backdrop-center">
        <form
          onSubmit={onSumbit}
          className="bg-white rounded-lg p-4 flex flex-col"
        >
          <h3 className="capatalize my-2 ">Add New Employee: </h3>
          <div className="flex flex-col gap-1">
            <div>
              <label htmlFor={`${id}-name`}>Name: </label>
              <input
                type="text"
                name="name"
                className="bg-slate-200 rounded-lg px-2 py-1 outline-none w-full"
                id={`${id}-name`}
                value={employeeData.name}
                onChange={(e) =>
                  setEmployeeData((data) => ({
                    ...data,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </div>
            <div>
              <label htmlFor={`${id}-profile`}>Profile:</label>
              <input
                type="text"
                id={`${id}-profile`}
                name="profile"
                className="bg-slate-200 rounded-lg px-2 py-1 outline-none w-full"
                value={employeeData.profile}
                onChange={(e) =>
                  setEmployeeData((data) => ({
                    ...data,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </div>
            <div>
              <label htmlFor={`${id}-dob`}>DOB:</label>
              <input
                type="date"
                id={`${id}-dob`}
                name="dob"
                className="bg-slate-200 rounded-lg px-2 py-1 outline-none w-full"
                value={employeeData.dob}
                onChange={(e) =>
                  setEmployeeData((data) => ({
                    ...data,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </div>
          </div>
          <div className="self-end flex gap-2">
            <button
              type="submit"
              className="px-3 py-1 bg-slate-200 my-2 rounded-lg cursor-pointer "
            >
              Add
            </button>
            <button
              className="px-3 py-1 bg-slate-200 my-2 rounded-lg cursor-pointer self-end"
              onClick={closeDialogue}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
};

export default AddEmployee;
