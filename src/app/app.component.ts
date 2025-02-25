import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true, // Si usas standalone, agrega FormsModule en imports
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Aplicacion de calculadora';
  operandoA!: number;
  operandoB!: number;
  resultado!: number;

  onSumar(): void {
    this.resultado = this.operandoA + this.operandoB;
  }

  onRestar(): void {
    this.resultado = this.operandoA - this.operandoB;
  }

  onMultiplicar(): void {
    this.resultado = this.operandoA * this.operandoB;
  }

  onDividir(): void {
    this.resultado = this.operandoA / this.operandoB;
  }
}
