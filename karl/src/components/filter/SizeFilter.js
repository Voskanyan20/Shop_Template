import React, {Component} from 'react';
import '../../assets/css/core-style.css'
import SIZE from '../../data/size.json'
class SizeFilter extends Component {
    render() {
        return (
            <div className="widget size mb-50">
                <h6 className="widget-title mb-30">Filter by Size</h6>
                <div className="widget-desc">
                    <ul className="d-flex justify-content-between">
                        {
                            SIZE.map(s =>(
                                <li className={'size__li'}>{s.size}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default SizeFilter;