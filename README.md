ember-component-lifecycle-hooks
==============================================================================

A helper addon that provide controllers access to the component's lifecycle hooks.

Installation
------------------------------------------------------------------------------

```
ember install ember-component-lifecycle-hooks
```

Usage Example
------------------------------------------------------------------------------

```
// templates/index.hbs
{{component-lifecycle-hooks
    did-render-hook = (action 'didRender')
    did-destroy-element = (action 'didDestroyElement')
}}

// controllers/index.js
actiions: {
    didRender(){},
    didDestroyElement(){}
}
```

Available Hooks
------------------------------------------------------------------------------

`init-hook`
`will-render-hook`
`did-insert-element-hook`
`did-render-hook`
`will-update-hook`
`did-update-hook`
`will-destroy-element-hook`
`will-clear-render-hook`
`did-destroy-element-hook`

For more information about Ember component lifecycle hooks, please visit the [Ember guides](https://guides.emberjs.com/release/components/the-component-lifecycle/).

Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above
* Node.js v8 or above

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
