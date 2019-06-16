import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './basics/navigation/navigation.component';
import { TopComponent } from './basics/top/top.component';
import { FooterComponent } from './basics/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './basics/toolbar/toolbar.component';
import { DialogComponent } from './basics/top/dialog/dialog.component';

import { BasicsService } from './basics/share/basics.service';

import { LayoutModule } from '@angular/cdk/layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule
 } from '@angular/material';

@NgModule({
   declarations: [
      AppComponent,
      NavigationComponent,
      TopComponent,
      FooterComponent,
      HomeComponent,
      ToolbarComponent,
      DialogComponent
   ],
   imports: [
      BrowserModule,
      HttpModule,
      HttpClientModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      LayoutModule,
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      MatCardModule,
      MatGridListModule,
      MatDialogModule,
      MatFormFieldModule,
      MatSelectModule
   ],
   providers: [
     BasicsService
    ],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [
      DialogComponent
   ],
   schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
