import { Component, OnInit } from '@angular/core';

/**importações para exibir dados de um projeto  */
import { Projeto } from '../model/Projeto';
import { ActivatedRoute } from '@angular/router';//necessário para ativar a rota dos links.
import { ProjetosService } from '../serviço/projetos.service';
import { Investidor } from '../model/Investidor';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../serviço/categoria.service';
import { InvestidorService } from '../serviço/investidor.service';
import {Globals} from '../model/Globals';

@Component({
  selector: 'app-pagina-doacao',
  templateUrl: './pagina-doacao.component.html',
  styleUrls: ['./pagina-doacao.component.css']
})
export class PaginaDoacaoComponent implements OnInit {

  public projeto: Projeto = new Projeto();
  public investidor: Investidor = new Investidor();
  public categoria: Categoria = new Categoria();
  public idProj: number;
  public doacao: boolean;


  constructor(private rota: ActivatedRoute, private busca: ProjetosService, private cat: CategoriaService, private invest: InvestidorService) { }

  ngOnInit() {

    this.idProj = this.rota.snapshot.params["id"]
    console.log("Veio com o parâmetro o valor = " + this.idProj);

    this.busca.listarProjetoId(this.idProj).subscribe((res: Projeto) => {
      this.projeto = res;
      console.log("RECUPERADO");
      console.log(this.projeto);
    });

    if (!Globals.INVESTIDOR){
      this.invest.recuperarPorToken(localStorage.getItem("strInvTk")).subscribe((res:Investidor)=>{
        Globals.INVESTIDOR = res;
        this.investidor = res;
      });
    }

  }


  public doar(){
    
    if(this.projeto.apoiador == null){
      this.projeto.apoiador = Globals.INVESTIDOR;
      console.log(this.projeto);
      this.busca.atualizarProjeto(this.projeto).subscribe((res)=>{
        console.log("atualizado");
      },(err)=>{
        console.log("não atualizou");
      })
      this.doacao = true;
    }else{
      this.doacao = false;
    }
  }











}
