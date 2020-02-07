/**Aqui estão os caminhos e métodos onde acontecem o CRUD para configurar os Projetos postados */
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Projeto } from '../model/Projeto';


@Injectable({
  providedIn: 'root'
})
export class ProjetosService {

  constructor(private http : HttpClient) { }


  public listarProjetos(){
    return this.http.get("http://localhost:8080/projetos/todos");
  }

  public listarProjetoId(id: number){
    return this.http.get("http://localhost:8080/projetos/"+id);
  }

  public adicionarProjeto(projeto: Projeto){
    console.log(projeto);
    return this.http.post("http://localhost:8080/projeto/novo", projeto);
  }

  public exibirTodosProjetos(){
    console.log("Exibiu todos Aeeeeh");
    return this.http.get("http://localhost:8080/projetos/todos");
  }

  public atualizarProjeto(projeto: Projeto){
    console.log(projeto);
    return this.http.put("http://localhost:8080/projetos/atualizar", projeto)
  }

}
