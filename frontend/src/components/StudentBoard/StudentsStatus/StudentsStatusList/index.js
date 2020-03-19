import React, { Component } from 'react';
import StudentStatusItem from './StudentStatusItem';

export default class StudentsStatusList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { students, courses } = this.props;

        return (
            <div className="students-status-list">
                {students.map(student => (
                    <StudentStatusItem
                        student={student}
                        courses={courses}
                    />
                ))}
            </div>
        )
    }
}