import React, {Component} from 'react';
import Carousel from 'nuka-carousel';

const  slideImg = [
    "url(img/bg-img/bg-1.jpg)",
    "url(img/bg-img/bg-4.jpg)",
    "url(img/bg-img/bg-2.jpg)"
]
class Slider extends Component {
    constructor(props) {
        super(props);
        this.state={
            active: 1
        }
    }


    componentDidMount() {
        this.interval = setInterval(this.handleNextSlide, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    handleNextSlide = () => {
        const {active}=this.state;
        if(active !==3){
            this.setState({
                active: active + 1
            })
        }else{
            this.setState({
                active: 1
            })
        }
    }

    render() {
        return (
            <div className="welcome_slides">
                <Carousel
                    autoplay={true}
                    withoutControls={true}
                    autoplayInterval={2000}
                    wrapAround={true}

                >
                    {slideImg.map(slide => (
                        <div className="single_slide height-800 bg-img background-overlay"
                             style={{backgroundImage: slide}}>
                            <div className="container h-100">
                                <div className="row h-100 align-items-center">
                                    <div className="col-12">
                                        <div className="welcome_slide_text">
                                            <h6 data-animation="bounceInDown" data-delay="0" data-duration="500ms">*
                                                Only today we offer free shipping</h6>
                                            <h2 data-animation="fadeInUp" data-delay="500ms"
                                                data-duration="500ms">Fashion Trends</h2>
                                            <a href="#" className="btn karl-btn" data-animation="fadeInUp"
                                               data-delay="1s" data-duration="500ms">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>

            </div>
        );
    }
}

export default Slider;