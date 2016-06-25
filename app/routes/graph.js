import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model: function(params, transition) {
    return { graphSource: config.edgeURL+'/public/'+params.graph_id };
  }
});
