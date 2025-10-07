import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})

export class HomePage {
  num1: string = '';
  num2: string = '';
  result: number | null = null;
  operation: string = '';

  constructor(private router: Router){
    console.log('✅ Entró a la calculadora (HomePage)');
  }


  calculate(op: 'sum' | 'sub' | 'mul' | 'div' | 'salir') {
    if (op === 'salir'){
      this.router.navigate(['/login']);
      return;
    }    
    
    
    const a = Number(this.num1);
    const b = Number(this.num2);

    if (isNaN(a) || isNaN(b)) {
      this.result = null;
      this.operation = 'Error: valores inválidos';
      return;
    }

    if (op === 'sum') {
      this.result = a + b;
      this.operation = 'Suma';
    }else if (op === 'sub'){
      this.result = a - b;
      this.operation = 'Resta';
    }else if (op === 'mul'){
      this.result = a * b;
      this.operation = 'Multiplicacion';
    }else if (op === 'div'){
      this.result = a / b;
      this.operation = 'Division';
    }
  }
}
