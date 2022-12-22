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
import { MedicoComponent } from './componentes/hospitalUberlandia/medico/medico/medico.component';
import { PerfilComponent } from './componentes/hospitalUberlandia/medico/perfil/perfil.component';


import { AdminguardService } from './service/admin-guard/admin-guard.service';
import { GuardService } from './service/guard/guard.service';
import { TrocaDePlantoesComponent } from './componentes/hospitalUberlandia/medico/troca-de-plantoes/troca-de-plantoes.component';
import { AceitarPlantaoComponent } from './componentes/hospitalUberlandia/medico/aceitar-plantao/aceitar-plantao.component';
import { PlantoesParaTrocaComponent } from './componentes/hospitalUberlandia/medico/plantoes-para-troca/plantoes-para-troca.component';

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
                 { path:'medico', component: MedicoComponent,
                //    canActivate: [GuardService],
                     children: [
                     {path: 'perfil', component: PerfilComponent},
                     {path: 'trocas/:id', component: TrocaDePlantoesComponent},
                     {path: 'troca', component: PlantoesParaTrocaComponent},
                     {path: 'aceitar/:id', component: AceitarPlantaoComponent},


                               ],
                  }
              ]
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
