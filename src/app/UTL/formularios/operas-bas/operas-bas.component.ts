import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {

  num1!:number;
  num2!:number;

  resultado!:number;

  operaSelect:string = 'suma';

  tipoOperacion = [
    'suma',
    'resta',
    'multiplicacion',
    'division'
  ];

  calcular(){
    switch(this.operaSelect){

      case 'suma': this.resultado = this.num1 + this.num2;
        break;

      case 'resta': this.resultado = this.num1 - this.num2;
        break;

      case 'multiplicacion': this.resultado = this.num1 * this.num2;
        break;

      case 'division': this.resultado = this.num1 / this.num2;
        break;
    }
  }

}
