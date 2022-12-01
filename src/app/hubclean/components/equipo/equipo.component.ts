import { Component, OnInit } from '@angular/core';

interface Integrante{
  nombre:string,
  cargo:string,
  especialidad:string,
  img:string
};

export interface Responsabilidades{
  nombre:string,
  cargo:string,
  responsabilidad:string[]
};

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit {

  integrantes:Integrante[] = [
    {
      nombre:'Rafael Miranda',
      cargo:'Gerencia RRHH',
      especialidad:'Especialidad gestión de personas',
      img:'assets/img/integrante.png'
    },
    {
      nombre:'Karen Betancourt',
      cargo:'Gerencia Operaciones',
      especialidad:'Especialidad gestión de proyectos',
      img:'assets/img/integrante_2.png'
    },
    {
      nombre:'Alejandro Labarrera',
      cargo:'Gestión de Personas',
      especialidad:'Experto en Inducción y Team Building',
      img:'assets/img/integrante_3.png'
    },
  ];

  responsabilidades:Responsabilidades[] = [
    {
      nombre:'Rafael Miranda',
      cargo:'Gestión de Personas',
      responsabilidad:['Capacitación de los equipos de trabajo', 'Fidelización del Personal(Bienestar)', 'Reclumiento y selección', 'Remuneraciones']
    },
    {
      nombre:'Rafael Miranda',
      cargo:'Gestión de Finanzas',
      responsabilidad:['Facturación y cobranza', 'Planes de Inversión', 'Proyección y pago de remuneraciones', 'Pago proveedores']
    },
    {
      nombre:'Karen Betancourt',
      cargo:'Gestión de Operaciones',
      responsabilidad:['Planificación de turnos de trabajo', 'Abastecimiento y reabastecimiento de insumos y materiales', 'Adquisión y mantención de uniformes y equipos de aseo profesional']
    },
    {
      nombre:'Alejandro Labarrera',
      cargo:'Cleaners',
      responsabilidad:['Inducción','Impronta', 'Creación de perfiles', 'Motivación y sentido']
    },
  ];

  infoModal:Responsabilidades[] = [];
  

  constructor() { }

  ngOnInit(): void {
  }

  mostrarResponsabilidades(nombre:string){
    this.infoModal = [];
    this.responsabilidades.forEach((responsabilidad) => {
      if(responsabilidad.nombre == nombre){
        this.infoModal.push(responsabilidad)
      };
    });
  };

}
