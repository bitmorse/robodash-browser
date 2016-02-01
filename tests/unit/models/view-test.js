import { moduleForModel, test } from 'ember-qunit';

moduleForModel('view', 'Unit | Model | view', {
  // Specify the other units that are required for this test.
  needs: ['model:machine']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
