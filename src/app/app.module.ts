import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {MultPipe} from './pipes/mult.pipe';
import { ActionPipe } from './pipes/action.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MultPipe,
    ActionPipe,
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
