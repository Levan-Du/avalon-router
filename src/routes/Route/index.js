import avalon, { component } from 'avalon2';
import Router from '../router';


component('ms-route', {
    template: `
        <div ms-attr="{id:$id}" ms-css="styles" ms-html="visibleComponent"
            ms-effect="{is:'fade',action:aniAction,onEnterDone:aniActionEnter,onLeaveDone:aniActionLeave}">
        </div>
        `,
    defaults: {
        styles: {
            width: '100%',
            height: '100%',
            display: 'none'
        },
        path: '',
        component: '',
        visible: false,
        visibleComponent: '',
        cached: true,
        query: {},
        queryString: '',
        childRoute: '',
        aniAction: 'leave',
        aniActionEnter() {
            console.log('ani enter');
        },
        aniActionLeave() {
            console.log('ani leave');
        },
        onInit(e) {
            var _this = this;

            _this.aniAction = 'enter';

            var routeComp = Router.routerComponent;
            routeComp.routes[_this.path] = e.vmodel;

            Router.route(_this.path, () => {
                _this.queryString = Router.query;
                _this.query = Router.getQuery() || {};

                var currCompVmodel = routeComp.routes[routeComp.visiblePath];
                if (currCompVmodel) {
                    if (!_this.cached) {
                        currCompVmodel.visibleComponent = '';
                    }
                    currCompVmodel.visible = false;
                    currCompVmodel.styles.display = 'none';
                    currCompVmodel.aniAction = 'leave';
                }

                routeComp.visiblePath = _this.path;
                _this.visible = true;
                _this.aniAction = 'enter';
                var vc = '<' + _this.component + ' ms-widget="{query:query,queryString:queryString}" />';
                if (!_this.cached) {
                    _this.visibleComponent = vc;
                } else if (!_this.visibleComponent) {
                    _this.visibleComponent = vc;
                }
            });
        },
        onReady(e) {

        },
        onDispose(e) {}
    },
    soleSlot: 'childRoute'
})

avalon.effect('fade', {
    enter: function(el, done) {
        $(el).fadeIn('fast', done);
    },
    leave: function(el, done) {
        $(el).fadeOut('fast', done);
    }
})
