import { Component, OnInit } from '@angular/core';
//Importação do Globals, para que o componente possa consultar os dados do usuario.
import { Globals } from '../model/Globals';
import { Router } from '@angular/router';
/**importação dos dados do empreendedor */
import { Empreendedor } from '../model/Empreendedor';
import { EmpreendedorService } from '../serviço/empreendedor.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [Globals]
})
export class LoginComponent implements OnInit {


  //var do empreendedor.
  empreendedor: Empreendedor = new Empreendedor();


  constructor(private router: Router, private emp: EmpreendedorService) { }

  ngOnInit() {

    console.log(localStorage.getItem("strEmpTk"));
    if (!localStorage.getItem("strEmpTk")) {
      this.router.navigate(['/home']);
    } else {
       console.log("Recuperando dados do empreendedor");
      this.emp.recuperarPorTokenEmp(localStorage.getItem("strEmpTk")).subscribe((res: Empreendedor) => {
        console.log("recuperei o empreendedor")
        this.empreendedor = res;
        console.log(res);
      })

    }

    /*this.emp.recuperarPorTokenEmp()

    this.empreendedor = Globals.EMPREENDEDOR;
    console.log(this.empreendedor);

    if(!this.empreendedor){
      this.router.navigate(['/home']);
    }else{
       //Permite que os dados do empreendedor sejam utilizados pelo componente.
      this.empreendedor = Globals.EMPREENDEDOR;
    }*/
  }



}
