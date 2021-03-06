import {
  Modal,
  Accordion,
  Container,
  Row,
  Col,
  Figure,
  Button,
  Card,
  Nav,
} from "react-bootstrap";
import { useState } from "react";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Player, BigPlayButton } from "video-react";
import "node_modules/video-react/dist/video-react.css";

export default function Section(block) {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow(true);
  }


  let oneColumn;
  if (block.column.length === 1) {
    oneColumn = true;
  } else {
    oneColumn = false;
  }

  const renderOneColumn = () => {
    if (oneColumn) {
      return (
        <>
          <Col
            className={block.column[0].background + " block"}
            lg={{
              offset: block.column[0].offset,
              span: block.column[0].span,
              order: block.column[0].order,
            }}
          >
            {renderPageTitle()}
            {renderTitle()}
            {renderAccordion()}
            {renderImage()}
            {renderText()}
            {renderLinkList()}
            {renderList()}
            {renderSubtitleList()}
            {renderSubtitleText()}
            {renderCTA()}
            {renderVideoCTA()}
            {renderVideo()}
            {renderPricingPlan()}
            {renderCoveragePricingPlan()}
            {renderDisclaimer()}
            {renderIframe()}
          </Col>
        </>
      );
    }
  };

  let TwoColumn;
  if (block.column.length === 2) {
    TwoColumn = true;
  } else {
    TwoColumn = false;
  }

  const renderTwoColumn = () => {
    if (TwoColumn) {
      return (
        <>
          <Col
            className={block.column[0].background}
            lg={{
              offset: block.column[0].offset,
              span: block.column[0].span,
              order: block.column[0].order,
            }}
          >
              {renderImage()}
          </Col>
          <Col
            className={block.column[1].background + " block"}
            lg={{
              offset: block.column[1].offset,
              span: block.column[1].span,
              order: block.column[1].order,
            }}
          >
            <div>
              {renderPageTitle()}
              {renderTitle()}
              {renderText()}
              {renderAccordion()}
              {renderLinkList()}
              {renderList()}
              {renderSubtitleList()}
              {renderSubtitleText()}
              {renderCTA()}
              {renderVideoCTA()}
              {renderVideo()}
              {renderDisclaimer()}
            </div>
          </Col>
        </>
      );
    }
  };

  let hasSectionTitle;
  if (block.sectionTitle !== undefined) {
    hasSectionTitle = true;
  } else {
    hasSectionTitle = false;
  }

  const renderSectionTitle = () => {
    if (hasSectionTitle) {
      return (
        <Container fluid className="section-title">
          <Row className="section-title-row">
            <Col>
              <h2>{block.sectionTitle}</h2>
              {renderNav()}
            </Col>
          </Row>
        </Container>
      );
    }
  };

  let hasPageTitle;
  if (block.pageTitle !== undefined) {
    hasPageTitle = true;
  } else {
    hasPageTitle = false;
  }

  const renderPageTitle = () => {
    if (hasPageTitle) {
      return <h1>{block.pageTitle}</h1>;
    }
  };

  let hasTitle;
  if (block.title !== undefined) {
    hasTitle = true;
  } else {
    hasTitle = false;
  }

  const renderTitle = () => {
    if (hasTitle) {
      return <h2>{block.title}</h2>;
    }
  };

  let hasText;
  if (block.text !== undefined) {
    hasText = true;
  } else {
    hasText = false;
  }

  const renderText = () => {
    if (hasText) {
      return (
        <>
          {block.text.map(({ p }, k) => (
            <p key={k}>{p}</p>
          ))}
        </>
      );
    }
  };

  let hasAccordion;
  if (block.accordion !== undefined) {
    hasAccordion = true;
  } else {
    hasAccordion = false;
  }

  const renderAccordion = () => {
    if (hasAccordion) {
      return (
        <Accordion>
          {block.accordion.map(({ title, text }, i) => (
            <Accordion.Item eventKey={i} key={i}>
              <Accordion.Header>{title}</Accordion.Header>
              <Accordion.Body>
                {text.map(({ p }, j) => (
                  <p key={j}>{p}</p>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      );
    }
  };

  let hasSubtitleText;
  if (block.subtitleText !== undefined) {
    hasSubtitleText = true;
  } else {
    hasSubtitleText = false;
  }

  const renderSubtitleText = (text) => {
    if (hasSubtitleText) {
      return (
        <>
          {block.subtitleText.map(({ title, text }, j) => (
            <div key={j}>
              <h3>{title}</h3>
              {text.map(({ p }, k) => (
                <p key={k}>{p}</p>
              ))}
            </div>
          ))}
        </>
      );
    }
  };

  let hasSubtitleList;
  if (block.subtitleList !== undefined) {
    hasSubtitleList = true;
  } else {
    hasSubtitleList = false;
  }

  const renderSubtitleList = (list) => {
    if (hasSubtitleList) {
      return (
        <>
          {block.subtitleList.map(({ title, list }, j) => (
            <div key={j}>
              <h3>{title}</h3>
              <ul>
                {list.map(({ li }, k) => (
                  <li key={k}>{li}</li>
                ))}
              </ul>
            </div>
          ))}
        </>
      );
    }
  };

  let hasList;
  if (block.list !== undefined) {
    hasList = true;
  } else {
    hasList = false;
  }

  const renderList = () => {
    if (hasList) {
      return (
        <ul>
          {block.list.map(({ li }, j) => (
            <li key={j}>{li}</li>
          ))}
        </ul>
      );
    }
  };

  let hasLinkList;
  if (block.linkList !== undefined) {
    hasLinkList = true;
  } else {
    hasLinkList = false;
  }

  const renderLinkList = () => {
    if (hasLinkList) {
      return (
        <ul>
          {block.linkList.map(({ href, li }, j) => (
            <li key={j}>
              <Link href={href}>{li}</Link>
            </li>
          ))}
        </ul>
      );
    }
  };

  let hasImage;
  if (block.img !== undefined) {
    hasImage = true;
  } else {
    hasImage = false;
  }

  const renderImage = () => {
    if (hasImage) {
      return (
        <Figure className={block.img.class}>
          <span>
            <LazyLoadImage src={block.img.src} alt={block.img.alt} />
          </span>
        </Figure>
      );
    }
  };

  let hasDisclaimer;
  if (block.disclaimer !== undefined) {
    hasDisclaimer = true;
  } else {
    hasDisclaimer = false;
  }

  const renderDisclaimer = () => {
    if (hasDisclaimer) {
      return <p className="text-small">{block.disclaimer}</p>;
    }
  };

  let hasCTA;
  if (block.cta !== undefined) {
    hasCTA = true;
  } else {
    hasCTA = false;
  }

  const renderCTA = () => {
    if (hasCTA) {
      return (
        <p className="text-center">
          <Button href={block.cta.href}>{block.cta.ctaLabel}</Button>
        </p>
      );
    }
  };

  let hasNav;
  if (block.nav !== undefined) {
    hasNav = true;
  } else {
    hasNav = false;
  }

  const renderNav = () => {
    if (hasNav) {
      return (
        <Nav className="justify-content-center">
          {block.nav.map(({ href, title }, i) => (
            <Nav.Item key={i}>
              <Nav.Link href={href}>{title}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      );
    }
  };

  let hasPricingPlan;
  if (block.pricingPlan !== undefined) {
    hasPricingPlan = true;
  } else {
    hasPricingPlan = false;
  }

  const renderPricingPlan = () => {
    if (hasPricingPlan) {
      return (
        <Row>
          <Col lg={4}>
            <h3>Pick 1</h3>
            <p>
              Auto: $49.99
              <br />
              Electronics: $29.99
              <br />
              Home: $59.99
            </p>
          </Col>
          <Col lg={4}>
            <h3>Pick 2</h3>
            <p>
              Home & Electronics: $89.98
              <br />
              Auto & Electronics: $79.98
              <br />
              Home & Auto: $109.98
            </p>
          </Col>
          <Col lg={4}>
            <h3>Pick 3</h3>
            <p>
              Home + Electronics + Auto: $129.99
              <br />
              ($9.98 Savings)
            </p>
            <p className="divider"></p>
            <p className="text-small">
              refer 5 pick 3 customers and your pick 3 is free!
            </p>
          </Col>
        </Row>
      );
    }
  };

  let hasCoveragePricingPlan;
  if (block.coveragePricingPlan !== undefined) {
    hasCoveragePricingPlan = true;
  } else {
    hasCoveragePricingPlan = false;
  }

  const renderCoveragePricingPlan = () => {
    if (hasCoveragePricingPlan) {
      return (
        <Row>
          <Col lg={6}>
            <h3>Single Plan</h3>
            <p>
              Vehicle 1: $9.99
              <br />
              Vehicle 3: $24.99
              <br />
              Home & Property Only: $29.99
            </p>
          </Col>
          <Col lg={6}>
            <h3>Bundle</h3>
            <p>
              Vehicle, Home & Property: $39.99
            </p>
          </Col>
        </Row>
      );
    }
  };

  let hasVideoCTA;
  if (block.videoCta !== undefined) {
    hasVideoCTA = true;
  } else {
    hasVideoCTA = false;
  }

  const renderVideoCTA = () => {
    if (hasVideoCTA) {
      return (
        <p>
          <Button onClick={() => handleShow()}>
            {block.videoCta.ctaLabel}
          </Button>
        </p>
      );
    }
  };

  let hasVideo;
  if (block.video !== undefined) {
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
            <Modal.Header closeButton closeVariant="white"></Modal.Header>
            <Modal.Body className="video">
              <Player
                playsInline
                poster={block.video.poster}
                src={block.video.src}
              >
                <BigPlayButton position="center" />
              </Player>
            </Modal.Body>
          </Modal>
        </>
      );
    }
  };

  let hasIframe;
  if (block.iframe !== undefined) {
    hasIframe = true;
  } else {
    hasIframe = false;
  }

  const renderIframe = () => {
    if (hasIframe) {
      return (
        <iframe src={block.iframe.url} title={block.iframe.title}></iframe>
      );
    }
  };

  return (
    <>
      <a className="anchor" id={block.slug}></a>
      {renderSectionTitle()}
      <div className={block.slug + " " + block.background}>
        <Container>
          <Row className={block.row}>
            {renderOneColumn()}
            {renderTwoColumn()}
          </Row>
        </Container>
      </div>
    </>
  );
}
