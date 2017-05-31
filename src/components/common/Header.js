import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';


const Header = () =>{
    return(
    /*<nav>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        {" | "}
        <Link to="courses" activeClassName="active">Courses</Link>
        {" | "}
        <Link to="about" activeClassName="active">About</Link>
    </nav>*/
        
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <div className="logo"></div>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li className="active"><Link to="/" activeClassName="active">Home</Link></li>
                        <li><Link to="courses" activeClassName="active">Courses</Link></li>
                        <li><Link to="about" activeClassName="active">About</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
                
    );
};

export default Header;
    