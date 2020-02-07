import { Component, OnInit } from '@angular/core';


/**Importações utilizadas na tarefa 10,CRUD*/
import {Projeto} from '../model/Projeto';
import { ProjetosService } from '../serviço/projetos.service';
import { ActivatedRoute } from '@angular/router';

//utilizamos o router tambem PAREI AQUI.


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {


  constructor(private proj: ProjetosService, private rota: ActivatedRoute) { }
  public idBusca: number;
  public projeto: Projeto=null;
  public all: Projeto[];
  public pesquisa: number;
  

  ngOnInit() {
    this.pegaProj();
  }
  

   pegaProj(){
    this.proj.listarProjetos().subscribe((postOut: Projeto[]) => {
      this.all = postOut;
      console.log(this.all);
    })
  }

   
   
   private pesquisar(){
   
    if( this.idBusca != null){
      this.proj.listarProjetoId(this.idBusca).subscribe((res:Projeto)=>{
        this.projeto = res;
        this.pesquisa = null;
      },(err)=>{
        this.projeto = null;
        alert("Projeto pesquisado não esta em nosso banco")
      })
    }
    console.log(this.projeto);
  }

}
