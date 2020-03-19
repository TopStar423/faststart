import React, { Component } from 'react';
import CourseStatus from './CourseStatus';

export default class StudentStatusItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { student, courses } = this.props;

        return (
            <div className="student-status-item">
                <div className="student-name">{student.name}</div>
                {courses.map(course => (
                    <CourseStatus
                        student={student}
                        course={course}
                    />
                ))}
            </div>
        )
    }
}