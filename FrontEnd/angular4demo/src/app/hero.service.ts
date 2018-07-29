import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeroService {

  private heroUrl = 'http://localhost:3000/heroes';

  constructor(
    private http: Http
  ) { }

  getHeroes(): Observable<Hero[]> {
    // string -> JSON. JSON.parse(str)
    // JSON -> string. JSON.stringify(obj)
    // $http.get(this.heroUrl).then(function(res){ res })
    return this.http.get(this.heroUrl)
      .map(res => res.json());
  }

  getHero(id: number): Observable<Hero> {
    return this.http.get(this.heroUrl + '/' + id)
      .map(res => res.json());
  }

}
