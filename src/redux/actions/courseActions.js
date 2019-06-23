
// action creator , IT MUST HAVE A TYPE constant variable
export function createCourse(course) {

    return{
        type:"CREATE_COURSE", course: course 
    };
}