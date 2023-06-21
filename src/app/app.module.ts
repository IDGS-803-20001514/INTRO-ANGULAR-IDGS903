import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { idgsComponent } from './UTL/idgs.component';
import { ievnComponent } from './UTL/ievn.component';
import { IrdComponent } from './UTL/ird/ird.component';
import { FormsModule } from '@angular/forms';
import { SumaComponent } from './UTL/formularios/suma/suma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperasModule } from './UTL/formularios/operas/operas.module';


@NgModule({
  declarations: [
    AppComponent,
    idgsComponent,
    ievnComponent,
    IrdComponent,
    SumaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OperasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
