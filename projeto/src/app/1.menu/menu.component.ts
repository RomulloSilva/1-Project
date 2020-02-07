import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../serviço/produtos.service';

//Importar a classe de usuario.
import { Router } from '@angular/router';
import { Globals } from '../model/Globals';
//npm install jquery --save
//npm install @types/jquery
//importação do jquery
import * as $ from 'jquery';



/**Importações utilizadas na tarefa 10, que valida o login do Administrador*/
import { AdministradorService } from '../serviço/administrador.service';
import { Token } from '../model/Token';
import { Projeto } from '../model/Projeto';
import { Administrador } from '../model/Administrador';
//utilizamos o router tambem.
/**Imposrtações para validar login de investidor e Empreendedor */
import { Investidor } from '../model/Investidor';
import { Empreendedor } from '../model/Empreendedor';
import { EmpreendedorService } from '../serviço/empreendedor.service';
import { InvestidorService } from '../serviço/investidor.service';
/**FIM**/

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [Globals]

})
export class MenuComponent implements OnInit {



  //Varáveis de validação.

  public inputEmail: string;
  public inputPassword: string;
  private confirmaSenha: string;
  public msgNome: string = null;
  public msgEmail: string = null;
  public msgTelefone: string = null;
  public msgSenha: string = null;
  public msgSenha1: string = null;
  public msgSenha2: string = null;
  public msgConfirmaSenha: string = null;
  //------------INVESTIDOR--------//
  private nomeInvest: string;//gui-validandologin2=criando variaveis de validação de login
  private emailInvest: string;//gui-validandologin2=criando variaveis de validação de login
  private telefoneInvest: string;
  private senhaInvest: string;
  private confirmaSenhaInvest: string;
  public msgNomeInvest: string = null;
  public msgEmailInvest: string = null;
  public msgTelefoneInvest: string = null;
  public msgSenhaInvest: string = null;
  public msgSenhaInvest1: string = null;
  public msgSenhaInvest2: string = null;
  public msgConfirmaSenhaInvest: string = null;
  public idResposta: String = null;





  //variavel de invocação dos objetos.
  public investidor: Investidor = new Investidor();
  public invLogado: boolean = false;
  public empreendedor: Empreendedor = new Empreendedor();
  public empLogado: boolean = false;
  public trocaMenu: number;

  //Variável que é usada para retirar dados que só podem ser utilizados qquando logado.
  public estaLogado: boolean = false;

  //Variáveis do administrador
  public admnistrador: Administrador = new Administrador();
  public admLogado: boolean = false;




  constructor(private busca: ProdutosService, private srv: ProdutosService, private router: Router, private adm: AdministradorService, private inv: InvestidorService, private emp: EmpreendedorService) { }


  ngOnInit() {

    //Salvando o Token no localStorage
    if (localStorage.getItem("admToken")) {
      this.router.navigate(['/perfil']);
    }

    if(!Globals.INVESTIDOR){
      this.inv.recuperarPorToken(localStorage.getItem("strInvTk")).subscribe((res:Investidor) => {
        Globals.INVESTIDOR = res;
        this.investidor = res;

      });
    }
    if(!Globals.EMPREENDEDOR){
      this.emp.recuperarPorTokenEmp(localStorage.getItem("strInvTk")).subscribe((res:Empreendedor) => {
        Globals.EMPREENDEDOR = res;
        this.empreendedor = res;

      });
    }

    this.switchMenu()


  }
  //gui-validandologin3=esta função compara os dados e valida (compara a api com os dados inseridos nos inputs do form de login)
  public efetuaLogin() {
    if (this.inputEmail == "ADM@adm.com" && this.inputPassword == "12345") {
      this.admnistrador.emailADM = this.inputEmail;
      this.admnistrador.senhaADM = this.inputPassword;
      this.adm.loginAdm(this.admnistrador).subscribe((res: Administrador) => {
        console.log("Administrador logado")

        //var que faz os componentes de ADM aparecer.
        
        //Rota para levar ao componente perfil onde postamos os projetos.
        this.router.navigate(['home']);
        
        this.trocaMenu = 1;
        this.invLogado = false;
        this.empLogado = false;
        this.admLogado = true;
        $('#fecharModal').click();
        alert("Administrador logado");
      },
        (err) => {
          console.log("Não conectado");
          alert("Senha ou email do Administrador errados")
        })
    } else {

      this.investidor.email = this.inputEmail;
      this.investidor.senha = this.inputPassword;


      this.inv.loginInvest(this.investidor).subscribe((res: Token) => {
        console.log("Conectado");
        localStorage.setItem("strInvTk",res.construindoToken);
        $('#fecharModal').click();
        alert("investidor logado");
        this.trocaMenu = 3;
        this.invLogado = true;
        this.empLogado = false;
        this.admLogado = false; 
        this.router.navigate(['/home'])
      }, (erro) => {
        console.log("Não conectado");
        alert("Senha ou email incorretos.");
      })

  }
}

