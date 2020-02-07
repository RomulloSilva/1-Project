import { Injectable } from '@angular/core';
//Importação para o crud.
import {HttpClient} from '@angular/common/http';
import {Categoria} from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }
}


/** Aqui ficaram os métodos com os caminhos */





/*public recuperaTodasCat(){
return this.http.get("http://localhost:8080/categoria/todos");

}

public recuperaDetalheCat(idCat:number){
  return this.http.get("http://localhost:8080/categoria/"+idCat);

}

public insereCat(categoria:Categoria){
  return this.http.post("http://localhost:8080/categoria/novo",usuario);

}*/




/**-------------------------------------- */