import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(course){
    return { type: types.LOAD_COURSES_SUCCESS, course};
}


export function loadCourses(){
    return function(dispatch){
        return courseApi.getAllCourses().then(course =>{
            dispatch(loadCoursesSuccess(course));
        }).catch(error =>{
            throw(error);
        });
    };
}