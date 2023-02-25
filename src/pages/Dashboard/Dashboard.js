import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import StatusCard from '../../components/StatusCard/StatusCard'
import './Dashboard.css'
import Chart from "react-apexcharts";

const data = {
  options: {
    color: ['#6ab04c'],
    chart: {
      background: 'transparent'
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: ['jan', 'feb', 'mar', 'apr', 'jun', 'july', 'aug', 'sep']
    },
    legend: {
      position: 'top'
    },
    grid: {
      show: false
    }
  },
  series: [
    {
      name: "Products Sales",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
  ]
}

function Dashboard() {
  return (
    <>
      <Sidebar />
      <div className='all-cointainer'>
        <div className='dashboard-contain'>
          <h4>Dashboard</h4>
          <div className='cointainer'>

            <div className='dashboard-left'>
              <div className='left-cards'>
                <div className='lCards'>
                  <StatusCard />
                </div>
                <div className='lCards'>
                  <StatusCard />
                </div>
              </div>

              <div className='left-cards'>
                <div className='lCards'>
                  <StatusCard />
                </div>
                <div className='lCards'>
                  <StatusCard />
                </div>
              </div>
            </div>


            <div className='dashboard-right'>
              <div className='RCards cardsHeigth'>

                {/* chart */}
                <Chart
                  options={data.options}
                  series={data.series}
                  type="line"
                  height="100%"
                />
              </div>
            </div>

          </div>

        </div>

        <div className='latestOrders'>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">S.N</th>
                <th scope="col">Order Id</th>
                <th scope="col">Details</th>
                <th scope="col">Total Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>1888</td>
                <td>medicine</td>
                <td>NPR 120</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>1888</td>
                <td>medicine</td>
                <td>NPR 120</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>1888</td>
                <td>medicine</td>
                <td>NPR 120</td>
              </tr>

              <tr>
                <th scope="row">4</th>
                <td>1888</td>
                <td>medicine</td>
                <td>NPR 120</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>1888</td>
                <td>medicine</td>
                <td>NPR 120</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>1888</td>
                <td>medicine</td>
                <td>NPR 120</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Dashboard