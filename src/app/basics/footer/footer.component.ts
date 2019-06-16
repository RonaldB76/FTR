import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BasicsService } from '../share/basics.service';
import { Basics } from '../share/basics';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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
        this.titel = this.basics[0].titel[0].footer;
      }
      );
  }

}
