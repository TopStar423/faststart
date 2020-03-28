import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { register } from '../redux/action_creators/auth';
import Auth from '../components/Auth';

const { Register } = Auth;

const mapStateToProps = state => state.auth;

const mapDispatchToProps = {
    register
};

export const RegisterContainer = withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Register)
);
