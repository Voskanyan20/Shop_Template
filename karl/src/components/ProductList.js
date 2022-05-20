import React, {Component} from 'react';
import ProductItem from "./ProductItem";
import PRODUCT from '../data/product.json'

class ProductList extends Component {
    render() {
        return (
            <div className="shop_grid_product_area">
                <div className="row">
                    {
                        PRODUCT.map(product => (
                            <ProductItem
                                key={product}
                                product={product}
                                classname={"col-12 col-sm-6 col-lg-4 single_gallery_item"}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default ProductList;