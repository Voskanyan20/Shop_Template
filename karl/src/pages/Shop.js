import React, {Component} from 'react';
import Wrapper from "../components/Wrapper";
import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";
import Filter from "../components/Filter";
class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // handleBuy:false,
        }
    }

    // buying = ()=>{
    //     const {handleBuy} = this.state
    //     this.setState({handleBuy: !handleBuy})
    // }
    render() {
        return (
            <Wrapper>
                <div className="modal fade" id="quickview" tabIndex="-1" role="dialog" aria-labelledby="quickview"
                     aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <button type="button" className="close btn" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>

                            <div className="modal-body">
                                <div className="quickview_body">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12 col-lg-5">
                                                <div className="quickview_pro_img">
                                                    <img src="img/product-img/product-1.jpg" alt=""/>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-7">
                                                <div className="quickview_pro_des">
                                                    <h4 className="title">Boutique Silk Dress</h4>
                                                    <div className="top_seller_product_rating mb-15">
                                                        <i className="fa fa-star" aria-hidden="true"/>
                                                        <i className="fa fa-star" aria-hidden="true"/>
                                                        <i className="fa fa-star" aria-hidden="true"/>
                                                        <i className="fa fa-star" aria-hidden="true"/>
                                                        <i className="fa fa-star" aria-hidden="true"/>
                                                    </div>
                                                    <h5 className="price">$120.99 <span>$130</span></h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                        Mollitia expedita quibusdam aspernatur, sapiente consectetur
                                                        accusantium perspiciatis praesentium eligendi, in fugiat?</p>
                                                    <a href="#">View Full Product Details</a>
                                                </div>
                                                <form className="cart" method="post">
                                                    <div className="quantity">
                                                        <span className="qty-minus"><i
                                                            className="fa fa-minus" aria-hidden="true"/></span>

                                                        <input type="number" className="qty-text" id="qty" step="1"
                                                               min="1" max="12" name="quantity" value="1"/>

                                                        <span className="qty-plus"><i
                                                            className="fa fa-plus" aria-hidden="true"/></span>
                                                    </div>
                                                    <button type="submit" name="addtocart" value="5"
                                                            className="cart-submit">Add to cart
                                                    </button>

                                                    <div className="modal_pro_wishlist">
                                                        <a href="wishlist.html" target="_blank"><i
                                                            className="ti-heart"/></a>
                                                    </div>

                                                    <div className="modal_pro_compare">
                                                        <a href="compare.html" target="_blank"><i
                                                            className="ti-stats-up"/></a>
                                                    </div>
                                                </form>

                                                <div className="share_wf mt-30">
                                                    <p>Share With Friend</p>
                                                    <div className="_icon">
                                                        <a href="#"><i className="fa fa-facebook"
                                                                       aria-hidden="true"/></a>
                                                        <a href="#"><i className="fa fa-twitter" aria-hidden="true"/></a>
                                                        <a href="#"><i className="fa fa-pinterest"
                                                                       aria-hidden="true"/></a>
                                                        <a href="#"><i className="fa fa-google-plus"
                                                                       aria-hidden="true"/></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="shop_grid_area section_padding_100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-4 col-lg-3">
                                <Filter/>
                            </div>
                            <div className="col-12 col-md-8 col-lg-9">
                                <ProductList/>
                                <Pagination/>
                            </div>
                        </div>
                    </div>
                </section>
            </Wrapper>
        );
    }
}

export default Shop;