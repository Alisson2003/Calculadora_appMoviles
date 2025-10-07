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
  value: number = 0;
  result: number | null = null;
  operation: string = '';

  constructor(private router: Router) {}

  calculate(op: 'sum' | 'sub' | 'mul' | 'div' | 'sqrt' | 'sin' | 'cos' | 'tan' | 'salir' | string) {
    if (op === 'salir') {
      this.router.navigate(['/login']);
      return;
    }

    const a = Number(this.num1);
    const b = Number(this.num2);
    const val = Number(this.value);

    if (['sum', 'sub', 'mul', 'div', 'sqrt'].includes(op) && (isNaN(a) || isNaN(b))) {
      this.result = null;
      this.operation = 'Error: valores inválidos';
      return;
    }

    if (['sin', 'cos', 'tan'].includes(op) && isNaN(val)) {
      this.result = null;
      this.operation = 'Error: valor inválido';
      return;
    }

    const toRadians = (degrees: number) => degrees * (Math.PI / 180);

    switch (op) {
      case 'sum':
        this.result = a + b;
        this.operation = 'Suma';
        break;
      case 'sub':
        this.result = a - b;
        this.operation = 'Resta';
        break;
      case 'mul':
        this.result = a * b;
        this.operation = 'Multiplicación';
        break;
      case 'div':
        if (b === 0) {
          this.result = null;
          this.operation = 'Error: división por cero';
        } else {
          this.result = a / b;
          this.operation = 'División';
        }
        break;
      case 'sqrt':
        this.result = parseFloat(Math.pow(a, b).toFixed(4));
        this.operation = `Potencia: ${a} ^ ${b}`;
        break;
      case 'sin':
        this.result = parseFloat(Math.sin(toRadians(val)).toFixed(4));
        this.operation = `Seno (${val}°)`;
        break;
      case 'cos':
        this.result = parseFloat(Math.cos(toRadians(val)).toFixed(4));
        this.operation = `Coseno (${val}°)`;
        break;
      case 'tan':
        this.result = parseFloat(Math.tan(toRadians(val)).toFixed(4));
        this.operation = `Tangente (${val}°)`;
        break;
      default:
        this.result = null;
        this.operation = 'Operación no válida';
    }
  }
}
