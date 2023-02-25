import React from 'react'
import './StatusCard.css'

function StatusCard() {
  return (
    <div className='status-card'>
      <div className='status-card-icon'>
        <i class='bx bx-shopping-bag'></i>
      </div>
      <div className='status-card-info'>
        <h4>10000</h4>
        <span><i>Total Sales</i></span>
      </div>

    </div>
  )
}

export default StatusCard