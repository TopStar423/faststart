import React, { Component } from 'react';

export default class AdminFavorites extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="admin-favorites threads-block">
                <h3 className="threads-title">The Admin Favorites</h3>
                <div className="threads-content"></div>
            </div>
        )
    }
}