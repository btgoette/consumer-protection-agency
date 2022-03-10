import { Container, Row, Col, Figure, Button } from "react-bootstrap";
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
        <Row className="block align-items-center">
          <Col
            xl={{
              offset: block.column[0].offset,
              span: block.column[0].span,
              order: block.column[0].order,
            }}
          >
            {renderTitle()}
            {renderImage()}
            {renderSubtitle()}
            {renderList()}
            {renderImgList()}
            {renderCTA()}
            {renderVideo()}
          </Col>
        </Row>
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
        <Row className="block align-items-center">
          <Col
            md={{
              offset: block.column[0].offset,
              span: block.column[0].span,
              order: block.column[0].order,
            }}
          >
            {renderImage()}
          </Col>
          <Col
            md={{
              offset: block.column[1].offset,
              span: block.column[1].span,
              order: block.column[1].order,
            }}
          >
            {renderTitle()}
            {renderSubtitle()}
            {renderList()}
            {renderImgList()}
          </Col>
        </Row>
      );
    }
  };

  let MultiColumn;
  if (block.column.length > 2) {
    MultiColumn = true;
  } else {
    MultiColumn = false;
  }

  const renderMultiColumn = () => {
    if (MultiColumn) {
      return (
        <Row className="block align-items-top">
          {block.column.map(
            ({ offset, span, order, title, subtitle, img }, k) => (
              <Col
                className="block"
                key={k}
                md={{
                  offset: offset,
                  span: span,
                  order: order,
                }}
              >
                <Figure className="p-1">
                  <LazyLoadImage src={img.src} alt={img.alt} />
                  <Figure.Caption>{img.caption}</Figure.Caption>
                </Figure>
                <h3 className="text-center">{title}</h3>
                {subtitle.map(({ p }, j) => (
                  <p key={j}>{p}</p>
                ))}
              </Col>
            )
          )}
        </Row>
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

  let hasSubtitle;
  if (block.subtitle !== undefined) {
    hasSubtitle = true;
  } else {
    hasSubtitle = false;
  }

  const renderSubtitle = () => {
    if (hasSubtitle) {
      return (
        <>
          {block.subtitle.map(({ p }, j) => (
            <p key={j}>{p}</p>
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
        <div className="pt-4">
          {block.imgList.map(({ img, h3, p }, j) => (
            <div className="d-md-flex text-center text-md-start align-items-center" key={j}>
              <Figure className="list-image">
                <LazyLoadImage src={img.src} alt={img.alt} />
              </Figure>
              <div>
                <h3>{h3}</h3>
                <p>{p}</p>
              </div>
            </div>
          ))}
        </div>
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

  return (
    <>
      <a className="anchor" id={block.slug}></a>

      <section className={block.slug}>
        <Container>
          {renderOneColumn()}
          {renderTwoColumn()}
          {renderMultiColumn()}
        </Container>
      </section>
    </>
  );
}
