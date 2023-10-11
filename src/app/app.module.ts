import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestElementrefComponent } from './test-elementref/test-elementref.component';

@NgModule({
  declarations: [
    AppComponent,
    TestElementrefComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
