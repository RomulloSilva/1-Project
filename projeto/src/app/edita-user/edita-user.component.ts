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

  public empreendedor: Empreendedor[];

  constructor(private rota: ActivatedRoute, private busca: EmpreendedorService) { }

  //Aqui fica no OnInit porque deve ser inicado junto com a página.
  ngOnInit() {
    this.pegarEmp();
    
  }


  pegarEmp(){
    this.busca.mostrarTodosEmpre().subscribe((empre: Empreendedor[])=>{
      this.empreendedor = empre;
      console.log(this.empreendedor);
    })
  }



}
