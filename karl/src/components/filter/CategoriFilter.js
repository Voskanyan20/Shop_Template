import React, {Component} from 'react';
import COTEGORIES from '../../data/categories.json'
class CategoriFilter extends Component {

    renderItems=(parentId)=>{
        return COTEGORIES.filter(cotegory=>cotegory.parentId ===parentId).map(d=>(
            <li className="collapsed">
                <a href="#">{d.title}</a>
                <ul className="sub-menu collapse show" id="women2">
                    {this.renderItems(d.id)}
                </ul>
            </li>
        ))
    }
    render() {
        return (
            <div className="widget catagory mb-50">
                <div className="nav-side-menu">
                    <h6 className="mb-0">Categories</h6>
                    <div className="menu-list">
                        <ul id="menu-content2" className="menu-content collapse out">
                            {this.renderItems()}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default CategoriFilter;