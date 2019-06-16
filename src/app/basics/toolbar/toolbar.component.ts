import { Component, OnInit, ViewChild } from '@angular/core';
import { BasicsService } from '../share/basics.service';
import { Basics } from '../share/basics';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {


  @ViewChild('titel', {static: true}) titel: any;
  sitetitel: string;

  public basics: Basics[];

  constructor(public basicsService: BasicsService) { }


  ngOnInit() {
    this.basicsService
    .getContent()
    .subscribe(
      (basics: Basics[]) =>  { this.basics = basics; },
      () => { console.log('Content Import Service is not ready (JSON)'); },
      () => {
        this.sitetitel = this.basics[0].titel[0].site;
        this.titel.nativeElement.innerHTML = this.sitetitel;
      }
      );
  }

}
