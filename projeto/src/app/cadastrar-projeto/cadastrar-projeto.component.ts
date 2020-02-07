import { Component, OnInit } from '@angular/core';

import {Projeto} from '../model/Projeto';
import { HttpClient } from '@angular/common/http';
import {ProjetosService} from '../serviço/projetos.service';
import { Router } from '@angular/router';
import { Empreendedor } from '../model/Empreendedor';
import { Investidor } from '../model/Investidor';
import {Categoria} from '../model/Categoria';
import * as $ from 'jquery';
import { Globals } from '../model/Globals';



@Component({
  selector: 'app-cadastrar-projeto',
  templateUrl: './cadastrar-projeto.component.html',
  styleUrls: ['./cadastrar-projeto.component.css']
})
export class CadastrarProjetoComponent implements OnInit {


  
  nomeProj: string;
  valorProj: string; 
  idDono: number;
  descricaoProj: string;
  linkFoto: string;
  apoiador: number;
  categoriaProjeto:number;
  projeto: Projeto = new Projeto();  
  _mensagem: string = null;
  _aprovado: boolean;

  constructor(private proj: ProjetosService, private router: Router, ) { }

  ngOnInit() {
  }

  public confirmaDados() {
    if (this.linkFoto == null || this.nomeProj == null || this.descricaoProj == null || this.valorProj == null  || this.idDono == null  || this.categoriaProjeto == null) {
      console.log(
        this.nomeProj,
        this.linkFoto,
        this.descricaoProj,
        this.valorProj,
        this.idDono,
        this.apoiador,
        this.categoriaProjeto
      )
      this._mensagem = "Todos os dados precisam ser preenchidos.";
      this._aprovado=false;
    } else {
      this.projeto.linkFoto = this.linkFoto;
      this.projeto.nomeProj = this.nomeProj;
      this.projeto.descricaoProj = this.descricaoProj;
      this.projeto.valorProj = this.valorProj;
      this.projeto.dono = new Empreendedor();
      this.projeto.categoriaProjeto = new Categoria();
      this.projeto.dono.idEmp = this.idDono;
      this.projeto.categoriaProjeto.idCat = this.categoriaProjeto;
      /*this.projeto.apoiador = ;
      this.projeto.dono = ;
      this.projeto.categoriaProjeto = ;*/
      this._mensagem = "Você confirma os dados inseridos?";
      this._aprovado = true;

      console.log(this.projeto);
    }
  }
  public enviarProjeto() {
    if(this._aprovado==true){
    this.proj.adicionarProjeto(this.projeto).subscribe(res => {
      $('#fecharModal').click();
      this.router.navigate(['perfil']);
    },
      (err => {
        alert("Erro ao realizar o cadastro");
      }))}else{
        $('#fecharModal').click();
      }

  }
}


