import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import { fetchData, addData, editData, deleteData } from '../.././redux/slices/CustomerSlice'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';


function Customers() {
  const dispatch = useDispatch()
  const customer = useSelector(state => state.customer)
  useEffect(() => {
    dispatch(fetchData())
  }, [])

  return (
    <>
      <Sidebar />
      <div className='all-cointainer'>
        <div className='dashboard-contain'>
          <h4>Customer</h4>
          <Link to='/customers/add' style={{ textDecoration: 'none', color: 'initial' }}><button className='btn btn-primary text-white my-3 ms-auto d-flex align-items-center fw-normal me-4 py-2'><i className='bx bx-plus fw-bold fs-5 px-1'></i> ADD Customer</button></Link>

          <div className='cointainer'>

            <table class="table  table-striped">
              <thead>
                <tr>
                  <th scope="col">S.N</th>
                  <th scope="col">User Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {customer?.data.map((data, i) => (
                  <tr key={data.id}>
                    <th scope="row">{i + 1}</th>
                    <td>{data.username}</td>
                    <td>{data.email}</td>
                    <td>{data.role}</td>
                    <td><Link style={{ textDecoration: 'none', color: 'initial' }} to={`/customers/edit/${data.id}`}><i class='bx bxs-edit editBtn' ></i> </Link> <Link to={`/customers/delete/${data.id}`} style={{ textDecoration: 'none', color: 'initial' }}><i class='bx bx-x deleteBtn' ></i></Link></td>
                  </tr>
                ))
                }
              </tbody>
            </table>

          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center" />
      <Outlet />
    </>
  )
}

export default Customers