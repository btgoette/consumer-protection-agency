import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { Player, BigPlayButton } from "video-react";
import "node_modules/video-react/dist/video-react.css";

export default function Hero(hero) {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow(true);
  }

  let hasPageTitle;
  if (hero.pageTitle !== undefined) {
    hasPageTitle = true;
  } else {
    hasPageTitle = false;
  }

  const renderPageTitle = () => {
    if (hasPageTitle) {
      return <h1>{hero.pageTitle}</h1>;
    }
  };

  let hasText;
  if (hero.text !== undefined) {
    hasText = true;
  } else {
    hasText = false;
  }

  const renderText = () => {
    if (hasText) {
      return (
        <>
          {hero.text.map(({ p }, i) => (
            <p key={i}>{p}</p>
          ))}
        </>
      );
    }
  };

  let hasCTA;
  if (hero.cta !== undefined) {
    hasCTA = true;
  } else {
    hasCTA = false;
  }

  const renderCTA = () => {
    if (hasCTA) {
      return (
        <p>
          <Button href={hero.cta.href}>{hero.cta.ctaLabel}</Button>
        </p>
      );
    }
  };

  let hasVideoCTA;
  if (hero.videoCta !== undefined) {
    hasVideoCTA = true;
  } else {
    hasVideoCTA = false;
  }

  const renderVideoCTA = () => {
    if (hasVideoCTA) {
      return (
        <p>
          <Button onClick={() => handleShow()}>{hero.videoCta.ctaLabel}</Button>
        </p>
      );
    }
  };

  let hasVideo;
  if (hero.video !== undefined) {
    hasVideo = true;
  } else {
    hasVideo = false;
  }

  const renderVideo = () => {
    if (hasVideo) {
      return (
        <>
          <Modal 
          className="modal-video"
            show={show}
            fullscreen={fullscreen}
            onHide={() => setShow(false)}
          >
            <Modal.Header closeButton closeVariant="white">
            </Modal.Header>
            <Modal.Body className="video">
              <Player
                playsInline
                poster={hero.video.poster}
                src={hero.video.src}
              >
                <BigPlayButton position="center" />
              </Player>
            </Modal.Body>
          </Modal>
        </>
      );
    }
  };

  return (
    <>
      <section className={hero.slug + " hero"}>
        <Container>
          <Row>
            <Col
              className="block"
              lg={{
                offset: hero.column.offset,
                span: hero.column.span,
                order: hero.column.order,
              }}
            >
              <div>
                {renderPageTitle()}
                {renderText()}
                {renderCTA()}
                {renderVideoCTA()}
                {renderVideo()}
              </div>
            </Col>
          </Row>
        </Container>
        <div className={"image-block " + hero.img.order}>
          <span>
            <img
              className="image"
              src={hero.img.src}
              alt={hero.img.alt}
              height="960"
              width="960"
            />
          </span>
        </div>
      </section>
    </>
  );
}
