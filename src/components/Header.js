import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Logo</a>
                    <ul className="nav navbar-nav">
                        <li >
                            <a href="#">Home</a>
                        </li>
                        <li className="active">
                            <a href="#">Products</a>
                        </li>
                        <li >
                            <a href="#">Variables</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
