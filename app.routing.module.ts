
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { IrdComponent } from 'src/app/UTL/ird/ird.component';
import { AlumnoReactiveComponent } from 'src/app/formularios/alumno-reactive/alumno-reactive.component';
import { CinepolisModule } from 'src/app/cinepolis/cinepolis.module';

const routes:Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'IRD', component:IrdComponent},
  {path:'Formulario', component:AlumnoReactiveComponent},
  // {path:'**', component: PagenotfountComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

