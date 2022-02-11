import Head from 'next/head';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';

import Hero from 'components/layout/Hero'
import Intro from 'components/pages/credit-restoration/Intro';
import FICOScore from 'components/pages/credit-restoration/FICOScore';
import WhyIsThisImportant from 'components/pages/credit-restoration/WhyIsThisImportant';
import BenefitsForConsumers from 'components/pages/credit-restoration/BenefitsForConsumer';
import CPAServicesMenu from 'components/common/CPAServicesMenu';
import Video from 'components/common/Video'

export default function CreditRestoration() {
  return (

    <>

      <div className="credit-restoration">

        {/* <Jumbotron /> */}

        <Hero />

        <Intro />

        <FICOScore />

        <WhyIsThisImportant />

        <BenefitsForConsumers />

        <CPAServicesMenu />

        <Video />

      </div>

    </>

  );
}
