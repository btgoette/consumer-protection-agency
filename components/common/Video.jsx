import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Player, BigPlayButton } from "video-react";
import "node_modules/video-react/dist/video-react.css"; // import css

export default function Video(video) {
  return (
    <>
      <a className="anchor" id={video.slug}></a>
      <section className={video.container + " video " + video.slug}>
        <Row>
          <Col lg={{ offset: video.column[0].offset, span: video.column[0].span }}>
            <Player playsInline poster={video.poster} src={video.src}>
              <BigPlayButton position="center" />
            </Player>
          </Col>
        </Row>
      </section>
    </>
  );
}
