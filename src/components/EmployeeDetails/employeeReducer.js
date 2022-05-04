import { ADD_SELECTED_EMPLOYEE } from "./Constants";

const initialState = {
  selectedEmployee: {
    name: "praveen",
    employee_id: "001",
    dob: "20-10-1993",
    joining_date: "03-04-2022",
    email_id: "praveenjayamoorthy@gmail.com",
  },
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SELECTED_EMPLOYEE:
      return {
        ...state,
        selectedEmployee: action.data,
      };
    default:
      return state;
  }
};
export default employeeReducer;
