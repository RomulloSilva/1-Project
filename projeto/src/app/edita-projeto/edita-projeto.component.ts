import { Component, OnInit } from '@angular/core';

//importações da tarefa 10.
import {ProjetosService} from '../serviço/projetos.service';
import {Projeto} from '../model/Projeto';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edita-projeto',
  templateUrl: './edita-projeto.component.html',
  styleUrls: ['./edita-projeto.component.css']
})
export class EditaProjetoComponent implements OnInit {


  public projeto: Projeto = new Projeto();
 

  //var
  private idAlimenta: number;
	private  imagensAlimenta: string; 
	private  tituloAlimenta: string; 
	private  descricaoAlimenta: string; 
	private  resumoAlimenta: string; 
  private  metaAlimenta: string; 
  private  empreendedorAlimenta: string; 
  private  emailAlimenta: string; 
  private  telefoneAlimenta: string; 

  //var
  
  constructor(private rota: ActivatedRoute, private busca: ProjetosService) { }

  ngOnInit() {
    this.idAlimenta = this.rota.snapshot.params["id"];
    this.busca.listarProjetoId(this.idAlimenta).subscribe((res:Projeto)=>{
      this.projeto = res;
      this.idAlimenta =this.projeto.idProj;
      this.imagensAlimenta =this.projeto.linkFoto;
      this.tituloAlimenta =this.projeto.nomeProj;
      this.descricaoAlimenta =this.projeto.descricaoProj;
      this.resumoAlimenta =this.projeto.descricaoProj;
      this.metaAlimenta =this.projeto.valorProj;
      this.empreendedorAlimenta =this.projeto.dono.nomeEmp;
      this.emailAlimenta =this.projeto.dono.emailEmp;
      this.telefoneAlimenta =this.projeto.dono.telefoneEmp;
    },(err)=>{
      alert("Não funcionou a exibição do produto")
    })

    
  }



 public enviarAlteracoes(){

  
      this.projeto.idProj = this.idAlimenta;
      this.projeto.linkFoto =  this.imagensAlimenta;
      this.projeto.nomeProj = this.tituloAlimenta;
      this.projeto.descricaoProj = this.descricaoAlimenta;
      this.projeto.descricaoProj = this.resumoAlimenta;
      this.projeto.valorProj = this.metaAlimenta;
      this.busca.atualizarProjeto(this.projeto).subscribe((res)=>{
        alert("Atualizado com sucesso");
      },
      (err)=>{
        alert("Sem sucesso")
      });
   
 }







}
