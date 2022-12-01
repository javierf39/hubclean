import { Component, OnInit } from '@angular/core';

declare var $:any;

export interface Link{
    enlace:string,
    nombre:string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  

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

  activo!:string;
  fondoBlanco:boolean=false;

  constructor() { }

  ngOnInit(): void {
    $(window).scroll(function(){
      if($(window).scrollTop() > 450){
        $('.navbar').addClass('fondoBlanco');
      }else{
        $('.navbar').removeClass('fondoBlanco');
      }
    })
  }

  linkActivo(e:any){
    this.activo = e.target.innerHTML;
  };

}
