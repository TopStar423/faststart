import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Dashboard from '../components/Dashboard';

const mapStateToProps = state => {
    return null;
};

const mapDispatchToProps = {

};

export const DashboardContainer = withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Dashboard)
);