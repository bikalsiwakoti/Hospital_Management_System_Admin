import Sidebar from "./components/Sidebar/Sidebar"
import Product from "./pages/Product/Product"
import Dashboard from "./pages/Dashboard/Dashboard"
import Orders from "./pages/Orders/Orders"
import Doctors from "./pages/Doctors/Doctors"
import Staffs from "./pages/Staffs/Staffs"
import Customers from "./pages/Customers/Customers"
import AddProducts from "./components/modals/AddProducts"
import AddDoctors from "./components/modals/AddDoctors"
import AddStaffs from "./components/modals//AddStaff"
import AddCustomers from "./components/modals/AddCustomer"
import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"



function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Dashboard />} />
        <Route path={'/products'} element={<Product />}>
          <Route path={'add'} element={<AddProducts />} />
        </Route>
        <Route path={'/orders'} element={<Orders />} />
        <Route path={'/doctors'} element={<Doctors />}>
          <Route path={'add'} element={<AddDoctors />} />
        </Route>
        <Route path={'/staffs'} element={<Staffs />}>
          <Route path={'add'} element={<AddStaffs />} />
        </Route>
        <Route path={'/customers'} element={<Customers />}>
          <Route path={'add'} element={<AddCustomers />} />

        </Route>
      </Routes>
    </>
  );
}

export default App;
