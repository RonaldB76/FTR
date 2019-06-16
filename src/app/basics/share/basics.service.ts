import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Basics, Content } from './basics';

@Injectable({
  providedIn: 'root'
})
export class BasicsService {

constructor(private http: HttpClient ) { }

configUrl = 'assets/basics/basics.json';

getContent(): Observable<Content[]> {
  return this.http
    .get<Basics[]>(this.configUrl)
    .pipe(map(raws => this.content(raws)));
}

content(raws: Basics[]): Content[] {
  return raws.map(raw => new Content(
    raw.menu,
    raw.headline,
    raw.menuitems,
    raw.name,
    raw.href,
    raw.titel,
    raw.site,
    raw.toolbar,
    raw.footer,
    raw.colors,
    raw.value,
    raw.viewValue
  ));
 }
}
