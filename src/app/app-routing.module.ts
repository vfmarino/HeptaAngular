import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/geral/home/home.component';
import { AdminComponent } from './componentes/hospitalUberlandia/admin/admin/admin.component';
import { CadastrarUsuarioComponent } from './componentes/hospitalUberlandia/admin/cadastrar-usuario/cadastrar-usuario.component';
import { EditarUsuarioComponent } from './componentes/hospitalUberlandia/admin/editar-usuario/editar-usuario.component';
import { ListaDeUsuariosComponent } from './componentes/hospitalUberlandia/admin/lista-de-usuarios/lista-de-usuarios.component';
import { DashboardComponent } from './componentes/hospitalUberlandia/dashboard/dashboard.component';
import { EscalaDePlantoesComponent } from './componentes/hospitalUberlandia/escala-de-plantoes/escala-de-plantoes.component';
import { FinanceiroComponent } from './componentes/hospitalUberlandia/financeiro/financeiro/financeiro.component';
import { RelatoriosComponent } from './componentes/hospitalUberlandia/financeiro/relatorios/relatorios.component';
import { HospitalUberlandiaComponent } from './componentes/hospitalUberlandia/hospital-uberlandia/hospital-uberlandia.component';
import { LoginComponent } from './componentes/hospitalUberlandia/login/login.component';
import { MedicosComponent } from './componentes/hospitalUberlandia/medicos/medicos/medicos.component';

import { AdminguardService } from './service/admin-guard/admin-guard.service';
import { GuardService } from './service/guard/guard.service';

const routes: Routes = [

  { path:'', component: HomeComponent},
  { path:'home', component: HomeComponent},


  // APARTIR DAQUI COMEÇA AS ROTAS DO HOSPITAL DE URBERLANDIA
  { path:'hospitalUberlandia', component: HospitalUberlandiaComponent},
  { path:'listarUsuario', component: ListaDeUsuariosComponent},
  { path:'escalaDePlantoes', component: EscalaDePlantoesComponent,
      children: [{ path:'admin', component: AdminComponent,
                    /*canActivate: [AdminguardService],*/
                    children: [
                      {path: 'cadastrar', component: CadastrarUsuarioComponent},
                      {path: 'listaDeMedicos', component: ListaDeUsuariosComponent},

                      {path: 'editarMedico/:id', component: EditarUsuarioComponent}
                      ]
                   },
                 { path:'dashboard', component: DashboardComponent},
                 { path:'login', component: LoginComponent},
                 { path:'financeiro', component: FinanceiroComponent,
                      children: [
                        {path: 'relatorios', component: RelatoriosComponent}]
                 },
                 { path:'medicos', component: MedicosComponent,
                    canActivate: [GuardService],
                    children: [
                     /*   {path: 'perfil', component: PerfilDoMedicoComponent},
                       {path: 'aceitarPlantao/:id/:manha', component: AceitarPlantaoComponent},
                       {path: 'aceitarPlantaoTarde/:id/:tarde', component: AceitarPlantaoTardeComponent},
                       {path: 'aceitarPlantaoNoite/:id/:noite', component: AceitarPlantaoNoiteComponent},
                       {path: 'problemas', component: AbaDeTrocaPlantoesComponent},
                       {path: 'pedirTrocaPlantaoManha/:id', component: PedirTrocaManhaComponent},
                       {path: 'pedirTrocaPlantaoTarde/:id', component: PedirTrocaTardeComponent},
                       {path: 'pedirTrocaPlantaoNoite/:id', component: PedirTrocaNoiteComponent}, */
                               ],
                  }
              ]
  },

  // APARTIR DAQUI TERMINA AS ROTAS DO HOSPITAL DE URBERLANDIA


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
