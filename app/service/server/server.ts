import {Component, FORM_DIRECTIVES, CORE_DIRECTIVES, Injectable} from 'angular2/angular2';
import {HTTP_PROVIDERS, Http, Headers} from 'angular2/http';

@Injectable()

export class ServerService{
    private baseUrl = "http://localhost:3000/"
    private http: Http;
    private return;
    public constructor(http: Http){
        this.http = http;
    }

    public login(email,password){
        console.log(email);
    }

    public getTeams(){
        return this.http.get(this.baseUrl+'teams/').map(res => res.json());
    }

    public getTeam(id: string){
        return this.http.get(this.baseUrl+'teams/'+id).map(res => res.json());
    }

    public getPlayer(id: string){
        return this.http.get(this.baseUrl+'players/'+id).map(res => res.json());
    }

    public sendEmailContact(email: string, message: string){
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var body = "email=" + email + "&message=" + message;
        return this.http.post(this.baseUrl+'notifications/contact',body,{
            headers: headers
        }).map(res => res.json());
    }
}