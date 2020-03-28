import React, { Component } from 'react';
import {
    Form,
    Card,
    Input,
    Icon,
    Button
} from 'antd';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.cardStyle = {
            headStyle: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 80,
                margin: '0 24px',
                color: '#003852',
                fontSize: 32,
                fontWeight: 700,
                textTransform: 'uppercase',
                border: 'none',
            },
            mainStyle: {
                borderRadius: '30px'
            }
        };

        this.buttonStyle = {
            background: '#323232',
            border: 'none',
            borderRadius: '25px'
        };

        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            isPasswordShort: false,
            isPasswordMatch: false,
            isSubmitted: false
        };

        this.handleFieldChange = this.handleFieldChange.bind(this);
    }

    handleFieldChange = (type, value) => {
        if (type === 'name') {
            this.setState({ name: value });
        } else if (type === 'email') {
            this.setState({ email: value });
        } else if (type === 'password') {
            this.setState({
                password: value,
                isPasswordShort: value.length < 6,
                isPasswordMatch: value === this.state.confirmPassword
            });
        } else {
            this.setState({
                confirmPassword: value,
                isPasswordMatch: this.state.password === value
            });
        }
    };

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ isSubmitted: true });

        const { email, password,  confirmPassword, isPasswordShort, isPasswordMatch } = this.state;
        const isFieldEmpty = email.length ===0 || password.length === 0 || confirmPassword.length === 0;
        const isError = isFieldEmpty || isPasswordShort || !isPasswordMatch;

        if (!isError) {
            //call api - this will be replaced with action call after defining redux
            try {
                this.props.register(this.state);
            } catch (err) {
                throw(err);
            }
        }
    };

    render() {
        const {
            email,
            password,
            confirmPassword,
            isPasswordShort,
            isPasswordMatch,
            isSubmitted
        } = this.state;

        const isFieldEmpty = email.length ===0 || password.length === 0 || confirmPassword.length === 0;
        const showEmptyFields = isSubmitted && isFieldEmpty;
        const showPasswordShort = isSubmitted && !isFieldEmpty && isPasswordShort;
        const showPasswordNotMatch = isSubmitted && !isFieldEmpty && !isPasswordMatch;

        return (
            <div className="auth-page-container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 ml-auto mr-auto high-priority">
                            <Card
                                title="Register"
                                bordered={false}
                                headStyle={this.cardStyle.headStyle}
                                style={this.cardStyle.mainStyle}
                            >
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Item>
                                        <label className="auth-label">Name</label>
                                        <Input
                                            placeholder="Name"
                                            suffix={<Icon type="user" />}
                                            type="text"
                                            className="auth-input"
                                            onChange={e => this.handleFieldChange('name', e.target.value)}
                                        />
                                    </Form.Item>
                                    <Form.Item>
                                        <label className="auth-label">Email</label>
                                        <Input
                                            placeholder="Email..."
                                            suffix={<Icon type="user" />}
                                            type="email"
                                            className="auth-input"
                                            onChange={e => this.handleFieldChange('email', e.target.value)}
                                        />
                                    </Form.Item>
                                    <Form.Item>
                                        <label className="auth-label">Password</label>
                                        <Input
                                            placeholder="Password..."
                                            suffix={<Icon type="key" />}
                                            type="password"
                                            className="auth-input"
                                            onChange={e => this.handleFieldChange('password', e.target.value)}
                                        />
                                    </Form.Item>
                                    <Form.Item>
                                        <label className="auth-label">Confirm Password</label>
                                        <Input
                                            placeholder="Confirm Password..."
                                            suffix={<Icon type="key" />}
                                            type="password"
                                            className="auth-input"
                                            onChange={e => this.handleFieldChange('confirm_password', e.target.value)}
                                        />
                                    </Form.Item>
                                    <Form.Item>
                                        {showEmptyFields && (
                                            <div className="error-message">Please enter all fields</div>
                                        )}
                                        {showPasswordShort && (
                                            <div className="error-message">Password must be at least 6 characters</div>
                                        )}
                                        {showPasswordNotMatch && (
                                            <div className="error-message">Passwords do not match</div>
                                        )}
                                    </Form.Item>
                                    <Form.Item>
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            className="auth-form-button"
                                            style={this.buttonStyle}
                                        >
                                            Register
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
