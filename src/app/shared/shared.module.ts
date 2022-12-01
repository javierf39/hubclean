import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { BtnArribaComponent } from './btn-arriba/btn-arriba.component';



@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    BtnArribaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MenuComponent,
    FooterComponent,
    BtnArribaComponent
  ]
})
export class SharedModule { }
