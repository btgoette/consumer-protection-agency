import Head from 'next/head';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';

import Hero from 'components/layout/Hero'
import Intro from 'components/pages/financial-education/Intro';
import CPAServicesMenu from 'components/common/CPAServicesMenu';
import Video from 'components/common/Video'

export default function FinancialEducation() {
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
