import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateEmployeePage from "./pages/CreateEmployeePage";
import { Helmet } from "react-helmet";
function App() {
  return (
    
    <div>
     <Helmet> 
      <title>Employee Management System</title>
      
    </Helmet>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addemployee" element={<CreateEmployeePage />} />
      </Routes>
    </div>
  );
}

export default App;
