import {Injectable} from '@angular/core';
import {Subject, BehaviorSubject} from 'rxjs/Rx';
import {Http, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/switchMap';
import {Observable} from "rxjs/Observable";
import { AppConfig } from './app.config';

@Injectable()
export class AuthService {

  private API_URL = AppConfig.API_URL;
  loggedIn: Subject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: Http) {
  }

  checklogin(): Observable<any> {
    return this.http.get(this.API_URL + "/checklogin", {withCredentials: true})
      .map(res => res.json())
      .map((res) => {
        this.loggedIn.next(res.success);
        return res;
      });;
  }

  login(user): Observable<any> {
    let params = new URLSearchParams();
    params.set("username", user.username);
    params.set("password", user.password);
    return this.http.post(this.API_URL + "/login", params, {withCredentials: true})
      .map(res => res.json())
      .map((res) => {
        this.loggedIn.next(res.success);
        return res;
      });
  }

  register(user): Observable<any> {
    return this.http.post(this.API_URL + "/register", user)
      .map(res => res.json());
  }

  logout(): Observable<any> {
    return this.http.post(this.API_URL + "/logout", {}, {withCredentials: true})
      .map(res => res.json())
      .map(res => {
        this.loggedIn.next(false);
        return res;
      });
  }

  getProducts() {
    return this.http.get(this.API_URL + "/products", {withCredentials: true}).map(res => res.json());
  }

  getOrders() {
    return this.http.get(this.API_URL + "/orders", {withCredentials: true}).map(res => res.json());
  }

  getUsers() {
    return this.http.get(this.API_URL + "/users", {withCredentials: true}).map(res => res.json());
  }

}
