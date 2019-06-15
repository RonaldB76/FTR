import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './basics/navigation/navigation.component';
import { TopComponent } from './basics/top/top.component';
import { FooterComponent } from './basics/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './basics/toolbar/toolbar.component';

import { LayoutModule } from '@angular/cdk/layout';
import {
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule
 } from '@angular/material';

@NgModule({
   declarations: [
      AppComponent,
      NavigationComponent,
      TopComponent,
      FooterComponent,
      HomeComponent,
      ToolbarComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      LayoutModule,
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      MatCardModule,
      MatGridListModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
