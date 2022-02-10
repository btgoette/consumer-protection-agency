import Head from 'next/head';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';

import Hero from 'components/layout/Hero'
import Intro from 'components/pages/accounting-and-tax-services/Intro';
import CPAServicesMenu from 'components/common/CPAServicesMenu';
import Video from 'components/common/Video'

export default function AccoutingAndTaxServices() {
  return (

    <>

      <div className="home">

        {/* <Jumbotron /> */}

        <Hero />

        <Intro />

        <CPAServicesMenu />

        <Video />

      </div>

    </>

  );
}
