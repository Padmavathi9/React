import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import PropTypes from 'prop-types';
import CourseList from './CourseList';

class CoursePage extends React.Component{
    constructor(props,context){
        super(props,context);
         }
    
    courseRow(course,index){
        return <div key={index}>{course.title}</div>;
    }
    render(){ 
        const {courses}= this.props;
        return(
            <div>
              <h1>Courses</h1> 
          {/* {this.props.courses.map(this.courseRow)} */}
            <CourseList courses={courses}/>
            </div>
        );
    }
}

CoursePage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch){
    return {
        //createCourse: course => dispatch(courseActions.createCourse(course))
        actions: bindActionCreators(courseActions,dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(CoursePage); 