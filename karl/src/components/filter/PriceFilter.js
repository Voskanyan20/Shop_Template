import React, {Component} from 'react';
import '../../assets/css/core-style.css'

class PriceFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            field:'',
            min: 1000,
            max: 10000,
        }
    }
    rangeChanging = (event)=>{
        const {field} = this.state
        this.setState({field: event.target.value})
        console.log(field)
    }
    // change = (e) =>{
    //     let {field} = this.state
    //     // field = field.e.target.value
    //     this.setState({field: e.target.value})
    // }
    render() {
        const {min,max,field} = this.state
        return (
            <div className="widget price mb-50">
                <h6 className="widget-title mb-30">Filter by Price</h6>
                <div className="widget-desc">
                    <div className="slider-range">
                        <div className='range'>
                            <input
                                className={'range__input'}
                                onChange={this.rangeChanging}
                                type={'range'}
                                // defaultValue={1000}
                                min={min} max={max}
                            />
                        </div>
                        <input
                            value={field}
                            onChange={this.change}
                            className="range-price"
                            type={'number'}
                            min={min}
                            max={max}
                            placeholder={`$${min}`}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default PriceFilter;