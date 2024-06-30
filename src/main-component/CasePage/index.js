import React, {Fragment} from 'react';
import Header from '../../components/header'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import CardPayments from './CardPayments';


const AboutPage =() => {
    return(
        <Fragment>
            <Header/>

            <section>
                <CardPayments/>
            </section>
            {/* <PageTitle pageTitle={'Our Causes'} pagesub={'Causes'}/>  */}
            {/* <Mission subclass={'section-padding'}/> */}
            {/* <Casesection/> */}
            {/* <Footer/> */}
            <Scrollbar/>
        </Fragment>
    )
};
export default AboutPage;
