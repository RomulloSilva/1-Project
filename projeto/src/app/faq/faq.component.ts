import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {



  /**Variaveis para validação dos campos a central de ajuda */
  private nome: string;
  private email: string;
  private msg: string;
  private telefone: string;
  /**Variáveis utilizadas para exibir mensagens de erro. */
  private _msgNome: string = null;
  private _msgEmail: string = null;
  private _msgTelefone: string = null;
  private _msgTexto: string = null;



  constructor() { }

  ngOnInit() {
  }


  /**Função ativada pelo botão, que faz a verificação dos campos */

  private pesquisar(){
    var i =0;

    if (this.nome == "" || this.nome == null || this.nome.indexOf(" ") == -1) {
      this._msgNome = "Digite um nome válido.";
      i++;
    } else {
      this._msgNome = null;
    }

    if (this.email == "" || this.email == null || this.email.indexOf("@") == -1 || this.email.indexOf(".com") == -1) {

      this._msgEmail = "Digite um e-mail válido.";
      i++;
    } else {
      this._msgEmail = null;
    }

    if (this.telefone == "" || this.telefone == null || this.telefone.length < 14) {
      this._msgTelefone = "Digite um número válido.";
      i++;
    } else {
      this._msgTelefone = null;
    }

    if (this.msg == "" || this.msg == null) {
      this._msgTexto = "Digite uma mensagem válida.";
      i++;
    } else {
      this._msgTexto = null;
    }

    if(i<1){
      alert("Dúvida enviada com sucesso!");
    }



  }
  private formataTel(){

    if(this.telefone.length == 1 ){
      this.telefone ="(" + this.telefone;
    }
    if(this.telefone.length == 3){
      this.telefone = this.telefone + ")";
    }
    if(this.telefone.length == 4){
      this.telefone = this.telefone + " ";
    }
    if(this.telefone.length == 10){
      this.telefone = this.telefone + "-";
    }
  }







}
