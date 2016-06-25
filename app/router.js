import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('record', { resetNamespace: true });
  this.route('graphs', { resetNamespace: true }, function() {
    this.route('graph', { 'path': '/:graph_id', resetNamespace: true });
  });

  // Create a recording
  // Route has an action to "start recording"
  // ... while recording, button should animate
  // ... when recording is complete, should transition to show graph


});

export default Router;
