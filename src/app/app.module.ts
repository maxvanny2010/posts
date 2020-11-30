import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {PostComponent} from './post/post.component';
import {Post2Component} from './post2/post2.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    Post2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
