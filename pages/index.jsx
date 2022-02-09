import Head from 'next/head';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';

import Hero from 'components/layout/Hero'
import Intro from 'components/pages/home/Intro';
import CPAServicesMenu from 'components/pages/home/cpa-services-menu';

export default function Home() {
  return (

    <>

      <div className="home">

        {/* <Jumbotron /> */}

        <Hero />

        <Intro />

        <CPAServicesMenu />

      </div>

    </>

  );
}
