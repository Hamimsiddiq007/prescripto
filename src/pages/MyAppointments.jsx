import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointments = () => {

  const {doctors} = useContext(AppContext)

  return (
    <div>
      <p>My appointments</p>
      <div className="">
        {
          doctors.slice(0, 2).map((item, index) => (
            <div className="" key={index}>
              <div className="">
                <img src={item.image} alt="" />
              </div>
              <div className="">
                <p>{item.name}</p>
                <p>{item.speciality}</p>
                <p>Address:</p>
                <p>{item.address.line1}</p>
                <p>{item.address.line2}</p>
                <p><span>Date & Time:</span> 25, July, 2024 |  8:30 PM</p>
              </div>
              <div className=""></div>
              <div className="">
                <button>Pay Online</button>
                <button>Cancel appointment</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MyAppointments
