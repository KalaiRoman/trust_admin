import React,{useState,useEffect} from 'react'
import {Link}  from 'react-router-dom'
import VideoModal from '../ModalVideo'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'reactstrap';
import { registerService } from '../../services/auth_services/auth_services';
const Hero2 = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [listusers,setListUsers]=useState([]);
    const [user,setUser]=useState({
        userName:"",
        email:"",
        mobileNo:"",
        password:"",
    });
    const [permissions,setPermissions]=useState([]);
    const {userName,email,mobileNo,password}=user;
    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }


    const handleGenratePassword=()=>{
        const characters = 'A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q7R8S9T12UV3W4X5Y6ZTRUST';
        let password = '';
          const randomIndex = Math.floor(Math.random() * 40);
          password += characters.slice(randomIndex);
          setUser((pre)=>(
            {
                ...pre,
                password:password
              }
          ))

    }

    const fromDatas=[
        {
            id:1,
            label:"UserName",
            value:userName,
            name:"userName",
        },
        {
            id:2,
            label:"Email",
            value:email,
            name:"email",
        },
        {
            id:3,
            label:"MobileNo",
            value:mobileNo,
            name:"mobileNo",
        },
        {
            id:4,
            label:"Password",
            value:password,
            name:"password",
        }
    ]


    const permissionsData=["dashboard","usermanagement","subscribers","allusers","payments","reviewlist","contact"]

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const data={
                userName:userName,
                email:email,
                mobileNo:mobileNo,
                password:password,
                permissions:permissions
            }
    const response=await registerService(data)

    if(response)
    {
        
    }
            
        } catch (error) {
            
        }
    }
    const permissionData=(params)=>{
        if(permissions?.includes(params))
        {
            const filter=permissions?.filter((item)=>item!==params);
            setPermissions(filter)
        }
        else{
            setPermissions([...permissions,params]);
        }
    }
    return(
        <section className="hero hero-style-1s container mt-4">
            <div className='text-end'>
<button className='theme-btn' onClick={handleShow}>+ Add Sub User</button>
            </div>
            <div>
            {Array(10).fill("kla")?.map((item,index)=>{
            return(
                <div className='card p-3' key={index}>
                   <div className='d-flex justify-content-between'>
                    <div className='d-flex gap-3 align-items-center'>
                        akali
                    <div>
                        </div>
<div className='mt-2'>
  <div>
  {item?.userName}
  </div>
</div>
                    </div>
                    <div className='d-flex gap-3'>
                        <button className='theme-btn'>Edit</button>
                        <button className='theme-btn bg-red'>Delete</button>
                    </div>
                   </div>
                </div>
            )
        })}
            </div>
            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className='rows'>
            {fromDatas?.map((item,index)=>{
                return(
                    <div key={index}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{item?.label}</Form.Label>
        <Form.Control type="email" placeholder={`Enter ${item?.label}`}
        value={item?.value}
        onChange={handleChange}
        name={item?.name}
        />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
                    </div>
                )
            })}

            <div className='mt-2 mb-4'>
                <button onClick={handleGenratePassword}
              className='theme-btn'
                >Password Generate</button>
            </div>

            <div>
                <div>
                    <h3>Permission User</h3>
                </div>
               <div className='row cursor'>
               {permissionsData?.map((item,index)=>{
                    return(
                        <div onClick={()=>permissionData(item)} key={index} className='col-lg-3 mb-3 mt-2 cursor'>
                            {permissions?.includes(item)?<>
                            <input type="checkbox"
                            value={item}
                            checked={true}
                            />
                            </>:<>
                            <input type="checkbox"
                            value={item}
                            checked={false}
                            />
                            </>}
                            {item.charAt(0).toUpperCase()+item.slice(1)}
                        </div>
                    )
                })}
               </div>
            </div>

         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className='theme-btn' onClick={handleSubmit}>Create</Button>
        </Modal.Footer>
      </Modal>
    </section>
    )
}

export default Hero2;