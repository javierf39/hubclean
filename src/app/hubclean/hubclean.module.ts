import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HubcleanPageComponent } from './components/hubclean-page/hubclean-page.component';
import { PropuestaValorComponent } from './components/propuesta-valor/propuesta-valor.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { InfoEmpresaComponent } from './components/info-empresa/info-empresa.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HubcleanPageComponent,
    PropuestaValorComponent,
    InicioComponent,
    ContactoComponent,
    ServiciosComponent,
    InfoEmpresaComponent,
    EquipoComponent
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  exports:[
    HubcleanPageComponent
  ]
})
export class HubcleanModule { }
