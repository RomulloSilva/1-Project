import { Component, OnInit } from '@angular/core';




/**Importações para os projetos */
import{Projeto} from'../model/Projeto';
import {ProjetosService} from '../serviço/projetos.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private proj: ProjetosService) { }

  private post1:  Projeto=null;
  private post2:  Projeto=null;
  private post3:  Projeto=null;
  private post4:  Projeto=null;
  private post5:  Projeto=null;

  ngOnInit() {
    this.pegarPost1();
    this.pegarPost2();
    this.pegarPost3();
    this.pegarPost4();
  }


  pegarPost1(){
    this.proj.listarProjetoId(1).subscribe((procura: Projeto)=>{
      this.post1 = procura;
    })
  }

  pegarPost2(){
    this.proj.listarProjetoId(2).subscribe((procura: Projeto)=>{
      this.post2 = procura;
    }) 
  }

  pegarPost3(){
    this.proj.listarProjetoId(3).subscribe((procura: Projeto)=>{
      this.post3 = procura;
    }) 
  }

  pegarPost4(){
    this.proj.listarProjetoId(4).subscribe((procura: Projeto)=>{
      this.post4 = procura;
    })
  }






}
