// React Components
import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'

const content = {
    "mobile": [
        {
            "image": {
                "src": "/images/pages/home/jumbotron/srz-swim-550x550.jpg",
                "alt": "Swim",
                "link": "/"
            }
        },
        {
            "image": {
                "src": "/images/pages/home/jumbotron/srz-bike-550x550.jpg",
                "alt": "Bike",
                "link": "/"
            }
        },
        {
            "image": {
                "src": "/images/pages/home/jumbotron/srz-run-550x550.jpg",
                "alt": "Run",
                "link": "/"
            }
        }
    ],
    "desktop": [
        {
            "image": {
                "src": "/images/pages/home/jumbotron/srz-swim-1600x672.jpg",
                "alt": "Swim",
                "link": "/"
            }
        },
        {
            "image": {
                "src": "/images/pages/home/jumbotron/srz-bike-1600x672.jpg",
                "alt": "Bike",
                "link": "/"
            }
        },
        {
            "image": {
                "src": "/images/pages/home/jumbotron/srz-run-1600x672.jpg",
                "alt": "Run",
                "link": "/"
            }
        }
    ]
}

export default function Jumbotron() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            {/* Mobile Jumbotron */}
            <div className="jumbotron d-flex d-sm-none bg-gray">
                <Carousel prevLabel={null} nextLabel={null} fade activeIndex={index} onSelect={handleSelect}>
                    {content.mobile.map(({ image }, i) => (
                        <Carousel.Item key={i} interval={3000}>
                            <a href={image.link}>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-100 opacity-75"
                                />
                            </a>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>

            {/* Desktop Jumbotron */}
            <div className="jumbotron d-none d-sm-flex bg-gray">
                <Carousel prevLabel={null} nextLabel={null} fade activeIndex={index} onSelect={handleSelect}>
                    {content.desktop.map(({ image }, i) => (
                        <Carousel.Item key={i} interval={3000}>
                            <a href={image.link}>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-100 opacity-75"
                                />
                            </a>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </>

    )

}