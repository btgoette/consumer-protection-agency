import {
  Accordion,
  Container,
  Row,
  Col,
  Figure,
  Button,
  Card,
  Nav,
} from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Player, BigPlayButton } from "video-react";
import "node_modules/video-react/dist/video-react.css";

export default function Section(block) {
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
            {renderTitle()}
            {renderAccordion()}
            {renderImage()}
            {renderText()}
            {renderList()}
            {renderSubtitleList()}
            {renderSubtitleText()}
            {renderImgList()}
            {renderCard()}
            {renderCTA()}
            {renderPricingPlan()}
            {renderDisclaimer()}
            {renderVideo()}
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
            <div className="d-block d-lg-none">{renderImage()}</div>
            <div className="d-none d-lg-block block hidden">
              {renderTitle()}
              {renderText()}
              {renderAccordion()}
              {renderList()}
              {renderSubtitleList()}
              {renderSubtitleText()}
              {renderImgList()}
              {renderCard()}
              {renderCTA()}
              {renderDisclaimer()}
              {renderVideo()}
            </div>
          </Col>
          <Col
            className={
              block.column[1].background +
              " block"
            }
            lg={{
              offset: block.column[1].offset,
              span: block.column[1].span,
              order: block.column[1].order,
            }}
          >
            <div className="aos-init aos-animate" 
            data-aos="fade-in"
            data-aos-delay="50">
              {renderTitle()}
              {renderText()}
              {renderAccordion()}
              {renderList()}
              {renderSubtitleList()}
              {renderSubtitleText()}
              {renderImgList()}
              {renderCard()}
              {renderCTA()}
              {renderDisclaimer()}
              {renderVideo()}
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

  let hasImgList;
  if (block.imgList !== undefined) {
    hasImgList = true;
  } else {
    hasImgList = false;
  }

  const renderImgList = () => {
    if (hasImgList) {
      return (
        <>
          {block.imgList.map(({ img, title, p }, j) => (
            <div key={j} className="d-block d-lg-flex align-items-center">
              <Figure className="list-image text-center">
                <LazyLoadImage src={img.src} alt={img.alt} />
              </Figure>
              <div>
                <p className="imgList-title">{title}</p>
                <p className="text-justify">{p}</p>
              </div>
            </div>
          ))}
        </>
      );
    }
  };

  let hasCard;
  if (block.card !== undefined) {
    hasCard = true;
  } else {
    hasCard = false;
  }

  const renderCard = () => {
    if (hasCard) {
      return (
        <Row className="p-0">
          {block.card.map(({ img, title, p }, j) => (
            <Col xl={3} lg={4} sm={6} key={j}>
              <Card>
                <Card.Img variant="top" src={img.src} className="icon" />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{p}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
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
        <Figure className="w-100 text-center">
          <LazyLoadImage src={block.img.src} alt={block.img.alt} />
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

  let hasVideo;
  if (block.poster !== undefined) {
    hasVideo = true;
  } else {
    hasVideo = false;
  }

  const renderVideo = () => {
    if (hasVideo) {
      return (
        <Player playsInline poster={block.poster} src={block.src}>
          <BigPlayButton position="center" />
        </Player>
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
