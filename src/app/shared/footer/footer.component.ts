import { Component, OnInit } from '@angular/core';
import { Link } from '../menu/menu.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  links:Link[] = [
    {
      enlace:'#inicio',
      nombre:'Inicio'
    },
    {
      enlace:'#nosotros',
      nombre:'Nosotros'
    },
    {
      enlace:'#servicios',
      nombre:'Servicios'
    },
    {
      enlace:'#propuesta',
      nombre:'Propuesta de valor'
    },
    {
      enlace:'#equipo',
      nombre:'Equipo de trabajo'
    },
    {
      enlace:'#contacto',
      nombre:'Contacto'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
