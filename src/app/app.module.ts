import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TestElementrefComponent } from './test-elementref/test-elementref.component';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TestElementrefComponent
  ],
  imports: [
    // CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
