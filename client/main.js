import React from 'react';
import { Meteor } from 'meteor/meteor';
import './main.html';
import { render } from 'react-dom';

import App from '../imports/ui/App';
import '../imports/api/tasks'

Meteor.startup(() => {
    render(<App />, document.getElementById('render-target'));
});