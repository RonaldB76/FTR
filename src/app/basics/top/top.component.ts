import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { BasicsService } from '../share/basics.service';
import { Basics } from '../share/basics';

export interface Color {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent  implements OnInit {

  @ViewChild('select', {static: true}) select: any;
  public basics: Basics[];
  public selectedColor: string;
  public colors: Color[];

  constructor(public dialog: MatDialog, public basicsService: BasicsService) {}


  ngOnInit() {
    this.basicsService
    .getContent()
    .subscribe(
      (basics: Basics[]) =>  { this.basics = basics; },
      () => { console.log('Content Import Service is not ready (JSON)'); },
      () => { }
      );
  }


  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`sent Fuck? ${result}`);
    });
  }

  onChange( event ) {
    document.querySelector('.indiviual').setAttribute('style', 'background-color:' + event.value);
    document.querySelector('.mat-drawer-inner-container').setAttribute('style', 'background-color:' + event.value);
}
}
