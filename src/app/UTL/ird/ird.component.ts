import { Component } from '@angular/core';

@Component({
  selector: 'app-ird',
  templateUrl: './ird.component.html',
  styleUrls: ['./ird.component.css']
})
export class IrdComponent {

  // alumnos:any[] = []

  imageWith:number = 50
  imageMargin:number = 2;
  muestraImg:boolean = true;
  listaFilter:string = '';

  showImagen():void{
    this.muestraImg =! this.muestraImg;
  }

  alumnos: any[] = [
    {
      "matriucula": 1234,
      "nombre": "Mario",
      "edad": 23,
      "correo": "mario@gmail.com",
      "pago": 129.42,
      "foto": "https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg"
    },
    {
      "matriucula": 2002,
      "nombre": "Dario",
      "edad": 24,
      "correo": "dario@gmail.com",
      "pago": 342.5,
      "foto": "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp"
    },
    {
      "matriucula": 5532,
      "nombre": "Alejandro",
      "edad": 20,
      "correo": "ale@gmail.com",
      "pago": 453.5,
      "foto": "https://m8p8m9h3.stackpathcdn.com/wp-content/uploads/2021/11/que-tipo-de-persona-te-gustaria-ser-730x411-SP.jpg"
    }
  ]

}
