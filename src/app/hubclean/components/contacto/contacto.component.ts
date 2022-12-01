import { Component, OnInit } from '@angular/core';

import swal from'sweetalert2';
import { CorreoContactoService } from '../../service/correo-contacto.service';

export interface Correo{
  name:string,
  email:string,
  mensaje:string
};

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  correo:Correo = {
    name:'',
    email:'',
    mensaje:''
  };


  constructor(private correoSvc:CorreoContactoService) { }

  spinner:boolean = false;

  ngOnInit(): void {
  }

  enviarCorreo(form:any){
    this.spinner = true

    this.correoSvc.enviarCorreo(this.correo).subscribe(res => {
      this.spinner = false;
      swal.fire({
        position: 'center',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
        icon: 'success',
        title: 'Correo enviado',
        text:`Pronto te contacteremos`,
        showConfirmButton: false,
        timer: 2500
      });
    },
    error => {
      this.spinner = false;
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Mesaje no enviado. Vuelva a intentarlo',
      });
    });
    form.reset();
  };

  

}