  public loginEmp() {
    this.empreendedor.emailEmp = this.inputEmail;
    this.empreendedor.senhaEmp = this.inputPassword;

    this.emp.loginEmpre(this.empreendedor).subscribe((res: Token) => {
      console.log("Conectado");
      localStorage.setItem("strEmpTk",res.construindoToken);
      $('#fecharModal').click();
      alert("empreendedor logado");
      this.trocaMenu = 2;
      this.invLogado = false;
      this.empLogado = true;
      this.admLogado = false; 
      this.router.navigate(['/home'])

    }, (erro) => {
      console.log("Não conectado");
      alert("Senha ou email incorretos.");
    })


  }

  // Cria função que envia os dados e tem mensagem de erro caso o email seja duplicado e outra de sucesso.(tem de ser fora do ngOnInit).
  enviarDados() {
    this.emp.loginEmpre(this.empreendedor).subscribe(
      res => {
        console.log(res);
        alert("Bem-vindo ao B.lieveOn " + this.empreendedor.nomeEmp);
      },
      error => {
        console.log(error);
        alert("Erro ao enserir");
      }
    );
  }

  logout() {
    this.trocaMenu = 0;
    this.admLogado = false;
    this.invLogado = false;
    this.empLogado = false;
    localStorage.removeItem("strInvTk");
    localStorage.removeItem("strEmpTk");
    this.router.navigate(['home'])


  }




  //Funções de validação.
  private forcaSenha() {
    if (this.empreendedor.senhaEmp.indexOf("@") >= 0 && this.empreendedor.senhaEmp.length >= 10 || this.empreendedor.senhaEmp.indexOf("#") >= 0 && this.empreendedor.senhaEmp.length >= 10 || this.empreendedor.senhaEmp.indexOf("$") >= 0 && this.empreendedor.senhaEmp.length >= 10 || this.empreendedor.senhaEmp.indexOf("%") >= 0 && this.empreendedor.senhaEmp.length >= 10 || this.empreendedor.senhaEmp.indexOf("&") >= 0 && this.empreendedor.senhaEmp.length >= 10) {
      this.msgSenha1 = "Senha Forte!";
      this.msgSenha2 = null;
      this.idResposta = "msgCorreta"
      this.msgSenha = null;
    } else if (this.empreendedor.senhaEmp.length < 10) {
      this.msgSenha2 = "Senha Fraca!";
      this.msgSenha1 = null;
      this.idResposta = "msgErro"
      this.msgSenha = null;
    }
  }

