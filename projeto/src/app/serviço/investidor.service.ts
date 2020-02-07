import { Injectable } from '@angular/core';
//Importações do crud.
import { HttpClient } from '@angular/common/http';
import { Investidor } from '../model/Investidor';

@Injectable({
  providedIn: 'root'
})
export class InvestidorService {

  constructor(private http: HttpClient) { }


  /*Aqui ficaram os métodos*/

  public recuperaTodos() {
    return this.http.get("http://localhost:8080/investidor/todos");
  }

  public recuperaInvId(idInv: number) {
    return this.http.get("http://localhost:8080/investidor/" + idInv);
  }

  public adicionarInvest(investidor: Investidor) {
    return this.http.post("http://localhost:8080/investidor/novo", investidor);
  }

  public atualizarInvest(investidor: Injectable) {
    return this.http.put("http://localhost:8080/investidor/atualizar", investidor)
  }

  public loginInvest(investidor: Investidor) {
    return this.http.post("http://localhost:8080/investidor/login", investidor);

  }


  public recuperarPorToken(token: string) {
    return this.http.get("http://localhost:8080/investidor/infoDoInv?token=" + token);
  }

}
