import React, { useEffect, useState } from 'react'
import { getContactAllusers } from '../../services/contact_services/contact_services';

function ContactDetails() {

    const [contacts,setContacts]=useState([]);


    useEffect(()=>{

        const responseData=async()=>{
try {
const {status,data,message}=await getContactAllusers();

if(status)
    {
        setContacts(data);
    }
} catch (error) {
    
}
        }

        responseData();

    },[])

  return (
    <div className='container p-2'>
      

<table class="table table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">ConatctNo</th>
      <th scope="col">Message</th>


    </tr>
  </thead>
  <tbody >
    <>
        {contacts?.map((item)=>{
            return(
                <tr>
                      <td>{item?._id}</td>
      <td>{item?.firstName}</td>
      <td>{item?.lastName}</td>
                
      <td>{item?.email}</td>
      <td>{item?.contactNo}</td>
      <td>{item?.message}</td>
                </tr>
            )
        })}
     
    </>
    
  </tbody>
</table>
    </div>
  )
}

export default ContactDetails