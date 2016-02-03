import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('visualizer-iframe', 'Integration | Component | visualizer iframe', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{visualizer-iframe}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#visualizer-iframe}}
      template block text
    {{/visualizer-iframe}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
