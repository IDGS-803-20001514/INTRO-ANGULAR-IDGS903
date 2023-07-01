import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-reactive',
  templateUrl: './alumno-reactive.component.html',
  styleUrls: ['./alumno-reactive.component.css']
})
export class AlumnoReactiveComponent {

  alumnoForm!:FormGroup;

  alumno:any;

  constructor(private readonly fb: FormBuilder){

    this.alumnoForm = this.initForm();

  }

  onSubmit():void{

    this.obtenerValores();
  }

  obtenerValores():void{
    const matricula = this.alumnoForm.get('matricula')?.value
    const nombre = this.alumnoForm.get('nombre')?.value
    const edad = this.alumnoForm.get('edad')?.value
    const correo = this.alumnoForm.get('correo')?.value
    const pago = this.alumnoForm.get('pago')?.value
    const foto = this.alumnoForm.get('foto')?.value
    const calificacion = this.alumnoForm.get('calif')?.value

    this.alumno = {
      matricula:matricula,
      nombre:nombre,
      edad:edad,
      correo:correo,
      pago:pago,
      foto:foto,
      calificacion:calificacion
    }

    console.log(this.alumno);

  }

  initForm():FormGroup{

    return this.fb.group({
      matricula:['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      nombre:['', [Validators.required, Validators.minLength(3)]],
      edad:[''],
      correo:[''],
      pago:[''],
      foto:[''],
      calif:['']
    });

  }

}
