import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { idgsComponent } from './UTL/idgs.component';
import { ievnComponent } from './UTL/ievn.component';
import { IrdComponent } from './UTL/ird/ird.component';

@NgModule({
  declarations: [
    AppComponent,
    idgsComponent,
    ievnComponent,
    IrdComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
