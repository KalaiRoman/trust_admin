import React, { useEffect, useState } from 'react'
import { getAllusers } from '../../services/auth_services/auth_services';

function Allusers() {

    const [users,setUsers]=useState([]);


    useEffect(()=>{

        const responseData=async()=>{
try {
const {status,data,message}=await getAllusers();

if(status)
    {
        setUsers(data);
    }
} catch (error) {
    
}
        }

        responseData();

    },[])
  return (
    <div className='container mt-5 mb-5'>
        {users?.map((item,index)=>{
            return(
                <div className='card p-3' key={index}>
                   <div className='d-flex justify-content-between'>
                    <div className='d-flex gap-3 align-items-center'>
                    <div>
                            <img src={item?.avatar} width={"50px"} height={"50px"}  style={{borderRadius:"50%"}}/>
                        </div>
<div className='mt-2'>
  <div>
  {item?.userName}
  </div>
  <div>
    {item?.mobileNo}
  </div>
</div>


                    </div>
                    <div>
                        <button className='theme-btn'>View Profile</button>
                    </div>
                   </div>
                </div>
            )
        })}
    </div>
  )
}

export default Allusers