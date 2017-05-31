import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({course}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                <th>&nbsp;</th>
                <th>&Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Length</th>
                </tr>
            </thead>
            <tbody>
                {course.map(course => <CourseListRow key={course.id} course={course}/>
                )}
            </tbody>
        </table>
    );
};

CourseList.protoTypes={
    course:PropTypes.array.isRequired
};

export default CourseList;