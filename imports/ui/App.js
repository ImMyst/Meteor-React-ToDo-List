import React, { Component } from 'react';
import { withTracker } from 'react-meteor-data';

import Tasks from '../api/tasks'

import Task from './Task';

class App extends Component {
    render() {
        return <Task key={task._id} task={task} />
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Todo List</h1>
                </header>

                <ul>
                    {this.render()}
                </ul>
            </div>
        );
    }
}

export default withTracker(() => {
    return {
      tasks:  Tasks.find({}).fetch(),
};

})(App);