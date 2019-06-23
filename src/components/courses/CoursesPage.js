import React from "react";
import { connect } from "react-redux";
import * as courseActions from '../../redux/actions/courseActions';
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";

class CoursesPage extends React.Component {
  // setting up initial state
  state = {
    course: {
      title: ""
    }
  };
  // function that is going to handle the event , which is save
  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value }; //copy by spread of original state, keeping values from the left and overwriting the empty string of title
    this.setState({ course: course }); // setting up the new state wth the new object that was instantiated
  };
  // fire a message alert when hit save
  handleSubmit = event => {
    event.preventDefault();
    this.props.actions.createCourse(this.state.course)
    
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange} // calling function to pass the title value
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
        { this.props.courses.map(course =>(
            <div key={course.title}>{course.title}</div> // keys help react track each array element
        ))}
      </form>
    );
  }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.func.isRequired
};


// This function determines what state is passed to our component via props
function mapStateToProps(state) { // ownProps uses props that has been attached to the component (CoursePage)
  return {
    courses: state.courses // Be specific. Request only the data your component needs
  };
}
// return create course action. Is important call dispatch as a wrapper for the action creator
function mapDispatchToProps(dispatch) {
  return{
    actions: bindActionCreators(courseActions, dispatch)
  };
  
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage); // connect retunrs a function and then that function calls  CoursePage component
