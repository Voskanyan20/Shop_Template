import React, {Component} from 'react';
import COLOR from '../../data/color.json'
import '../../assets/css/core-style.css'
class ColorFilter extends Component {
    render() {
        return (
            <div className="widget color mb-70">
                <h6 className="widget-title mb-30">Filter by Color</h6>
                <div className="widget-desc">
                    <ul className="d-flex justify-content-between">
                        {
                            COLOR.map(c =>(
                                <li key={c.id} className={c.class}><a><span>{`[${c.available}]`}</span></a></li>

                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default ColorFilter;