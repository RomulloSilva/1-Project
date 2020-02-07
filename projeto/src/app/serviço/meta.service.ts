import { Injectable } from '@angular/core';
//Importações do crud.
import {HttpClient} from '@angular/common/http';
import {Meta} from '../model/Meta';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(private http: HttpClient) { }


/**Espaço para os métodos */
public adicionaMeta(meta: Meta){
  return this.http.post("http://localhost:8080/meta/novo", meta);
}

public recuperarMetas(){
  return this.http.get("http://localhost:8080/meta/todos");
}

public atualizarMeta(meta: Meta){
  return this.http.put("http://localhost:8080/meta/atualizar", meta);
}

public recuperaMetaId(idMeta: number){
  return this.http.get("http://localhost:8080/meta/"+idMeta);
}

}
