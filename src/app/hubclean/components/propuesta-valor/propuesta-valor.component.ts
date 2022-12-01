import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propuesta-valor',
  templateUrl: './propuesta-valor.component.html',
  styleUrls: ['./propuesta-valor.component.scss']
})
export class PropuestaValorComponent implements OnInit {

  beneficios:string[] = ['Baja Rotación', 'Inducción e impronta', 'Gestión Comprometida', 'Comunicación Eficiente', 'Compromiso']

  constructor() { }

  ngOnInit(): void {
  }

}
