import avalon, { define, component } from 'avalon2';
import './index.css';
import './routes';
import Router from './routes/router';

component('ms-page1', {
    template: `
    <div style="background: #a28;height: 100%;">
        <h1>page1</h1>
        <div>
            <ms-route ms-widget="{path:'/page1/page-1',component:'ms-page1-1'}"></ms-route>
        </div>
    </div>
    `,
    defaults: {
        query: {},
        queryString: '',
        onReady(e) {
            // console.log(this.queryString);
        }
    }
});
component('ms-page1-1', {
    template: `
    <div style="background: #a28;height: 100%;">
        <h1>page1-1</h1>
        <div>
        page1-1page1-1page1-1page1-1page1-1
        </div>
    </div>
    `,
    defaults: {
        query: {},
        queryString: '',
        onReady(e) {
            // console.log(this.queryString);
        }
    }
});

component('ms-page2', {
    template: `
    <div style="background: #e91;height: 100%;">
        <h1>page2</h1>
        <div>
            <input type="text" />
        </div>
    </div>
    `,
    defaults: {
        query: {},
        onReady(e) {
            // console.log(this.query.$model);
        }
    }
});

component('ms-page3', {
    template: '<div style="background: #81f;height: 100%;">page3</div>',
    defaults: {
        query: {},
        onReady(e) {
            // console.log(this.query.$model);
        }
    }
});

component('ms-menu', {
    template: `
    <ul>
        <li ms-for="item in items">
            <ms-navlink ms-widget="{to:item.path}">{{item.title}}</ms-navlink>
        </li>
    </ul>
    `,
    defaults: {
        items: [
            { id: 1, title: 'page1', path: '/page1', pid: 0 },
            { id: 2, title: 'page2', path: '/page2', pid: 0 },
            { id: 3, title: 'page3', path: '/page3', pid: 0 },
            { id: 4, title: 'page1-1', path: '/page1/page-1', pid: 0 }
        ],
        click(e, data) {

        },
        onReady(e) {

        }
    }
});

component('ms-tab', {
    template: `
    <ul class="tab clearfix">
        <li style="float:left;">
            <ms-navlink ms-widget="{to:'/page1?id=1'}">page1</ms-navlink>
        </li>
    </ul>
    `,
    defaults: {

    }
})

define({
    $id: 'app',
    aaa: '<aaa>aaaaa</aaa>'
});


avalon.scan(document.getElementById('app'));
