import { Component, OnInit } from '@angular/core';
import { Email } from '../model/Email';
import { EmailService } from '../serviço/email.service';
@Component({
  selector: 'app-formulario-a',
  templateUrl: './formulario-a.component.html',
  styleUrls: ['./formulario-a.component.css']
})

export class FormularioAComponent implements OnInit {

  private nome: string;
  private sobrenome: string;
  private fromEmail: string;
  private telefone: string;
  private cidade: string;
  private estado: string;
  private mensagem: string;
  Email: Email = new Email();
  private _msgNome: string = null;
  private _msgSobrenome: string = null;
  private _msgEmail: string =null;
  private _msgTelefone: string = null;
  private _msgCidade: string = null;
  private _msgEstado: string = null;
  private _msgTexto: string = null;
  

  constructor(private srv: EmailService) { }

  ngOnInit() {

  }
  private pesquisar() {

    var i = 0;

    if (this.nome == "" || this.nome == null) {
      this._msgNome = null;
      this._msgNome = "Digite um nome válido:";
      i++;
    } else {
      this._msgNome = null;
    }
    if (this.sobrenome == "" || this.sobrenome == null) {
      this._msgSobrenome = null;
      this._msgSobrenome = "Digite um sobrenome válido:";
      i++;
    } else {
      this._msgSobrenome = null;
    }
    if (this.fromEmail == "" || this.fromEmail == null || this.fromEmail.indexOf("@") == -1) {
      this._msgEmail = null;
      this._msgEmail = "Digite um e-mail válido:";
      i++;
    } else {
      this._msgEmail = null;
    }
    if (this.telefone == "" || this.telefone == null || this.telefone.length < 14) {
      this._msgTelefone = null;
      this._msgTelefone = "Insira um número válido:";
      i++;
    } else {
      this._msgTelefone = null;
    }
    if (this.cidade == "" || this.cidade == null) {
      this._msgCidade = null;
      this._msgCidade = "Insira sua Cidade:";
      i++;
    } else {
      this._msgCidade = null;
    }
    if (this.estado == "Seu estado:" || this.estado == "" || this.estado == null) {
      this._msgEstado = "Escolha um estado:"
      i++;
    } else {
    }
    if (this.mensagem == "" || this.mensagem == null) {
      this._msgTexto = null;
      this._msgTexto = "Insira sua mensagem:";
      i++;
    } else {
      this._msgTexto = null;
    }

    if (i < 1) {
      this.Email.nome = this.nome;
      this.Email.sobrenome = this.sobrenome;
      this.Email.cidade = this.cidade;
      this.Email.estado = this.estado;
      this.Email.fromEmail = this.fromEmail;
      this.Email.mensagem = this.mensagem;
      this.Email.telefone = this.telefone;

      
      this.srv.enviarEmail(this.Email).subscribe(res => {
        alert("E-mail enviado com sucesso");
      },
      err=> {
        alert("erro ao enviar email");
      })
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
