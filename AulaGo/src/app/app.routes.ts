import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ExplorarComponent } from './explorar/explorar.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ChatComponent } from './chat/chat.component';
import { ContinuarCadastroComponent } from './continuar-cadastro/continuar-cadastro.component';
import { HomeComponent } from './home/home.component';
import { NotificacoesComponent } from './notificacoes/notificacoes.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { PerfilAlunoComponent } from './perfil-aluno/perfil-aluno.component';
import { PerfilProfessorComponent } from './perfil-professor/perfil-professor.component';
import { AulasComponent } from './aulas/aulas.component';
import { AgendaComponent } from './agenda/agenda.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'aulas', component: AulasComponent},
    {path: 'agenda', component: AgendaComponent},
    {path: 'explorar', component: ExplorarComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'chat', component: ChatComponent},
    {path: 'continuar-cadastro', component:ContinuarCadastroComponent},
    {path: 'home', component: HomeComponent},
    {path: 'notificacoes', component: NotificacoesComponent},
    {path: 'pagamento', component: PagamentoComponent},
    {path: 'perfil-aluno', component: PerfilAlunoComponent},
    {path: 'perfil-professor', component: PerfilProfessorComponent},
    // {path: '**', component: }, 







    
];
