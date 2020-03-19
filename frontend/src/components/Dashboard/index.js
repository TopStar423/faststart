import React, { Component } from 'react';
import { Tabs } from 'antd';
import StudentBoard from '../StudentBoard';
import './style.scss';

const { TabPane } = Tabs;

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTabKey: "1"
        };

        this.onTabChange = this.onTabChange.bind(this);
    }

    onTabChange = activeTabKey => {
        this.setState({ activeTabKey });
    };

    render() {
        const { activeTabKey } = this.state;

        return (
            <div className="dashboard-container">
                <Tabs
                    hideAdd
                    onChange={this.onTabChange}
                    activeKey={activeTabKey}
                    type="card"
                >
                    <TabPane tab="The Student Progress Board" key="1">
                        <StudentBoard />
                    </TabPane>
                    <TabPane tab="Most Liked & Commented Threads" key="2">
                        Most Liked & Commented Threads
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}