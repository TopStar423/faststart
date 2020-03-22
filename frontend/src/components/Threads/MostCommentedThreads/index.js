import React, { Component } from 'react';

export default class MostCommentedThreads extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="most-commented-threads threads-block">
                <h3 className="threads-title">Most Commented Threads</h3>
                <div className="threads-content"></div>
            </div>
        )
    }
}