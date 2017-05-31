import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

//action
export function loadCoursesSuccess(course){
    return { type: types.LOAD_COURSES_SUCCESS, course};
}

//Thunk
export function loadCourses(){
    return function(dispatch){
        return courseApi.getAllCourses().then(course =>{
            dispatch(loadCoursesSuccess(course));
        }).catch(error =>{
            throw(error);
        });
    };
}