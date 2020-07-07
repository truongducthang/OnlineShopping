import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
//
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
//
import Product0101 from '../../../assets/img/slideshow/01Product01.png';
import Product0102 from '../../../assets/img/slideshow/01Product02.png';
import Product0103 from '../../../assets/img/slideshow/01Product03.png';
import Product0104 from '../../../assets/img/slideshow/01Product04.png';
import Product0201 from '../../../assets/img/slideshow/02Product01.png';
import Product0202 from '../../../assets/img/slideshow/02Product02.png';
import Product0203 from '../../../assets/img/slideshow/02Product03.png';
import Product0204 from '../../../assets/img/slideshow/02Product04.png';
import Product0301 from '../../../assets/img/slideshow/03Product01.png';
import Product0302 from '../../../assets/img/slideshow/03Product02.png';
import Product0303 from '../../../assets/img/slideshow/03Product03.png';
//
function MainSlide(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Router>
      <div className="main-slideshow">
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={props.deviceType !== 'mobile' ? true : false}
          autoPlaySpeed={2555}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          deviceType={props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {/* item1  */}
          <div className="main-slideshow__item main-slideshow__item-1">
            <div className="main-slideshow__textbox">
              <p className="product">Hoddies</p>
              <p className="seasons">Cool / Warm /cosy</p>
              <Link className="btn" to="/">
                Check out new collection!
              </Link>
            </div>
            <div className="layer-wrap layer-1">
              <img className="img-fluid" src={Product0101} alt="Product0101" />
            </div>
            <div className="layer-wrap layer-2">
              <img className="img-fluid" src={Product0102} alt="Product0102" />
            </div>
            <div className="layer-wrap layer-3">
              <img className="img-fluid" src={Product0103} alt="Product0103" />
            </div>
            <div className="layer-wrap layer-4">
              <img className="img-fluid" src={Product0104} alt="Product0104" />
            </div>
          </div>
          {/* item2  */}
          <div className="main-slideshow__item main-slideshow__item-2">
            <div className="main-slideshow__textbox">
              <p className="product">T-SHIRTS </p>
              <p className="seasons">summer collection</p>
              <Link className="btn" to="/">
                find your perfect tee!
              </Link>
            </div>
            <div className="layer-wrap layer-1">
              <img className="img-fluid" src={Product0201} alt="Product0201" />
            </div>
            <div className="layer-wrap layer-2">
              <img className="img-fluid" src={Product0202} alt="Product0202" />
            </div>
            <div className="layer-wrap layer-3">
              <img className="img-fluid" src={Product0203} alt="Product0203" />
            </div>
            <div className="layer-wrap layer-4">
              <img className="img-fluid" src={Product0204} alt="Product0204" />
            </div>
          </div>
          {/* item3  */}
          <div className="main-slideshow__item main-slideshow__item-3">
            <div className="main-slideshow__textbox">
              <p className="product">SNEAKERS </p>
              <p className="seasons">BOMBASTIC COLORS </p>
              <Link className="btn" to="/">
              HURRY UP & GRAB YOUR PAIR! 
              </Link>
            </div>
            <div className="layer-wrap layer-1">
              <img className="img-fluid" src={Product0301} alt="Product0301" />
            </div>
            <div className="layer-wrap layer-2">
              <img className="img-fluid" src={Product0302} alt="Product0302" />
            </div>
            <div className="layer-wrap layer-3">
              <img className="img-fluid" src={Product0303} alt="Product0303" />
            </div>
          </div>
        </Carousel>
      </div>
    </Router>
  );
}

export default MainSlide;
