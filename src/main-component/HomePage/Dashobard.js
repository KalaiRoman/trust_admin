import React, { useEffect, useState } from 'react'
import { overAllDataCounts } from '../../services/address_services/address_services';

function Dashobard() {

  const [allusers,setAllusers]=useState({});

const getData=async()=>{
  try {
    const {status,data,message}=await overAllDataCounts();

    if(status)
      {
        setAllusers(data);
      }
  } catch (error) {
    
  }
}
  useEffect(()=>{
    getData();
  },[])

  return (
    <div className='container mt-5 mb-5 p-2 row w-100 mx-auto gap-2'>
      <div className='card p-4 col-lg-2 text-center'>
        <div>
All Users  
        </div>
        <div className='mt-3 fw-bold fs-1'>
          {allusers?.userCount}
        </div>
      </div>
      <div className='card p-4 col-lg-2 text-center'>
        <div>
All payments  
        </div>
        <div className='mt-3 fw-bold fs-1'>
          {allusers?.paymentCounts}
        </div>
      </div>
      <div className='card p-4 col-lg-2 text-center'>
        <div>
All Contacts  
        </div>
        <div className='mt-3 fw-bold fs-1'>
          {allusers?.contactCount}
        </div>
      </div>
      <div className='card p-4 col-lg-2 text-center'>
        <div>
All Subscribers 
        </div>
        <div className='mt-3 fw-bold fs-1'>
          {allusers?.subscriberCount}
        </div>
      </div>
    </div>
  )
}

export default Dashobard