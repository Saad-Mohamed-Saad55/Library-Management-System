import React from 'react'
import './ImageSlider.css'
import { Carousel } from 'react-bootstrap'

function ImageSlider() {
    return (
        <div className='slider12'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="imgs d-block w-100"
                        src="https://cdn.theconversation.com/files/185023/width1356x668/file-20170907-25933-1y7jcj9.jpg"
                        alt="First slide"
                    />
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="imgs d-block w-100"
                        src="https://hls.harvard.edu/wp-content/uploads/2022/08/09_20_13_Campus_Shots_BKraft095-1500x1000.jpg"
                        alt="Second slide"
                    />
                    {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="imgs d-block w-100"
                        src="https://media.gqindia.com/wp-content/uploads/2016/04/Trinity-College-Library.jpg"
                        alt="Third slide"
                    />
                    {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="imgs d-block w-100"
                        src="https://www.ee.edu.au/wp-content/uploads/2018/08/39921164_320788488477715_6295924166147178496_n-1024x768.jpg"
                        alt="Fourth slide"
                    />
                    {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ImageSlider
