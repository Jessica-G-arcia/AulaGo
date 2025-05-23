import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuSuperiorComponent } from '../menu-superior/menu-superior.component';
import { MenuLateralComponent } from '../menu-lateral/menu-lateral.component';

@Component({
  selector: 'app-perfil-professor-visao-aluno',
  imports: [CommonModule, RouterLink,RouterLinkActive, MenuSuperiorComponent, MenuLateralComponent],
  templateUrl: './perfil-professor-visao-aluno.component.html',
  styleUrl: './perfil-professor-visao-aluno.component.css'
})
export class PerfilProfessorVisaoAlunoComponent {
  professor = {
    nome: 'Fernanda Dias',
    titulo: 'Professora de Inglês',
    tempoRegistro: '10 meses',
    avaliacoes: 150,
    idiomaAula: 'Aulas de Inglês',
    modalidade: 'Híbrida',
    valorPresencial: 150.00,
    valorOnline: 100.00,
    descricao: 'Sou a Fernanda, tenho 30 anos, moro em Sorocaba e sou professora particular de inglês. Amo ensinar e busco sempre adaptar as aulas ao perfil de cada aluno, com uma abordagem dinâmica, personalizada e focada em resultados reais. Também estou sempre disposta a dar aulas online ou presenciais, conforme a preferência de cada aluno. Atendo diferentes objetivos, como conversação, reforço escolar, inglês para viagens ou entrevistas de emprego. Será um prazer te ajudar a evoluir no inglês com leveza e eficiência!',
    metodologia1: 'Minhas aulas são pensadas para se adaptarem ao perfil de cada aluno. Antes de tudo, gosto de entender quais são os objetivos, se é para viagens, trabalho, estudos ou simplesmente para desenvolver mais segurança ao falar.',
    metodologia2: 'A partir disso, monto um plano personalizado, focando nas principais habilidades: conversação, compreensão, vocabulário e gramática.',
    metodologia3: 'Utilizo materiais variados, como textos, vídeos, músicas e exercícios práticos, sempre buscando trazer situações reais do dia a dia para dentro da aula.',
  };

  avaliacoes = [
    {
      nome: 'Mariana Lopes',
      foto: '/aluno1.png',
      comentario: 'A Fernanda é uma professora incrível! As aulas são leves, bem explicadas e me ajudam muito a evoluir no inglês e ganhar mais segurança para falar o idioma.',
      estrelas: 5
    },
    {
      nome: 'Bruno Costa',
      foto: '/aluno2.png',
      comentario: 'Antes das aulas com a Fernanda, eu tinha muita dificuldade em falar inglês. Hoje, me sinto muito mais confiante. Só tenho a agradecer!',
      estrelas: 5
    },
    {
      nome: 'Matheus Oliveira',
      foto: '/aluno3.png',
      comentario: 'As aulas com a Fernanda têm me ajudado muito. Agora me comunico melhor em inglês em reuniões e ganhei mais segurança para lidar com clientes internacionais.',
      estrelas: 5
    }
  ];

  // método: gera estrelas com base na pontuação
  gerarEstrelas(quantidade: number): string {
    return '★'.repeat(quantidade);
  }
}
