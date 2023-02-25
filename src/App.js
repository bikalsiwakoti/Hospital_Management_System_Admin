import Sidebar from "./components/Sidebar/Sidebar"
import Product from "./pages/Product/Product"
import Dashboard from "./pages/Dashboard/Dashboard"
import Orders from "./pages/Orders/Orders"
import Doctors from "./pages/Doctors/Doctors"
import Staffs from "./pages/Staffs/Staffs"
import Customers from "./pages/Customers/Customers"
import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"



function App() {
  return (
    <>
    <Routes>
      <Route path={'/'} element={<Dashboard/>}/>
      <Route path={'/products'} element={<Product/>}/>
      <Route path={'/orders'} element={<Orders/>}/>
      <Route path={'/doctors'} element={<Doctors/>}/>
      <Route path={'/staffs'} element={<Staffs/>}/>
      <Route path={'/customers'} element={<Customers/>}/>
    </Routes>
    </>
  );
}

export default App;
