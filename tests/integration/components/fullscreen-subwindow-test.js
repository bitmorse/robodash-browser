import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fullscreen-subwindow', 'Integration | Component | fullscreen subwindow', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{fullscreen-subwindow}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#fullscreen-subwindow}}
      template block text
    {{/fullscreen-subwindow}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
