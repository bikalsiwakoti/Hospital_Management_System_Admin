import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Sidebar from '../../components/Sidebar/Sidebar'
import { fetchData } from '../../redux/slices/OrderSlice'
import { Link, Outlet } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import './Orders.css'


function Orders() {
  const dispatch = useDispatch()
  const orders = useSelector(state => state?.order)

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
                  <th scope="col">First Name</th>
                  <th scope="col">Address</th>
                  <th scope="col">Payment Type</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {orders?.data.map((order, i) => {
                  return (<tr>
                    <th scope="row">{i + 1}</th>
                    <td>{order.firstname}</td>
                    <td>{order.address}</td>
                    <td>{order.order_payment}</td>
                    <td className='orderStatus'>{order.status || "NO"}</td>
                    <td><Link style={{ textDecoration: 'none', color: 'initial' }} to={`/orders/edit/${order.id}`}><i class='bx bxs-edit editBtn' ></i> </Link> <Link to={`/orders/show/${order.id}`} style={{ textDecoration: 'none', color: 'initial' }}><i class='bx bx-show viewBtn'></i></Link></td>

                  </tr>)
                })
                }
              </tbody>
            </table>

          </div>
        </div>
      </div>
      <ToastContainer/>
      <Outlet />
    </>
  )
}

export default Orders