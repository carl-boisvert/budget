import {bootstrap, Component, FORM_DIRECTIVES, CORE_DIRECTIVES,bind} from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig,ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ServerService} from './service/server/server';
import {NavComponent} from "./component/nav";
import {HeaderComponent} from "./component/header";
import {HomeComponent} from "./component/home";

@Component({
    selector: 'my-app',
    templateUrl: '/app/template/base.html',
    directives: [ROUTER_DIRECTIVES,NavComponent],
})

@RouteConfig([
    { path: '/',              as: 'Home',  component: HomeComponent }
])

export class AppComponent { }


bootstrap(AppComponent,[
    ServerService,
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    bind(LocationStrategy).toClass(HashLocationStrategy)
]).then(
        success => console.log('AppComponent bootstrapped!'),
        error => console.log(error)
);