import React, {Component} from 'react';
import Link from "react-router-dom/es/Link";

import logo from "../logo.png";

class Header extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <Link to="/">
                        <img src={logo} className="App-logo" alt="logo"/>
                    </Link>
                </header>
            </div>
        );
    }
}

export default Header;