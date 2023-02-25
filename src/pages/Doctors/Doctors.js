import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'


function Doctors() {
  return (
    <>
    <Sidebar/>
    <div className='all-cointainer'>
        <div className='dashboard-contain'>
          <h4>Doctor</h4>
          <button className='btn btn-primary text-white my-3 ms-auto d-flex align-items-center fw-normal me-4 py-2'><i className='bx bx-plus fw-bold fs-5 px-1'></i> ADD DOCTOR</button>
          <div className='cointainer'>
            <table class="table  table-striped">
              <thead>
                <tr>
                  <th scope="col">S.N</th>
                  <th scope="col">Doctor Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Specialist</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </>
  )
}

export default Doctors