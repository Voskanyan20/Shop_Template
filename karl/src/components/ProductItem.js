import React, {Component} from 'react';

class ProductItem extends Component {
    render() {
        const {classname,product} = this.props
        return (
            <div className={classname}>

                <div className="product-img">
                    <img src={product.images[0]} alt={product.title}/>
                    <div className="product-quicview">
                        <a
                            href="#"
                            data-toggle="modal"
                            data-target="#quickview"><i
                            className="ti-plus"/>
                        </a>
                    </div>
                </div>

                <div className="product-description">
                    <h4 className="product-price">{`$${product.price}`}</h4>
                    <p>{product.shortDescription}</p>

                    <a href="#" className="add-to-cart-btn">ADD TO CART</a>
                </div>
            </div>
        );
    }
}

export default ProductItem;