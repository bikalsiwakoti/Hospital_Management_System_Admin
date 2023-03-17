import Sidebar from "./components/Sidebar/Sidebar"
import Product from "./pages/Product/Product"
import Dashboard from "./pages/Dashboard/Dashboard"
import Orders from "./pages/Orders/Orders"
import Doctors from "./pages/Doctors/Doctors"
import Staffs from "./pages/Staffs/Staffs"
import Customers from "./pages/Customers/Customers"
import AddProducts from "./components/modals/AddProducts"
import DeleteProduct from "./components/modals/Product/DeleteProduct"
import DeleteStaff from "./components/modals/Staff/DeleteStaff"
import AddDoctors from "./components/modals/Doctor/AddDoctors"
import AddStaffs from "./components/modals/AddStaff"
import AddCustomers from "./components/modals/Customer/AddCustomer"
import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import EditCustomer from "./components/modals/Customer/EditCustomer"
import DeleteCustomer from "./components/modals/Customer/DeleteCustomer"
import DeleteDoctor from "./components/modals/Doctor/DeleteDoctor"
import EditStaff from "./components/modals/Staff/EditStaff"



function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Dashboard />} />
        <Route path={'/products'} element={<Product />}>
          <Route path={'add'} element={<AddProducts />} />
          <Route path={'delete/:id'} element={<DeleteProduct />} />
        </Route>
        <Route path={'/orders'} element={<Orders />} />
        <Route path={'/doctors'} element={<Doctors />}>
          <Route path={'add'} element={<AddDoctors />} />
          <Route path={'delete/:id'} element={<DeleteDoctor />} />
        </Route>
        <Route path={'/staffs'} element={<Staffs />}>
          <Route path={'add'} element={<AddStaffs />} />
          <Route path={'delete/:id'} element={<DeleteStaff />} />
          <Route path={'edit/:id'} element={<EditStaff />} />
        </Route>
        <Route path={'/customers'} element={<Customers />}>
          <Route path={'add'} element={<AddCustomers />} />
          <Route path={'edit/:id'} element={<EditCustomer />} />
          <Route path={'delete/:id'} element={<DeleteCustomer />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
