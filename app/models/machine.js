import DS from 'ember-data';
import { Model } from 'ember-pouch';

//change from DS.Model to Model to use pouch
export default Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  connections: DS.hasMany('connection'),
  devices: DS.hasMany('device')
});
