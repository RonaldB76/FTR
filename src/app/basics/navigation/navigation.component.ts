import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BasicsService } from '../share/basics.service';
import { Basics } from '../share/basics';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @ViewChild('menutitel', {static: true}) menutitel: any;
  titel: string;

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
        this.titel = this.basics[0].menu[0].headline;
        this.menutitel._elementRef.nativeElement.innerHTML = this.titel;

      }
      );
  }

}

