import React, { Component } from 'react';
import { Button, Popover, Steps, Avatar } from 'antd';
import { UserOutlined, CheckCircleTwoTone, HomeTwoTone, QuestionOutlined } from '@ant-design/icons';
import CompleteCourseModal from "./CompleteCourseModal";
import './style.scss';

const { Step } = Steps;

export default class StudentStatusItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isCompletingCourse: false
        };

        this.popoverContent = this.popoverContent.bind(this);
        this.handleCompleteCourse = this.handleCompleteCourse.bind(this);
        this.closeCompleteCourseModal = this.closeCompleteCourseModal.bind(this);
    }

    popoverContent = (course, status) => {
        return (
            <div className="course-popover-content">
                <a className="course-url" href={course.url} target="_blank">Go To Lesson</a>
                <Button
                    className="btn-course-complete"
                    onClick={this.handleCompleteCourse}
                    disabled={status !== 'active'}
                >
                    Complete
                </Button>
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
        const { student, courses } = this.props;
        const { isCompletingCourse } = this.state;

        return (
            <div className="student-status-item">
                <div className="student">
                    <div className="student-avatar">
                        <Avatar
                            style={{
                                backgroundColor: '#87d068',
                            }}
                            icon={<UserOutlined />}
                        />
                    </div>
                    <div className="student-name">{student.name}</div>
                </div>
                <div className="student-course-status">
                    {courses.map(course => {
                        let courseClassName = 'course-name';

                        if (student.courseCompletedLevel >= course.level) {
                            courseClassName = 'course-name completed';
                        }

                        return (
                            <div className="course-item">
                                <Popover content={student.courseCompletedLevel === course.level - 1 ? this.popoverContent(course, 'active') : this.popoverContent(course)} title="Complete Course" trigger="hover">
                                    <div className={courseClassName}>{course.name}</div>
                                </Popover>
                                {/*{student.courseCompletedLevel === course.level - 1 && (*/}
                                {/*    <span className={student.currentCourseStatus > 20 ? 'current-course-status warning' : 'current-course-status'}>*/}
                                {/*        It's been {student.currentCourseStatus} days*/}
                                {/*    </span>*/}
                                {/*)}*/}
                            </div>
                        )
                    })}
                </div>
                <CompleteCourseModal
                    isCompletingCourse={isCompletingCourse}
                    closeCompleteCourseModal={this.closeCompleteCourseModal}
                />
            </div>
        )
    }
}