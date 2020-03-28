import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
    Form,
    Card,
    Input,
    Icon,
    Button
} from 'antd';

export default class Login extends Component {
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
            email: '',
            password: '',
            isSubmitted: false
        };

        this.handleFieldChange = this.handleFieldChange.bind(this);
    }

    handleFieldChange = (type, value) => {
        if (type === 'email') {
            this.setState({ email: value })
        } else if (type === 'password') {
            this.setState({ password: value });
        }
    };

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ isSubmitted: true });

        const { email, password } = this.state;
        const isError = email.length ===0 || password.length === 0;

        if (!isError) {
            this.props.login(this.state);
        }
    };

    render() {
        const { email, password, isSubmitted } = this.state;
        const isFieldEmpty = email.length ===0 || password.length === 0;

        return (
            <div className="auth-page-container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 ml-auto mr-auto high-priority">
                            <Card
                                title="Log in"
                                bordered={false}
                                headStyle={this.cardStyle.headStyle}
                                style={this.cardStyle.mainStyle}
                            >
                                <Form onSubmit={this.handleSubmit}>
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
                                        {isSubmitted && isFieldEmpty && (
                                            <div className="error-message">Please enter all fields</div>
                                        )}
                                    </Form.Item>
                                    <Form.Item>
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            className="auth-form-button"
                                            style={this.buttonStyle}
                                        >
                                            Login
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

Login.propTypes = {
    login: PropTypes.func.isRequired
};
