import React, {Component} from 'react';
import CategoriFilter from "./filter/CategoriFilter";
import PriceFilter from "./filter/PriceFilter";
import SizeFilter from "./filter/SizeFilter";
import ColorFilter from "./filter/ColorFilter";

class Filter extends Component {
    render() {
        return (
            <div className="shop_sidebar_area">
                <CategoriFilter/>

                <PriceFilter/>

                <ColorFilter/>

                <SizeFilter/>

                <div className="widget recommended">
                    <h6 className="widget-title mb-30">Recommended</h6>

                    <div className="widget-desc">

                        <div className="single-recommended-product d-flex mb-30">
                            <div className="single-recommended-thumb mr-3">
                                <img src="img/product-img/product-10.jpg" alt=""/>
                            </div>
                            <div className="single-recommended-desc">
                                <h6>Men’s T-shirt</h6>
                                <p>$ 39.99</p>
                            </div>
                        </div>

                        <div className="single-recommended-product d-flex mb-30">
                            <div className="single-recommended-thumb mr-3">
                                <img src="img/product-img/product-11.jpg" alt=""/>
                            </div>
                            <div className="single-recommended-desc">
                                <h6>Blue mini top</h6>
                                <p>$ 19.99</p>
                            </div>
                        </div>

                        <div className="single-recommended-product d-flex">
                            <div className="single-recommended-thumb mr-3">
                                <img src="img/product-img/product-12.jpg" alt=""/>
                            </div>
                            <div className="single-recommended-desc">
                                <h6>Women’s T-shirt</h6>
                                <p>$ 39.99</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filter;