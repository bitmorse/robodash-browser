import DS from 'ember-data';
import { Model } from 'ember-pouch';

//change from DS.Model to Model to use pouch
export default Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  connections: DS.hasMany('connection',{async: false}),
  devices: DS.hasMany('device',{async: false})
});


/*

if $E is a machine, then to save a relation to it you must save twice:

$E.get('connections').createRecord({name: 'LOREM5'}).save()

$E.save()

*/ 
