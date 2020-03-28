import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { login, logout } from '../redux/action_creators/auth';
import Auth from '../components/Auth';

const { Login } = Auth;

const mapStateToProps = state => state.auth;

const mapDispatchToProps = {
    login,
    logout
};

export const LoginContainer = withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Login)
);
