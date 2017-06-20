import avalon, { component } from 'avalon2';
import Router from '../router';


component('ms-hashrouter', {
    template: '<div ms-css="styles"><slot name="component" /></div>',
    defaults: {
        styles: {
            width: '100%',
            height: '100%'
        },
        component: '',
        visiblePath: '',
        routes: {},
        onInit(e) {
            Router.routerComponent = e.vmodel;
        },
        onReady(e) {
            var _this = this;
            var urlsplits = Router.currentUrl.match(/\/\w+/g),
                visiblePath = '',
                path = '';
            if (!urlsplits) return;
            urlsplits.forEach(el => {
                path += el;
                var routeVmodel = _this.routes[path];
                if (routeVmodel) {
                    visiblePath = path;
                    routeVmodel.queryString = Router.query;
                    routeVmodel.query = Router.getQuery() || {};
                    routeVmodel.visible = true;
                    routeVmodel.aniAction = 'enter';
                    var vc = '<' + routeVmodel.component + ' ms-widget="{query:query,queryString:queryString}" />';
                    if (!routeVmodel.cached) {
                        routeVmodel.visibleComponent = vc;
                    } else if (!routeVmodel.visibleComponent) {
                        routeVmodel.visibleComponent = vc;
                    }
                }
            });
            _this.visiblePath = visiblePath;
        },
        onViewChange(e) {}
    },
    soleSlot: 'component'
})
