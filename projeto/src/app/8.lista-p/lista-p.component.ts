import { Component, OnInit } from '@angular/core';
import { Subscriber, from } from 'rxjs';


/**Importações */
import {Projeto} from '../model/Projeto';
import {ProjetosService} from '../serviço/projetos.service';


@Component({
  selector: 'app-lista-p',
  templateUrl: './lista-p.component.html',
  styleUrls: ['./lista-p.component.css']
})
export class ListaPComponent implements OnInit {

  public idProj: number;
  public projeto: Projeto=null;
  public post: Projeto[];
  public listaProjeto: Projeto;

  constructor(private ProjetosService: ProjetosService) { }

 
  

  ngOnInit() {
    this.pegaPost();
  }


  pegaPost(){
    this.ProjetosService.listarProjetos().subscribe((postOut: Projeto[]) => {
      this.post = postOut;
      console.log(this.post);
    })
  }

  private pesquisar(){
    if(this.idProj != null){
      this.ProjetosService.listarProjetoId(this.idProj).subscribe((res:Projeto)=>{
        this.projeto = res;
      },(err)=>{
        this.projeto = null;
        alert("Projeto pesquisado não esta em nosso banco")
      })
    }/*else{
      this.projeto = null;

    }*/
    console.log(this.projeto);
  }


}
