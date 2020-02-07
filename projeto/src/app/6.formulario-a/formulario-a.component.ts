import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-formulario-a',
  templateUrl: './formulario-a.component.html',
  styleUrls: ['./formulario-a.component.css']
})
export class FormularioAComponent implements OnInit {

  private nome: string;
  private sobrenome: string;
  private email: string;
  private telefone: string;
  private cidade: string;
  private estado: string;
  private msg: string;
  private _msgNome: string = "Nome:";
  private _msgSobrenome: string = "Sobrenome:";
  private _msgEmail: string ="E-mail:";
  private _msgTelefone: string = "Telefone:";
  private _msgCidade: string = "Sua cidade:";
  private _msgEstado: string = null;
  private _msgTexto: string = "Sua mensagem:";

  constructor() { }

  ngOnInit() {

  }
  private pesquisar() {

    var i = 0;

    if (this.nome == "" || this.nome == null) {
      this._msgNome = "Digite um nome válido.";
      i++;
    } else {
      this._msgNome = null;
    }
    if (this.sobrenome == "" || this.sobrenome == null) {
      this._msgSobrenome = "Digite um sobrenome válido.";
      i++;
    } else {
      this._msgSobrenome = null;
    }
    if (this.email == "" || this.email == null || this.email.indexOf("@") == -1) {

      this._msgEmail = "Digite um e-mail válido.";
      i++;
    } else {
      this._msgEmail = null;
    }
    if (this.telefone == "" || this.telefone == null || this.telefone.length < 14) {
      this._msgTelefone = "Insira um número válido.";
      i++;
    } else {
      this._msgTelefone = null;
    }
    if (this.cidade == "" || this.cidade == null) {
      this._msgCidade = "Insira sua Cidade.";
      i++;
    } else {
      this._msgCidade = null;
    }
    if (this.estado == "" || this.estado == null) {
      this._msgEstado = "Selecione seu estado.";
      i++;
    } else {
      this._msgEstado = null;
    }
    if (this.msg == "" || this.msg == null) {
      this._msgTexto = "Insira sua mensagem.";
      i++;
    } else {
      this._msgTexto = null;
    }

    if (i < 1) {
      alert('Sua mensagem foi enviada com sucesso!');
    }

  };
  
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
