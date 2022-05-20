import React, {Component} from 'react';
import _ from "lodash";
import PRODUCTS from '../data/product.json'
import {Link} from "react-router-dom";

class Pagination extends Component {
    render() {
        return (
            <div className="shop_pagination_area" >
                <nav aria-label="Page navigation">
                    <ul className="pagination pagination-sm">
                        {_.range(1, Math.ceil(PRODUCTS.length / 2)+1).map(p=>(
                            <li key={p} className="page-item">
                                <Link className="page-link" to={`/shop`}>{p}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Pagination;