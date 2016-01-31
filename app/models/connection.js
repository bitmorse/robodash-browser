import DS from 'ember-data';
import { Model } from 'ember-pouch';

export default Model.extend({
  name: DS.attr('string'),
  type: DS.attr('string'),
  opts: DS.attr('string'),
  machine: DS.belongsTo('machine')
});
