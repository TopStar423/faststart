import React, { Component } from 'react';

export default class MostLikedThreads extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="most-liked-threads threads-block">
                <h3 className="threads-title">Most Liked Threads</h3>
                <div className="threads-content"></div>
            </div>
        )
    }
}