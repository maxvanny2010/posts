import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import { StyleDirective } from './derectives/style.directive';

@NgModule({
  declarations: [
    AppComponent,
    StyleDirective,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
