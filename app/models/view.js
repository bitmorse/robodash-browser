import DS from 'ember-data';
import { Model } from 'ember-pouch';

export default Model.extend({
  name: DS.attr('string'),
  viewjson: DS.attr('string', {defaultValue:'{}'}),
  machine: DS.belongsTo('machine')
});
