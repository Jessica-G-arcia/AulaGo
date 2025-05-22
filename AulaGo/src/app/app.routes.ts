import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ExplorarComponent } from './explorar/explorar.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ChatComponent } from './chat/chat.component';
import { ContinuarCadastroComponent } from './continuar-cadastro/continuar-cadastro.component';
import { NotificacoesComponent } from './notificacoes/notificacoes.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { PerfilAlunoComponent } from './perfil-aluno/perfil-aluno.component';
import { PerfilProfessorComponent } from './perfil-professor/perfil-professor.component';
import { AulasComponent } from './aulas/aulas.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ProfessorHomeComponent } from './professor-home/professor-home.component';
import { HomeAlunoComponent } from './home-aluno/home-aluno.component';
import { AluasProfessorComponent } from './aluas-professor/aulas-professor.component';
import { NotificacoesAlunosComponent } from './notificacoes-alunos/notificacoes-alunos.component';
import { MenuSuperiorAlunoComponent } from './menu-superior-aluno/menu-superior-aluno.component';
import { MenuLateralAlunoComponent } from './menu-lateral-aluno/menu-lateral-aluno.component';
import { PerfilAlunoVisaoProfessorComponent } from './perfil-aluno-visao-professor/perfil-aluno-visao-professor.component';
import { TermosPoliticaComponent } from './termos-politica/termos-politica.component';
import { ProfessorContinuarCadastroComponent } from './professor-continuar-cadastro/professor-continuar-cadastro.component';
import { ConfirmacaoDePagamentoComponent } from './confirmacao-de-pagamento/confirmacao-de-pagamento.component';
import { ChatProfessorComponent } from './chat-professor/chat-professor.component';
import { EditarPerfilProfComponent } from './editar-perfil-prof/editar-perfil-prof.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'aulas', component: AulasComponent},
    {path: 'aulas-professor', component: AluasProfessorComponent},
    {path: 'agenda', component: AgendaComponent},
    {path: 'explorar', component: ExplorarComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'chat', component: ChatComponent},
    {path: 'chat-professor', component: ChatProfessorComponent},
    {path: 'continuar-cadastro', component:ContinuarCadastroComponent},
    { path: 'professor-continuar-cadastro', component: ProfessorContinuarCadastroComponent},
    {path: 'home-aluno', component: HomeAlunoComponent},
    {path: 'notificacoes', component: NotificacoesComponent},
    {path: 'notificacoes-alunos', component: NotificacoesAlunosComponent},
    {path: 'pagamento', component: PagamentoComponent},
    {path: 'confirmacao-de-pagamento', component: ConfirmacaoDePagamentoComponent},
    {path: 'perfil-aluno', component: PerfilAlunoComponent},
    {path: 'perfil-aluno-visao-professor', component: PerfilAlunoVisaoProfessorComponent},
    {path: 'perfil-professor', component: PerfilProfessorComponent},
    {path: 'home-professor', component: ProfessorHomeComponent},
    {path: 'menu-superior-aluno', component: MenuSuperiorAlunoComponent},
    {path: 'menu-lateral-aluno', component: MenuLateralAlunoComponent},
    { path: 'termos-politica', component: TermosPoliticaComponent}
    { path: 'editar-perfil-prof', component: EditarPerfilProfComponent},
    { path: 'editar-perfil-aluno', component: EditarPerfilProfComponent},

    // {path: '**', component: }, 




];
