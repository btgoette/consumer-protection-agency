import Head from 'next/head';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';

import Jumbotron from 'components/pages/home/Jumbotron';
import Intro from 'components/pages/home/Intro';
import Run from 'components/pages/home/Run';
import Bike from 'components/pages/home/Bike';
import Swim from 'components/pages/home/Swim';
import CoachingServices from 'components/pages/home/CoachingServices';
import TeamPhotos from 'components/pages/home/TeamPhotos';

export default function Home() {
  return (

    <>

      <Jumbotron />
      
      <Intro />

      <Run />

      <Bike />

      <Swim />

      <CoachingServices />

      <TeamPhotos />

    </>

  );
}
