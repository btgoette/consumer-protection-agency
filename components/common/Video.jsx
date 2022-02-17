import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Player, BigPlayButton } from 'video-react'
import "node_modules/video-react/dist/video-react.css"; // import css


export default function Video(video) {

    return (
        <>

            <Container fluid className="video">
                <Container id={video.slug} className={video.slug}>
                    <Row>
                        <Col>
                            <Player
                                playsInline
                                poster={video.poster}
                                src={video.src}>
                                <BigPlayButton position="center" />
                            </Player>
                        </Col>
                    </Row>
                </Container>
            </Container>

        </>
    )
}