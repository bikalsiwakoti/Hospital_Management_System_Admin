import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Sidebar from '../../components/Sidebar/Sidebar'
import { fetchData } from '../../redux/slices/PatientSlice'
import { Link, Outlet } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import './Patients.css'


function Patients() {
  const dispatch = useDispatch()
  const patients = useSelector(state => state?.patient)

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  return (
    <>
      <Sidebar />
      <div className='all-cointainer'>
        <div className='dashboard-contain'>
          <h4>Orders</h4>
          <div className='cointainer'>
            <table class="table  table-striped">
              <thead>
                <tr>
                  <th scope="col">S.N</th>
                  <th scope="col">Full Name</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Health Issue</th>
                  <th scope="col">Date Of Appointment</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {patients?.data.map((patient, i) => {
                  return (<tr>
                    <th scope="row">{i + 1}</th>
                    <td>{patient.firstName} {patient.lastName}</td>
                    <td>{patient.phoneNumber}</td>
                    <td>{patient.healthIssue}</td>
                    <td >{patient.dateOfAppointment}</td>
                    <td><Link to={`/patients/show/${patient.id}`} style={{ textDecoration: 'none', color: 'initial' }}><i class='bx bx-show viewBtn'></i></Link> <Link style={{ textDecoration: 'none', color: 'initial' }} to={`/patients/mail/${patient.id}`}> <i class='bx bxs-envelope mailBtn'></i></Link></td>
                  </tr>)
                })
                }
              </tbody>
            </table>

          </div>
        </div>
      </div>
      <ToastContainer />
      <Outlet />
    </>
  )
}

export default Patients