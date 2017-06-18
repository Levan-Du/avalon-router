import avalon, { define, component } from 'avalon2';
import './routes';


component('ms-page1', {
    template: '<div style="background: #a28;height: 100%;">page1</div>',
    defaults: {
        query: {},
        queryString: '',
        onReady(e) {
            // console.log(this.queryString);
        }
    }
});

component('ms-page2', {
    template: '<div style="background: #3e8;height: 100%;">page2</div>',
    defaults: {
        query: {},
        onReady(e) {
            // console.log(this.query.$model);
        }
    }
});

component('ms-page3', {
    template: '<div style="background: #e81;height: 100%;">page3</div>',
    defaults: {
        query: {},
        onReady(e) {
            // console.log(this.query.$model);
        }
    }
});

define({
    $id: 'app'
});
