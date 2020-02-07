import { Component, OnInit } from '@angular/core';

//Importações do serviços e do objeto.
import {Investidor} from '../model/Investidor';
import {InvestidorService} from '../serviço/investidor.service';


@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  public investidor: Investidor[];

 

  constructor( private busca: InvestidorService) { }

  ngOnInit() {
         this.pegarInv();
    
    }



       pegarInv(){
        this.busca.recuperaTodos().subscribe((invest: Investidor[])=>{
          this.investidor=invest;
          console.log(this.investidor);
        })
      }

  }
