import React, { Component } from 'react';
import { Modal, Form, Upload, Button, Icon, message } from 'antd';
import './style.scss';

const { Dragger } = Upload;

export default class CompleteCourseModal extends Component {
    constructor(props) {
        super(props);

        this.style = {
            maskStyle: {
                backgroundColor: 'transparent'
            },
            modalContentStyle: {
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
                paddingBottom: 0
            },
            inputStyle: {
                padding: '0 30px',
                borderRadius: '50px',
                height: '40px'
            },
            submitStyle: {
                display: 'flex',
                justifyContent: 'center'
            },
            submitButtonStyle: {
                fontSize: '20px',
                width: '200px',
                height: '40px',
                padding: '0 25px',
                border: 'none',
                borderRadius: '20px',
                backgroundColor: '#f8dd05',
                color: '#5c5c5c'
            }
        };

        this.handleSubmitCourseScreenshot = this.handleSubmitCourseScreenshot.bind(this);
        this.renderCourseScreenshotUploader = this.renderCourseScreenshotUploader.bind(this);
    }

    handleSubmitCourseScreenshot = () => {
        console.log('submit course screenshot');
    };

    renderCourseScreenshotUploader = () => {
        const uploderProps = {
            name: 'file',
            multiple: true,
            onChange(info) {
                const { status } = info.file;
                if (status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully.`);
                } else if (status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
        };

        return (
            <Dragger {...uploderProps}>
                <p className="ant-upload-drag-icon">
                    <Icon type="inbox" theme="outlined" />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                    Support for a single or bulk upload.
                </p>
            </Dragger>
        )
    };

    render() {
        const { isCompletingCourse, closeCompleteCourseModal } = this.props;

        return (
            <Modal
                title="Upload screenshot"
                visible={isCompletingCourse}
                mask
                maskClosable={false}
                maskStyle={this.style.maskStyle}
                style={this.style.modalContentStyle}
                footer={null}
                className="course-complete-modal"
                onCancel={() => closeCompleteCourseModal()}
            >
                <Form layout="vertical">
                    <Form.Item label="" className="course-complete-form-item">
                        {this.renderCourseScreenshotUploader()}
                    </Form.Item>
                    <Form.Item style={this.style.submitStyle}>
                        <Button
                            type="primary"
                            style={this.style.submitButtonStyle}
                            onClick={this.handleSubmitCourseScreenshot}
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        )
    }
}