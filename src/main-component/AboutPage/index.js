import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import VedioCta from '../../components/vediocta'
import Mission from '../../components/mission'
import About from '../../components/about'
import CaseSlide from '../../components/case'
import CounterSection from '../../components/counter'
import TeamSection from '../../components/team'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Allusers from './Allusers';


const CasePage =() => {
    return(
        <Fragment>
            <Header/>
            <Allusers/>
            {/* <PageTitle pageTitle={'About Us'} pagesub={'About'}/>  */}
            {/* <VedioCta/>
            <Mission subclass={'section-padding'}/>
            <About/>
            <CaseSlide/>
            <CounterSection/>
            <TeamSection/> */}
            {/* <Footer/> */}
            <Scrollbar/>
        </Fragment>
    )
};
export default CasePage;
