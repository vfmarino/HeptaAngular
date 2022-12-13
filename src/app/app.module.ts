import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/geral/home/home.component';
import { HeaderComponent } from './componentes/geral/header/header.component';
import { FooterComponent } from './componentes/geral/footer/footer.component';
import { Headerh1Component } from './componentes/hospitalUberlandia/headerh1/headerh1.component';
import { AdminComponent } from './componentes/hospitalUberlandia/admin/admin/admin.component';
import { ListaDeUsuariosComponent } from './componentes/hospitalUberlandia/admin/lista-de-usuarios/lista-de-usuarios.component';
import { EditarUsuarioComponent } from './componentes/hospitalUberlandia/admin/editar-usuario/editar-usuario.component';
import { CadastrarUsuarioComponent } from './componentes/hospitalUberlandia/admin/cadastrar-usuario/cadastrar-usuario.component';
import { DashboardComponent } from './componentes/hospitalUberlandia/dashboard/dashboard.component';
import { FinanceiroComponent } from './componentes/hospitalUberlandia/financeiro/financeiro/financeiro.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/hospitalUberlandia/login/login.component';
import { MedicosComponent } from './componentes/hospitalUberlandia/medicos/medicos/medicos.component';
import { HospitalUberlandiaComponent } from './componentes/hospitalUberlandia/hospital-uberlandia/hospital-uberlandia.component';
import { EscalaDePlantoesComponent } from './componentes/hospitalUberlandia/escala-de-plantoes/escala-de-plantoes.component';
import { CommonModule, DatePipe } from '@angular/common';
import { RelatoriosComponent } from './componentes/hospitalUberlandia/financeiro/relatorios/relatorios.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    Headerh1Component,
    AdminComponent,
    ListaDeUsuariosComponent,
    EditarUsuarioComponent,
    CadastrarUsuarioComponent,
    DashboardComponent,
    FinanceiroComponent,
    LoginComponent,
    MedicosComponent,
    HospitalUberlandiaComponent,
    EscalaDePlantoesComponent,
    RelatoriosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
