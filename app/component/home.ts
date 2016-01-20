import {Component} from 'angular2/core';
import {HeaderComponent} from "./header";

@Component({
    selector: 'home',
    templateUrl:'/app/template/home.html',
    directives:[HeaderComponent]
})
export class HomeComponent { }