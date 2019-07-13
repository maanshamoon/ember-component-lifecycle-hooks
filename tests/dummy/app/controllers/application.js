import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        initHook(){
            console.log('init hook fired.')
        }
    }
});
