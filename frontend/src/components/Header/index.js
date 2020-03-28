import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { UserOutlined, UserAddOutlined } from '@ant-design/icons';
import * as LogoImg from '../../assets/images/logo.png';
import './style.scss';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        };

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = e => {
        if (window.scrollY >= 100 && this.state.active === false) {
            this.setState({ active: true });
        } else if (window.scrollY < 100 && this.state.active === true ) {
            this.setState({ active: false });
        }
    };

    render() {
        const { active } = this.state;
        const headerClass = active ? "header active" : "header";

        return (
            <div className={headerClass}>
                <div className="container">
                    <div className="header-logo">
                        <Link to="/">
                            <img className="logo-img" src={LogoImg} alt="" />
                            <span className="logo-title">Facebook Group Helper</span>
                        </Link>
                    </div>
                    <Menu
                        theme="light"
                        mode="horizontal"
                        className="menu"
                    >
                        <Menu.Item key="1" className="menu-item">
                            <Link to="/login">
                                <UserOutlined/>
                                <span>Login</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key-="2" className="menu-item">
                            <Link to="/register">
                                <UserAddOutlined/>
                                <span>Register</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </div>
            </div>
        )
    }
}
