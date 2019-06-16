import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BasicsService } from './basics/share/basics.service';
import { Basics } from './basics/share/basics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {

  @ViewChild('icon', {static: true}) icon: any;
  menu: string;

  public basics: Basics[];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );

constructor(
          private breakpointObserver: BreakpointObserver,
          public basicsService: BasicsService
  ) {}

  ngOnInit() {
    this.basicsService
    .getContent()
    .subscribe(
      (basics: Basics[]) =>  { this.basics = basics; },
      () => { console.log('Content Import Service is not ready (JSON)'); },
      () => {
        this.menu = this.basics[0].menu[0].icon;
        this.icon._elementRef.nativeElement.innerHTML = this.menu;
      }
      );
  }

}

