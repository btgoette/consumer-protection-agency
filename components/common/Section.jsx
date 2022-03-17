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
        <>
          <Col
            xl={{
              offset: block.column[0].offset,
              span: block.column[0].span,
              order: block.column[0].order,
            }}
          >
            {renderTitle()}
            {renderImage()}
            {renderText()}
            {renderList()}
            {renderSubtitleList()}
            {renderSubtitleText()}
            {renderImgList()}
            {renderImgListBlock()}
            {renderCTA()}
            {renderDisclaimer()}
            {renderVideo()}
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
            {renderText()}
            {renderList()}
            {renderSubtitleList()}
            {renderSubtitleText()}
            {renderImgList()}
            {renderImgListBlock()}
            {renderCTA()}
            {renderDisclaimer()}
            {renderVideo()}
          </Col>
        </>
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

  let hasImgListBlock;
  if (block.imgListBlock !== undefined) {
    hasImgListBlock = true;
  } else {
    hasImgListBlock = false;
  }

  const renderImgListBlock = () => {
    if (hasImgListBlock) {
      return (
        <Row className="pt-4">
          {block.imgListBlock.map(({ img, title, p }, j) => (
            <Col xl={3} lg={4} md={2} key={j}>
              <Figure className="list-image text-center w-100">
                <LazyLoadImage src={img.src} alt={img.alt} />
              </Figure>
              <p className="imgList-title">{title}</p>
              <p className="text-justify">{p}</p>
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
          <Row>
            {renderOneColumn()}
            {renderTwoColumn()}
          </Row>
        </Container>
      </section>
    </>
  );
}
