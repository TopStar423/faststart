import React, { Component } from 'react';
import MostCommentedThreads from './MostCommentedThreads';
import MostLikedThreads from './MostLikedThreads';
import AdminFavorites from './AdminsFavorites';
import './style.scss';

export default class Threads extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="threads-container">
                <MostCommentedThreads />
                <MostLikedThreads />
                <AdminFavorites />
            </div>
        )
    }
}