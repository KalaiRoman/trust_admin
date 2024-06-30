import React, { useEffect, useState } from 'react'
import { AllPayment } from '../../services/payment_services/payment_services';

function CardPayments() {

    const [payments,setPayments]=useState([]);


    useEffect(()=>{

        const responseData=async()=>{
try {
const {status,data,message}=await AllPayment();

if(status)
    {
        setPayments(data);
    }
} catch (error) {
    
}
        }

        responseData();

    },[])

  return (
    <div className='container'>
        {payments?.map((item,index)=>{
            return(
                <div className='card p-3' key={index}>
                   <div className='d-flex justify-content-between'>
                    <div className='d-flex gap-3 align-items-center'>
                    <div>
                            <img src={item?.user?.avatar} width={"50px"} height={"50px"}  style={{borderRadius:"50%"}}/>
                        </div>
<div className='mt-2'>
  <div>
  {item?.user?.userName}
  </div>
  <div>
    {item?.user?.mobileNo}
  </div>

  <div>
    <hr/>
  </div>
  <div>
    Address: 
  </div>
  <div className='mt-1'>
    {item?.address?.address}
  </div>
</div>


                    </div>
                    <div className='d-flex align-items-center justify-content-center fw-bold fs-5'>
                    ₹ {item?.amount}
                    </div>
                   </div>
                </div>
            )
        })}
    </div>
  )
}

export default CardPayments