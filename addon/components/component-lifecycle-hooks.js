import Component from '@ember/component';
import { get }  from '@ember/object';

export default Component.extend({
    tagName: '',

    'init-hook' (){},
    'will-render-hook' (){},
    'did-insert-element-hook' (){},
    'did-render-hook' (){},
    'will-update-hook' (){},
    'did-update-hook' (){},
    'will-destroy-element-hook' (){},
    'will-clear-render-hook' (){},
    'did-destroy-element-hook' (){},

    init(){
        this._super(...arguments);
        get(this, 'init-hook')();
    },
    willRender(){
        this._super(...arguments);
        get(this, 'will-render-hook')();
    },
    didInsertElement(){
        this._super(...arguments);
        get(this, 'did-insert-element-hook')();
    },
    didRender(){
        this._super(...arguments);
        get(this, 'did-render-hook')();
    },
    willUpdate(){
        this._super(...arguments);
        get(this, 'will-update-hook')();
    },
    didUpdate(){
        this._super(...arguments);
        get(this, 'did-update-hook')();
    },
    willDestroyElement(){
        this._super(...arguments);
        get(this, 'will-destroy-element-hook')();
    },
    willClearRender(){
        this._super(...arguments);
        get(this, 'will-clear-render-hook')();
    },
    didDestroyElement(){
        this._super(...arguments);
        get(this, 'did-destroy-element-hook')();
    },
});