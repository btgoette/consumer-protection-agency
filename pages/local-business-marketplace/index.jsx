import Head from 'next/head';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';

import Hero from 'components/layout/Hero'
import Intro from 'components/pages/local-business-marketplace/Intro';

// import ConsumerVendorAccounts from 'components/pages/local-business-marketplace/ConsumerVendorAccounts';
import BenefitsForConsumer from 'components/pages/local-business-marketplace/BenefitsForConsumer';
import BenefitsForTheSmallBusiness from 'components/pages/local-business-marketplace/BenefitsForTheSmallBusiness';
import ConsumerVendorAccounts from 'components/pages/local-business-marketplace/ConsumerVendorAccounts';
import CPAServicesMenu from 'components/common/CPAServicesMenu';
import Video from 'components/common/Video'

export default function LocalBusinessMarketplace() {
  return (

    <>

      <div className="home">

        {/* <Jumbotron /> */}

        <Hero />

        <Intro />

        <ConsumerVendorAccounts />

        <BenefitsForConsumer />

        <BenefitsForTheSmallBusiness />

        <CPAServicesMenu />

        <Video />

      </div>

    </>

  );
}
