import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Appointment = () => {

  const {docId} = useParams();
  const {doctors} = useContext(AppContext)
  const [docInfo, setDocInfo] = useState(null);

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
    
    
  }

  useEffect(() => {
    fetchDocInfo();
  }, [docId, doctors])

  return docInfo && (
    <div>
      {/* Doctors Details */}
      <div className="">
        <div className="">
          <img src={docInfo?.image} alt={docInfo?.name} />
        </div>
      </div>
      
    </div>
  )
}

export default Appointment
