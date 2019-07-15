import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | component-lifecycle-hooks', function(hooks) {

    setupRenderingTest(hooks);

    test('Test component lifecycle function hooks gets triggered.', async function(assert) {

        assert.expect(7);
        
        this.set('initHook', function() {assert.ok(1);});
        this.set('willRenderHook', function() {assert.ok(1);});
        this.set('didInsertElementHook', function() {assert.ok(1);});
        this.set('didRenderHook', function() {assert.ok(1);});
        this.set('willDestroyElementHook', function() {assert.ok(1);});
        this.set('willClearRenderHook', function() {assert.ok(1);});
        this.set('didDestroyElementHook', function() {assert.ok(1);});

        await render(hbs`{{ComponentLifecycleHooks
            init-hook = (action initHook)
            will-render-hook = (action willRenderHook)
            did-insert-element-hook = (action didInsertElementHook)
            did-render-hook = (action didRenderHook)
            will-destroy-element-hook = (action willDestroyElementHook)
            will-clear-render-hook = (action willClearRenderHook)
            did-destroy-element-hook = (action didDestroyElementHook)
        }}`);
    });
});
