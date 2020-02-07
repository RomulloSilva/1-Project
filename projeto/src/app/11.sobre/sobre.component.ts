import { Component, OnInit } from '@angular/core';

/**Importações para os projetos */
import{Projeto} from'../model/Projeto';
import {ProjetosService} from '../serviço/projetos.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  constructor(private proj: ProjetosService) { }
  private post1: Projeto=null;
  private post2:  Projeto=null;
  private post3:  Projeto=null;

  ngOnInit() {
    this.pegarPost1();
    this.pegarPost2();
    this.pegarPost3();
  }

  pegarPost1(){
    this.proj.listarProjetoId(6).subscribe((procura: Projeto)=>{
      this.post1 = procura;
    })
  }

  pegarPost2(){
    this.proj.listarProjetoId(10).subscribe((procura: Projeto)=>{
      this.post2 = procura;
    }) 
  }

  pegarPost3(){
    this.proj.listarProjetoId(14).subscribe((procura: Projeto)=>{
      this.post3 = procura;
    }) 
  }


  

}
