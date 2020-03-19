import React, { Component } from 'react';
import StudentsStatusList from './StudentsStatusList';

export default class StudentsStatus extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { students, courses } = this.props;

        return (
            <div className="students-status">
                <div className="progress-line">
                    <span className="progress-line-item">Journey</span>
                    <span className="progress-line-item">Destination</span>
                </div>
                <StudentsStatusList
                    students={students}
                    courses={courses}
                />
            </div>
        )
    }
}