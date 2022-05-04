import React from "react";
import { connect } from "react-redux";

const EmployeeDetails = ({
    employeeDetails
}) => {
  return <div>{employeeDetails.name}</div>;
};


const mapStateToProps = (state)=>{
    debugger
    return {
        employeeDetails: state.EmployeeReducer.selectedEmployee,
    }
}


export default connect(mapStateToProps, null)(EmployeeDetails)