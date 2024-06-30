import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Homepage from '../HomePage'
import Homepage2 from '../HomePage2'
import Homepage3 from '../HomePage3'
import AboutPage from '../AboutPage'
import CasePage from '../CasePage'
import CaseSinglePage from '../CaseSinglePage'
import EventPage from '../EventPage'
import EventPageSingle from '../EventPageSingle'
import DonatePage from '../DonatePage'
import VolunteerPage from '../volunteerPage'
import BlogPage from '../BlogPage'
import BlogPageLeft from '../BlogPageLeft'
import BlogPageFullwidth from '../BlogPageFullwidth'
import BlogDetails from '../BlogDetails'
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide'
import BlogDetailsFull from '../BlogDetailsFull'
import ErrorPage from '../ErrorPage'
import ContactPage from '../ContactPage'
import LoginPage from '../LoginPage'
import ForgotPassword from '../ForgotPassword'
import Changepassword from '../changepassword/Changepassword';
import Profile from '../../components/profile/Profile';
import Invoice from '../../components/profile/compoents/invoice/Invoice';
import ProtectedRouter from './ProtectedRouter';


const AllRoute = () => {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
        <Route exact path='/' element={<LoginPage />} />
        <Route path='forgot-password' element={<ForgotPassword />} />
        <Route path='change-password' element={<Changepassword />} />
          <Route element={<ProtectedRouter/>}>
          <Route path='dashboard' element={<Homepage />} />
          <Route path='home2' element={<Homepage2 />} />
          <Route path='subscribers' element={<Homepage3 />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='payments' element={<CasePage />} />
          <Route path='case-single' element={<CaseSinglePage />} />
          <Route path='contact' element={<EventPage />} />
          <Route path='event-details' element={<EventPageSingle />} />
          <Route path='donate' element={<DonatePage />} />
          <Route path='volunteer' element={<VolunteerPage />} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='blog-left' element={<BlogPageLeft />} />
          <Route path='blog-fullwidth' element={<BlogPageFullwidth />} />
          <Route path='blog-details' element={<BlogDetails />} />
          <Route path='blog-details-left' element={<BlogDetailsLeftSiide />} />
          <Route path='blog-details-fullwidth' element={<BlogDetailsFull />} />
          <Route path='404' element={<ErrorPage />} />
          <Route path='contact' element={<ContactPage />} />
          {/* <Route path='login' element={<LoginPage />} /> */}
          <Route path='profile' element={<Profile />} />
          <Route path='invoice/:id' element={< Invoice/>} />
          <Route path='*' element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default AllRoute;
