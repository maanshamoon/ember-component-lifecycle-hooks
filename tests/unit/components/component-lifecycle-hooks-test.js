import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Component | component-lifecycle-hooks-test', function(hooks) {

    setupTest(hooks);

    test('Test that component lifecycle hooks are defined', function(assert) {

        assert.expect(9);

        const component = this.owner.factoryFor('component:component-lifecycle-hooks').create();
        const supportedComponentLifecycleHooks = [
            'init-hook',
            'will-render-hook',
            'did-insert-element-hook',
            'did-render-hook',
            'will-update-hook',
            'did-update-hook',
            'will-destroy-element-hook',
            'will-clear-render-hook',
            'did-destroy-element-hook'
        ];

        // check the listed component lifecycle function hooks are defined in the component.
        for(let i = 0; i < supportedComponentLifecycleHooks.length; i++){
            assert.ok(typeof component[supportedComponentLifecycleHooks[i]] === 'function',
                `Component lifecycle function hook ${supportedComponentLifecycleHooks[i]} is defined in the component.`);
        }
    });
});
