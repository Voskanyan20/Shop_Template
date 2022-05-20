import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";

class Wrapper extends Component {
    render() {
        return (
            <>
                {/*<Menu/>*/}
            <div id='wrapper'>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
            </>
        );
    }
}

export default Wrapper;

//this.props.children= bolor pageri kam componentneri mej exac stexcvox props-ern en