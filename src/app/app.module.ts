import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { idgsComponent } from './UTL/idgs.component';
import { ievnComponent } from './UTL/ievn.component';
import { IrdComponent } from './UTL/ird/ird.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SumaComponent } from './UTL/formularios/suma/suma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperasModule } from './UTL/formularios/operas/operas.module';
import { MenuComponent } from './UTL/menu/menu.component';
import { AlumnosFilterPipe } from './UTL/alumnos-filter.pipe';
import { AlumnoReactiveComponent } from './formularios/alumno-reactive/alumno-reactive.component';
import { AppRoutingModule } from 'app.routing.module';


@NgModule({
  declarations: [
    AppComponent,
    idgsComponent,
    ievnComponent,
    IrdComponent,
    SumaComponent,
    MenuComponent,
    AlumnosFilterPipe,
    AlumnoReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OperasModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
