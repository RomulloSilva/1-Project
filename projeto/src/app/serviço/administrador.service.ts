import { Injectable } from '@angular/core';
import {Administrador} from '../model/Administrador';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor(private http: HttpClient) { }

  public loginAdm(administrador: Administrador){
    return this.http.post("http://localhost:8080/login/administrador", administrador)
  }



}
