import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'


function Orders() {
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
                  <th scope="col">Order Number</th>
                  <th scope="col">Status</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {/* <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr> */}
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </>
  )
}

export default Orders