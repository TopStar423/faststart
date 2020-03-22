import React, { Component } from 'react';
import StudentsStatus from './StudentsStatus';
import { students } from '../../assets/mockdata/students';
import { courses } from '../../assets/mockdata/courses';
import './style.scss';

export default class StudentBoard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="student-progress-board">
                <h1 className="board-title">Student Progress Board</h1>
                <StudentsStatus
                    students={students}
                    courses={courses}
                />
            </div>
        )
    }
}