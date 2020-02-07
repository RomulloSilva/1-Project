import { Component, OnInit } from '@angular/core';
/**Importação para editar empreendedor */
import {Empreendedor} from '../model/Empreendedor';
import {EmpreendedorService} from '../serviço/empreendedor.service';
import { ActivatedRoute } from '@angular/router';//necessário para ativar a rota dos links.

@Component({
  selector: 'app-edita-user',
  templateUrl: './edita-user.component.html',
  styleUrls: ['./edita-user.component.css']
})
export class EditaUserComponent implements OnInit {

  public empreendedor: Empreendedor = new Empreendedor();
  private idEmp: number;

  constructor(private rota: ActivatedRoute, private busca: EmpreendedorService) { }

  //Aqui fica no OnInit porque deve ser inicado junto com a página.
  ngOnInit() {

    this.idEmp = this.rota.snapshot.params["idEmp"];
    console.log("Veio com o parâmetro o valor = " + this.idEmp);

    this.busca.mostraEmpreId(this.idEmp).subscribe((res: Empreendedor) => {
      this.empreendedor = res;
      console.log("RECUPERADO!");
      console.log(this.empreendedor);
    });
  }


  enviarAlteracoes() {
    this.busca.atualizarEmpre(this.empreendedor).subscribe(
      (res) => {
        alert("Atualizado com sucesso");
      },
      (err) => {
        alert("Erro ao atualizar");
        console.log(err);
      });
  }



}
