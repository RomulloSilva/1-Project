import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';// para o consume de  web service.
import {Projeto} from '../model/Projeto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }// criamos uma variável chamada de 'http'.


  /*------------------------------------
Criando serviços para os produtos dentro export.------------------------*/
  pegarPostagens():any {
    return this.http.get("http://localhost:8080/projetos/todos");// vai retornar todos os objetos.
  }




  pegarNovasPostagens(idProj: number):any{
    return this.http.get(`http://localhost:8080/projetos/${idProj}`);
    /**Método responsável por exibir as 5 postagens novas na home da página, ou seja toda vez que novas Startup forem cadastradas elas seram exibidas aqui */
  }





  buscarCodigoDoProjeto(idPostagem: number):any {
    return this.http.get(`http://cloud.professorisidro.com.br:8088/postagens/${idPostagem}`);//vai buscar pelo id da postagem.

  }

/*------------------------------------
Criando serviços para o Usuarios dentro do export.------------------------*/

recuperaTodos(){
  //Aqui essa função vai retornar todos os usuários.
  return this.http.get('http://localhost:8080/projetos/todos');

}

recuperaDetalhe(idPorj:number){//Como queremos a info através do id, criamos uma var "id" do tipo number.
    //Essa função vai retornar a informação através do is
    return this.http.get("http://localhost:8080/projetos/"+idPorj);

  }

  public insere(projeto: Projeto){
    //criando o serviço "post" que vai adicionar o cadastro do usuário.
    return this.http.post("http://localhost:8080/projeto/novo",projeto);

  }


  public atualiza(projeto: Projeto){
    return this.http.put("http://localhost:8080",projeto);
  }





  //gui-validandologin1=anuncia o metodo post
 /* public login(usuario: Usuario){
    return this.http.post("##",usuario);
  }*/

}




