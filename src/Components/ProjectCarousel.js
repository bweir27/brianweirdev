import React, { Component } from 'react';
import Carousel from "react-bootstrap/Carousel";


class ProjectCarousel extends Component {
    render() {
        return (
            <section>
                <div className="row">
                    <Carousel className={Carousel}>
                        {/*Angular Projects*/}
                        <Carousel.Item className={Carousel.Item}>
                            <img className="d-block w-100"
                                 src="holder.js/800x400?text=First slide&bg=373940"
                                 alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Angular</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        {/* React Projects */}
                        <Carousel.Item className="carousel-item">
                            <img className="d-block w-100"
                                 src="holder.js/800x400?text=Second slide&bg=282c34"
                                 alt="Second slide"
                            />
                            <Carousel.Caption className="carousel-caption">
                                React Projects
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>
        );
    }
}

export default ProjectCarousel
