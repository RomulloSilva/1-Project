import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';// importação para validar o formulário.
import {HttpClientModule} from '@angular/common/http';// importação para injetar serviço pela url(objeto).

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './1.menu/menu.component';
import { RodapeComponent } from './2.rodape/rodape.component';
import { HomeComponent } from './3.home/home.component';
import { LoginComponent } from './4.login/login.component';
import { PerfilComponent } from './7.perfil/perfil.component';
import { ListaPComponent } from './8.lista-p/lista-p.component';
import { PaginaDoacaoComponent } from './10.pagina-doacao/pagina-doacao.component';
import { SobreComponent } from './11.sobre/sobre.component';
import { FormularioAComponent } from './6.formulario-a/formulario-a.component';
import { ListagemComponent } from './listagem/listagem.component';
import { EditaUserComponent } from './edita-user/edita-user.component';
import {FaqComponent} from './faq/faq.component';
import { EditaProjetoComponent } from './edita-projeto/edita-projeto.component';
import { CadastrarProjetoComponent } from './cadastrar-projeto/cadastrar-projeto.component';
import { LoginInvComponent } from './login-inv/login-inv.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    HomeComponent,
    LoginComponent,
    FormularioAComponent,
    PerfilComponent,
    ListaPComponent,
    PaginaDoacaoComponent,
    SobreComponent,
    ListagemComponent,
    EditaUserComponent,
    FaqComponent,
    EditaProjetoComponent,
    CadastrarProjetoComponent,
    LoginInvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /**forms para validar o  */
    FormsModule,
    ReactiveFormsModule,
    /* http para o serviço de buscar o objeto numa url */
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
