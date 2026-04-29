import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: 'Edward Vincent',
    image: assets.profile_pic,
    email: 'richardjameswap@gmail.com',
    phone: '+1  123 456 7890',
    address: {
      line1: '57th Cross, Richmond ',
      line2: 'Circle, Church Road, London'
    },
    gender: 'Male',
    dob: '12-12-2000'
  })

  const [isEdit, setIsEdit] = useState(false)

  return (
    <div>

      <img src={userData.image} alt="Profile" />
      {
        isEdit ? <input type="text" value={userData.name} onChange={e => setUserData(prev => ({...prev, name: e.target.value}))} /> : <p>{userData.name}</p>
      }

      <hr />
      <div className="">
        <p>CONTACT INFORMATION</p>
        <div className="">
          <p>Email id:</p>
          <p>{userData.email}</p>
        </div>
      </div>
      
    </div>
  )
}

export default MyProfile
