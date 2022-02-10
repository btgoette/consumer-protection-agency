import Hero from 'components/layout/Hero'
import Intro from 'components/pages/home/Intro';
import CPAServicesMenu from 'components/common/CPAServicesMenu';
import Video from 'components/common/Video'

export default function Home() {
  return (

    <>

      <div className="home">

        <Hero />

        <Intro />

        <CPAServicesMenu />

        <Video />

      </div>

    </>

  );
}
