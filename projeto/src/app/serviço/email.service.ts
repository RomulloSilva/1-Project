import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from '../model/Email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http:HttpClient) { }

  public enviarEmail(email: Email){
    console.log(email);
    return this.http.post("http://localhost:8080/formularioA/email", email )
  }
}