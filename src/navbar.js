import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
    render() {
        return (
            <div>
                <nav className='navbar navbar-default'>
                    <div className="container-fluid">
                        <ul className='navbar-nav'>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/aboutus">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contactus">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="/message">Messages</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="contents">
                    {this.props.children}
                </div>
            </div>
        );
    }
}