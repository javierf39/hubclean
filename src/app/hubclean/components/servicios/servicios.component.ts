import { Component, OnInit } from '@angular/core';

export interface Servicio{
  nombre:string,
  img:string,
  descripcion:string[]
};

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  limpiezas:string[] = ['SERVICIOS AREAS CRITICAS - ',
    'SERVICIOS AREAS NO CRITICAS - ',
    'IMAGENOLOGÍA Y RAYOS COMPLETOS - ',
    'CENTRO ATENCIÓN URGENCIAS - ',
    'POLI PROGRAMADO - ',
    'KINESIOLOGIA (GYM) - ',
    'UNIDAD DE CUIDADOS INTENSIVOS - ',
    'RECUPERACIÓN - ',
    'PABELLONES - ',
    'PABELLÓN Y RECUPERACIÓN AMBULATORIA - ',
    'HOPITALIZACIÓN HABITACIONES - ',
    'BAÑOS DE PACIENTES - ',
    'AREAS VERDES'];

    servicios:Servicio[] = [
      {
        nombre:'Limpieza y sanitización de áreas clínicas.',
        img:'assets/img/areas-clinicas.jpg',
        descripcion:[
          'Lavado y abrillantado de pisos', 'Sanitización y limpieza completa de los baños públicos y privados', 'Desinfección áreas atención de pacientes (ambulatorios y hospitalizados)', 'Desinfección y limpieza de superficies y paredes', 'Terminales a los servicios clínicos críticos y no críticos', 'Green Cleaning (exteriores)'
        ]
      },
      {
        nombre:'Limpieza y sanitización de oficinas.',
        img:'assets/img/areas-oficinas.jpg',
        descripcion:[
          'Zonas administrativas', 'Oficinas', 'Recepciones', 'Salas de estar y vestuarios', 'Otros'
        ]
      },
      {
        nombre:'Asesorías en gestión de equipos.',
        img:'assets/img/gestion de equipos.jpg',
        descripcion:[
          'Capacitación para equipos de primera línea en impronta corporativa', 'Capacitación para equipos de alto rendimiento, y gestión de personas', 'Capacitación en mejora de propuestas de valor y cadena de eficiencia'
        ]
      }
    ];

  servicioModal:Servicio[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  mostrarInfoModal(nombre:string){
    this.servicioModal = [];
    this.servicios.forEach((servicio) => {
      if(servicio.nombre == nombre){
        this.servicioModal.push(servicio)
      };
    });
  };

}
