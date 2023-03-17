import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import { fetchStaffData } from '../../redux/slices/StaffSlice'

import { useDispatch, useSelector } from 'react-redux'


function Staffs() {
  const dispatch = useDispatch()
  const staffData = useSelector(state => state.staff)


  useEffect(() => {
    dispatch(fetchStaffData())
  }, [])
  return (
    <>
      <Sidebar />
      <div className='all-cointainer'>
        <div className='dashboard-contain'>
          <h4>Staffs</h4>
          <Link to='/staffs/add' style={{ textDecoration: 'none', color: 'initial' }}><button className='btn btn-primary text-white my-3 ms-auto d-flex align-items-center fw-normal me-4 py-2'><i className='bx bx-plus fw-bold fs-5 px-1'></i> ADD Staff</button></Link>

          <div className='cointainer'>

            <table class="table  table-striped">
              <thead>
                <tr>
                  <th scope="col">S.N</th>
                  <th scope="col">Staff Name</th>
                  <th scope="col">Role</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Position</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {staffData?.staff.map((data,i) => {
                  return (<tr key={data.id}>
                    <th scope="row">{i+1}</th>
                    <td>{data.username}</td>
                    <td>{data.role}</td>
                    <td>{data.staff.phone_number}</td>
                    <td>{data.staff.position}</td>
                    <td><Link style={{ textDecoration: 'none', color: 'initial' }} to={`/staffs/edit/${data.id}`}><i class='bx bxs-edit editBtn' ></i> </Link> <Link to={`/staffs/delete/${data.id}`} style={{ textDecoration: 'none', color: 'initial' }}><i class='bx bx-x deleteBtn' ></i></Link></td>
                  </tr>)
                })
                }
              </tbody>
            </table>

          </div>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Staffs