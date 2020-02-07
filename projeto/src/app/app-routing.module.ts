import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './3.home/home.component';
import { LoginComponent } from './4.login/login.component';
import { FormularioAComponent } from './6.formulario-a/formulario-a.component';
import { PerfilComponent } from './7.perfil/perfil.component';
import { ListaPComponent } from './8.lista-p/lista-p.component';
import { PaginaDoacaoComponent } from './10.pagina-doacao/pagina-doacao.component';
import { SobreComponent } from './11.sobre/sobre.component';
import {ListagemComponent} from './listagem/listagem.component';
import {EditaUserComponent} from './edita-user/edita-user.component';
import {FaqComponent} from './faq/faq.component';
import {EditaProjetoComponent} from './edita-projeto/edita-projeto.component';
import {CadastrarProjetoComponent} from './cadastrar-projeto/cadastrar-projeto.component';
import {LoginInvComponent} from './login-inv/login-inv.component';


const routes: Routes = [
  {path: "" , redirectTo: 'home' , pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent  },
  {path: 'formularioA', component: FormularioAComponent },
  {path: 'perfil', component: PerfilComponent },
  {path: 'listaP', component: ListaPComponent},
  {path: 'paginaDoacao/:id', component: PaginaDoacaoComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'listagem', component: ListagemComponent},
  {path: 'editaUser/:id', component: EditaUserComponent},
  {path: 'faq', component:FaqComponent},
  {path: 'editaProjeto/:id', component: EditaProjetoComponent},
  {path: 'cadastrarProjeto', component: CadastrarProjetoComponent},
  {path: 'loginInv', component: LoginInvComponent}
  //chamar a página com os detalhes de um usuário específico pelo ID.
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
