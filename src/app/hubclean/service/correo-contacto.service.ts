import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Correo } from '../components/contacto/contacto.component';



@Injectable({
  providedIn: 'root'
})
export class CorreoContactoService {

  url:string = 'https://correonodemailer.onrender.com/email';

  constructor(private http: HttpClient) { }

  enviarCorreo(correo:Correo){
    return this.http.post(this.url, correo);
  };

}
