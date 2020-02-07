import { Injectable } from '@angular/core';
//Importações do Crud.
import {HttpClient} from '@angular/common/http';
import {Empreendedor} from '../model/Empreendedor';

@Injectable({
  providedIn: 'root'
})
export class EmpreendedorService {

  constructor(private http: HttpClient) { }

  public adicionarEmpre(empreendedor: Empreendedor){
    return this.http.post("http://localhost:8080/empreendedor/novo", empreendedor);
  }

  public mostrarTodosEmpre(){
    return this.http.get("http://localhost:8080/empreendedor/todos");
  }

public mostraEmpreId(id: number){
  return this.http.get("http://localhost:8080/empreendedor/"+id);
}
 public atualizarEmpre(empreendedor: Empreendedor){
   return this.http.put("http://localhost:8080/empreendedor/atualizar", empreendedor);
 }


 public loginEmpre(empreendedor: Empreendedor){
  return this.http.post("http://localhost:8080/empreendedor/login", empreendedor);
}

  public recuperarPorTokenEmp(token: string){
    return this.http.get("http://localhost:8080/empreendedor/infoDoEmp?token="+ token);
  }

}


