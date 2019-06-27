import * as types from "./actionTypes";
import *as courseApi from "../../api/courseApi";
// action creator , IT MUST HAVE A TYPE constant variable
export function createCourse(course) {

    return{
        type: types.CREATE_COURSE,  course 
    };
}

export function loadCourseSuccess (courses){
    return {type: types.LOAD_COURSES_SUCESS, courses};
}

export function loadCourses(){
    return function(dispatch){
        return courseApi.getCourses().then(courses => {
            dispatch(loadCourseSuccess(courses));
        }).catch(error =>  {
            throw error;
        })
    }
}