import React, { useEffect } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Link, Outlet } from 'react-router-dom'
import { fetchData } from '../../redux/slices/ProductSlice'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';




function Product() {

  const dispatch = useDispatch()
  const product = useSelector(state => state.product)

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  console.log(product)
  return (
    <>
      <Sidebar />
      <div className='all-cointainer'>
        <div className='dashboard-contain'>
          <h4>Product</h4>
          <Link to='/products/add' style={{ textDecoration: 'none', color: 'initial' }}><button className='btn btn-primary text-white my-3 ms-auto d-flex align-items-center fw-normal me-4 py-2'><i className='bx bx-plus fw-bold fs-5 px-1'></i> ADD PRODUCT</button></Link>
          <div className='cointainer'>

            <table class="table  table-striped">
              <thead>
                <tr>
                  <th scope="col">S.N</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Img</th>
                  <th scope="col">Price</th>
                  {/* <th scope="col">Available Quantity</th> */}
                  <th scope="col">Genre</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {product.data?.map((data, i) => {
                  return (
                    <tr key={data.id}>
                      <th scope="row">{i + 1}</th>
                      <td>{data.name}</td>
                      {/* <td>{data.img}</td> */}
                      <td><img src={`http://localhost:5000/images/${data.img}`} alt="product image"></img></td>
                      <td>{data.price}</td>
                      {/* <td>{data.availableQuantity}</td> */}
                      <td>{data.genre}</td>
                      <td><Link style={{ textDecoration: 'none', color: 'initial' }} to={`/products/edit/${data.id}`}><i class='bx bxs-edit editBtn' ></i> </Link> <Link to={`/products/delete/${data.id}`} style={{ textDecoration: 'none', color: 'initial' }}><i class='bx bx-x deleteBtn' ></i></Link></td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Outlet />
      <ToastContainer/>

    </>
  )
}

export default Product