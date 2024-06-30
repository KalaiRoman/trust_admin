import React, { useEffect, useState } from 'react'
import { getAllSubscribe } from '../../services/subscribe_service/subscribe_services';

function AllSubscriers() {
    const [contacts,setContacts]=useState([]);


    useEffect(()=>{

        const responseData=async()=>{
try {
const {status,data,message}=await getAllSubscribe();

if(status)
    {
        setContacts(data);
    }
} catch (error) {
    
}
        }

        responseData();

    },[])

    console.log(contacts,'contacts')
  return (
    <div>
        <div className='container p-2'>
      

      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Email</th>
      
      
          </tr>
        </thead>
        <tbody >
          <>
              {contacts?.map((item)=>{
                  return(
                      <tr>
                            <td>{item?._id}</td>
                      
            <td>{item?.Email}</td>
                      </tr>
                  )
              })}
           
          </>
          
        </tbody>
      </table>
          </div>
    </div>
  )
}

export default AllSubscriers