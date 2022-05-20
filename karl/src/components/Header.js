import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showingPages:false,
        }
    }
    showPages = ()=>{
        const {showingPages} = this.state
        this.setState({showingPages: !showingPages})
    }
    render() {
        const {showingPages} = this.state
        return (
            <>
                <header className="header_area bg-img background-overlay-white"
                        style={{backgroundImage: "url(img/bg-img/bg-1.jpg)"}}>
                    <div className="top_header_area">
                        <div className="container h-100">
                            <div className="row h-100 align-items-center justify-content-end">

                                <div className="col-12 col-lg-7">
                                    <div className="top_single_area d-flex align-items-center">
                                        <div className="top_logo">
                                            <a href="#"><img src="img/core-img/logo.png" alt="" /></a>
                                        </div>
                                        <div className="header-cart-menu d-flex align-items-center ml-auto">
                                            <div className="cart">
                                                <a href="#" id="header-cart-btn" target="_blank"><span
                                                    className="cart_quantity">2</span> <i className="ti-bag"></i> Your
                                                    Bag $20</a>
                                                <ul className="cart-list">
                                                    <li>
                                                        <a href="#" className="image"><img
                                                            src="img/product-img/product-10.jpg" className="cart-thumb"
                                                            alt="" /></a>
                                                        <div className="cart-item-desc">
                                                            <h6><a href="#">Women's Fashion</a></h6>
                                                            <p>1x - <span className="price">$10</span></p>
                                                        </div>
                                                        <span className="dropdown-product-remove"><i
                                                            className="icon-cross"></i></span>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="image"><img
                                                            src="img/product-img/product-11.jpg" className="cart-thumb"
                                                            alt="" /></a>
                                                        <div className="cart-item-desc">
                                                            <h6><a href="#">Women's Fashion</a></h6>
                                                            <p>1x - <span className="price">$10</span></p>
                                                        </div>
                                                        <span className="dropdown-product-remove"><i
                                                            className="icon-cross"></i></span>
                                                    </li>
                                                    <li className="total">
                                                        <span className="pull-right">Total: $20.00</span>
                                                        <a href="cart.html" className="btn btn-sm btn-cart">Cart</a>
                                                        <a href="checkout-1.html"
                                                           className="btn btn-sm btn-checkout">Checkout</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="header-right-side-menu ml-15">
                                                <a href="#" id="sideMenuBtn"><i className="ti-menu"
                                                                                aria-hidden="true"/></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="main_header_area">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-12 d-md-flex justify-content-between">
                                    <div className="header-social-area">
                                        <a href="#"><span className="karl-level">Share</span> <i
                                            className="fa fa-pinterest" aria-hidden="true"></i></a>
                                        <a href="#"><i className="fa fa-facebook" aria-hidden="true"/></a>
                                        <a href="#"><i className="fa fa-twitter" aria-hidden="true"/></a>
                                        <a href="#"><i className="fa fa-linkedin" aria-hidden="true"/></a>
                                    </div>
                                    <div className="main-menu-area">
                                        <nav className="navbar navbar-expand-lg align-items-start">

                                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                                    data-target="#karl-navbar" aria-controls="karl-navbar"
                                                    aria-expanded="false" aria-label="Toggle navigation"><span
                                                className="navbar-toggler-icon"><i className="ti-menu"></i></span>
                                            </button>

                                            <div className="collapse navbar-collapse align-items-start collapse"
                                                 id="karl-navbar">
                                                <ul className="navbar-nav animated" id="nav">
                                                    <li className="nav-item active">
                                                        <a>
                                                            <Link className="nav-link" to={'/'}>Home</Link>
                                                        </a></li>
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link dropdown-toggle"
                                                          // href="/shop"
                                                           onClick={this.showPages}
                                                           id="karlDropdown"
                                                           role="button"
                                                           data-toggle="dropdown"
                                                           aria-haspopup="true"
                                                           aria-expanded="false">Pages</a>
                                                        {showingPages?
                                                            <div className="dropdowned-menu"
                                                                 style={{display: 'block'}}>
                                                                    <Link className='dropdowned-item' to={'/'}>Home</Link>
                                                                    <Link className='dropdowned-item' to={'/shop'}>Shop</Link>
                                                                    <Link className='dropdowned-item' to={'/cart'}>Cart</Link>
                                                                    <Link className='dropdowned-item' to={'/product-details'}>Product Details</Link>
                                                                    <Link className='dropdowned-item' to={'/checkout'}>Checkout</Link>

                                                            </div>
                                                            :null
                                                        }



                                                    </li>
                                                    <li className="nav-item"><a className="nav-link"
                                                                                href="#">Dresses</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="#"><span
                                                        className="karl-level">hot</span> Shoes</a></li>
                                                    <li className="nav-item"><a className="nav-link"
                                                                                href="#">Contact</a></li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                    <div className="help-line">
                                        <a href="tel:+346573556778"><i className="ti-headphone-alt"/> +34 657 3556
                                            778</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="top-discount-area d-md-flex align-items-center">
                  
                    <div className="single-discount-area">
                        <h5>Free Shipping &amp; Returns</h5>
                        <h6><a href="#">BUY NOW</a></h6>
                    </div>
                   
                    <div className="single-discount-area">
                        <h5>20% Discount for all dresses</h5>
                        <h6>USE CODE: Colorlib</h6>
                    </div>
                    <div className="single-discount-area">
                        <h5>20% Discount for students</h5>
                        <h6>USE CODE: Colorlib</h6>
                    </div>
                </section> 
            </>
        );
    }
}

export default Header;