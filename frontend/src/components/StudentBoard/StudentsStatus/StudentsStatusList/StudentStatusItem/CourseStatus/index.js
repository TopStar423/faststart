import React, { Component } from 'react';
import { Popover, Button } from 'antd';
import CompleteCourseModal from './CompleteCourseModal';
import './style.scss';

export default class CourseStatus extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isCompletingCourse: false
        };

        this.popoverContent = this.popoverContent.bind(this);
        this.handleCompleteCourse = this.handleCompleteCourse.bind(this);
        this.closeCompleteCourseModal = this.closeCompleteCourseModal.bind(this);
    }

    popoverContent = () => {
      const { course } = this.props;
      return (
          <div className="course-popover-content">
              <a className="course-url" href={course.url} target="_blank">Go To Course</a>
              <Button className="btn-course-complete" onClick={this.handleCompleteCourse}>Complete</Button>
          </div>
      )
    };

    handleCompleteCourse = () => {
        this.setState({ isCompletingCourse: true });
    };

    closeCompleteCourseModal = () => {
        this.setState({ isCompletingCourse: false });
    };

    render() {
        const { student, course } = this.props;
        const { isCompletingCourse } = this.state;
        const courseStatusClassName = student.courseCompletedLevel >= course.level ? 'course-status active' : 'course-status';
        const currentCourseStatusClassName = student.currentCourseStatus > 20 ? 'current-course-status warning' : 'current-course-status';

        return (
            <div className={courseStatusClassName}>
                <Popover content={this.popoverContent()} title="Complete Course" trigger="hover">
                    <div className="course">
                        {course.name}
                    </div>
                </Popover>
                {course.level === student.courseCompletedLevel + 1 && (
                    <span className={currentCourseStatusClassName}>
                        It's been {student.currentCourseStatus} days
                    </span>
                )}
                <CompleteCourseModal
                    isCompletingCourse={isCompletingCourse}
                    closeCompleteCourseModal={this.closeCompleteCourseModal}
                />
            </div>
        )
    }
}