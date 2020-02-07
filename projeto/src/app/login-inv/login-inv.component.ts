import { Component, OnInit } from '@angular/core';

import{Globals} from '../model/globals';
import {Router} from '@angular/router';
import{Investidor} from '../model/Investidor';
import {InvestidorService} from '../serviço/investidor.service';

@Component({
  selector: 'app-login-inv',
  templateUrl: './login-inv.component.html',
  styleUrls: ['./login-inv.component.css']
})
export class LoginInvComponent implements OnInit {


  investidor: Investidor = new Investidor();



  constructor( private router: Router, private imp: InvestidorService) { }

  ngOnInit() {

      console.log(localStorage.getItem("strInvTk"));
      if(!localStorage.getItem("strInvTk")){
        this.router.navigate(['/home']);
      }else{
        console.log("Recuperando dados do Investidor");
        this.imp.recuperarPorToken(localStorage.getItem("strInvTk")).subscribe((res: Investidor)=>{
          console.log("Recuperei o empreendedor")
          this.investidor = res;
          console.log(res);
        })
      }




  }

}