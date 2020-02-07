import { Component, OnInit } from '@angular/core';

//Importações do serviços e do objeto.
import {ProdutosService} from'../serviço/produtos.service';
import {Usuario} from '../model/Usuario';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  public listaUser: Usuario[]//buscar a lista de usuários atraves da classe criada.

  constructor( private busca: ProdutosService) { }

  ngOnInit() {

    //Invocar os serviços, ou seja as funções criadas no Produtos.service:
    this.busca.recuperaTodos().subscribe((res:Usuario[])=>{
      this.listaUser = res;
    })



  }

}