  private validacao() {
    var u = 0;
    var regex = /[0-9]/;

    if (this.empreendedor.nomeEmp == "" || this.empreendedor.nomeEmp == null || regex.test(this.empreendedor.nomeEmp) || this.empreendedor.nomeEmp.indexOf(" ") == -1) {
      this.msgNome = "Digite um nome válido.";
      u++;
    } else {
      this.msgNome = null;
    }
    if (this.empreendedor.emailEmp == "" || this.empreendedor.emailEmp == null || this.empreendedor.emailEmp.indexOf("@") == -1 || this.empreendedor.emailEmp.indexOf(".com") == -1) {

      this.msgEmail = "Digite um e-mail válido.";
      u++;
    } else {
      this.msgEmail = null;
    }
    var tel = Number(this.empreendedor.telefoneEmp);
    if (this.empreendedor.telefoneEmp == null || this.empreendedor.telefoneEmp.length != 11 || isNaN(tel)) {
      this.msgTelefone = "Digite um telefone válido.";
      u++;
    } else {
      this.msgTelefone = null;
    }
    if (this.empreendedor.senhaEmp == "" || this.empreendedor.senhaEmp == null) {
      this.msgSenha = "Digite uma senha."
      this.idResposta = "msgErro"
      this.msgSenha1 = null;
      this.msgSenha2 = null;
      u++
    } else {
      this.msgSenha = null;
    }

    if (this.confirmaSenha != this.empreendedor.senhaEmp || this.confirmaSenha == null) {
      this.msgConfirmaSenha = "Senhas incompatíveis.";
      u++
    } else {
      this.msgConfirmaSenha = null;
    }

    if (u < 1) {

      this.enviarDados();
    }
  }
  private switchMenu() {
    this.trocaMenu = 0;
    if (this.admLogado == true) {
      this.trocaMenu = 1;
    }
    if (this.empLogado == true) {
      this.trocaMenu = 2;
    }
    if (this.invLogado == true) {
      this.trocaMenu = 3;
    }
  }

  //---------------------------Funções do investidor--------------------------------//

  private forcaSenhaInvest() {
    if (this.investidor.senha.indexOf("@") >= 0 && this.investidor.senha.length >= 10 || this.investidor.senha.indexOf("#") >= 0 && this.investidor.senha.length >= 10 || this.investidor.senha.indexOf("$") >= 0 && this.investidor.senha.length >= 10 || this.investidor.senha.indexOf("%") >= 0 && this.investidor.senha.length >= 10 || this.investidor.senha.indexOf("&") >= 0 && this.investidor.senha.length >= 10) {
      this.msgSenhaInvest1 = "Segurança: Forte!";
      this.msgSenhaInvest2 = null;
      this.idResposta = "msgCorreta"
      this.msgSenhaInvest = null;
    } else if (this.investidor.senha.length < 10) {
      this.msgSenhaInvest2 = "Segurança: Fraca.";
      this.msgSenhaInvest1 = null;
      this.idResposta = "msgErro"
      this.msgSenhaInvest = null;
    }
  }


  private validacaoInvestidor() {
    var u = 0;
    var regex = /[0-9]/;

    if (this.investidor.nome == "" || this.investidor.nome == null || regex.test(this.investidor.nome)) {
      this.msgNomeInvest = "Digite seu nome completo.";
      u++;
    } else {
      this.msgNomeInvest = null;
    }
    if (this.investidor.email == "" || this.investidor.email == null || this.investidor.email.indexOf("@") == -1 || this.investidor.email.indexOf(".com") == -1) {

      this.msgEmailInvest = "Digite um e-mail válido";
      u++;
    } else {
      this.msgEmailInvest = null;
    }
    var tel = Number(this.investidor.telefone);
    if (this.investidor.telefone == null || this.investidor.telefone.length != 11 || isNaN(tel)) {
      this.msgTelefoneInvest = "Digite um telefone válido.";
      u++;
    } else {
      this.msgTelefoneInvest = null;
    }
    if (this.investidor.senha == "" || this.investidor.senha == null) {
      this.msgSenhaInvest = "Digite uma senha."
      this.idResposta = "msgErro"
      this.msgSenhaInvest1 = null;
      this.msgSenhaInvest2 = null;
      u++
    } else {
      this.msgSenhaInvest = null;
    }

    if (this.confirmaSenhaInvest != this.investidor.senha || this.confirmaSenhaInvest == null) {
      this.msgConfirmaSenhaInvest = "Senhas incompatíveis.";
      u++
    } else {
      this.msgConfirmaSenhaInvest = null;
    }

    if (u < 1) {

      alert("Bem-vindo ao B.lieveOn " + this.investidor.nome);


    }
  }
}