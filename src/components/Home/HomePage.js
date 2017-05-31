import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
    render(){
        return(
            <div>
                <h1>Sample Application</h1>
            <p>React, Redux and React Router in E6 for Ultra responsive web apps.</p>
            <Link to="courses" className="btn btn-primary btn-lg">Learn More</Link>
            </div>
        );
    }
}
export default HomePage;