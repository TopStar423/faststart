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
                <a className="course-url" href={course.url} target="_blank">Go To Course</a>
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
                <Steps current={student.courseCompletedLevel} labelPlacement="vertical">
                    {courses.map(course => {
                        let currentCourseStatus = '';
                        let icon = null;

                        if (student.courseCompletedLevel >= course.level) {
                            icon = (
                                <Popover content={this.popoverContent(course)} title="Complete Course" trigger="hover">
                                    <CheckCircleTwoTone twoToneColor="#52c41a" />
                                </Popover>
                            );
                        } else if (student.courseCompletedLevel === course.level - 1) {
                            currentCourseStatus = (
                                <span className={student.currentCourseStatus > 20 ? 'warning' : ''}>
                                    It's been {student.currentCourseStatus} days
                                </span>
                            );
                            icon = (
                                <Popover content={this.popoverContent(course, 'active')} title="Complete Course" trigger="hover">
                                    <HomeTwoTone />
                                </Popover>
                            );
                        } else {
                            icon = (
                                <Popover content={this.popoverContent(course)} title="Complete Course" trigger="hover">
                                    <QuestionOutlined />
                                </Popover>
                            );
                        }

                        return (
                            <Step
                                title={course.name}
                                description={currentCourseStatus}
                                icon={icon}
                            />
                        )
                    })}
                </Steps>
                <CompleteCourseModal
                    isCompletingCourse={isCompletingCourse}
                    closeCompleteCourseModal={this.closeCompleteCourseModal}
                />
            </div>
        )
    }
}