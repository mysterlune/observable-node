import DS from 'ember-data';

export default DS.Model.extend({
  graphName: DS.attr('string'),
  graphSource: DS.attr('string')
});
