import EmployeeList from "./EmployeeList";
import EmployeeContextProvider from "./EmployeeContext";

const EmployeeApp = () => {
  return (
    <div  className="App">
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
           
            <EmployeeContextProvider>

            <EmployeeList />
            
            </EmployeeContextProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeApp;
