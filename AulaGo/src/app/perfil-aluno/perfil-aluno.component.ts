
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-perfil-aluno',
  imports: [CommonModule, RouterLink,RouterLinkActive],
  templateUrl: './perfil-aluno.component.html',
  styleUrl: './perfil-aluno.component.css'
})
export class PerfilAlunoComponent {

  aluno = {
    nome: 'Matheus Oliveira',
    tempoRegistro: '10 meses',
    aulasConcludas: 'Aulas concluídas: 100',
    idioma: 'Inglês',
    modalidade: 'Presencial',
    nivel: 'Intermediário',
    descricao: 'Olá! Me chamo Matheus, tenho 27 anos e trabalho como analista de dados em uma grande empresa em Sorocaba. Estou em busca de aulas particulares de inglês que sejam focadas nas minhas dificuldades e objetivos. Quero melhorar meu vocabulário e aprimorar minhas habilidades no idioma, tanto para meu crescimento profissional quanto pessoal.',
    tituloAvaliacoes: 'Avaliações de Matheus'
  };

  // Adicionar dados de avaliações dos alunos
  avaliacoes = [
    {
      nome: 'Fernanda Dias',
      foto: '/img-professora.png',
      comentario: 'Aluno exemplar! O Matheus tem uma ótima posturaa nas aulas, está sempre buscando formas de melhorar. Recomendo muito!',
      estrelas: 5
    },
    {
      nome: 'Lucas Fernandes',
      foto: '/LucasFernandes.png',
      comentario: 'Hoje focamos em vocabulário para o ambiente de trabalho e o Matheus se saiu muito bem! Ele está cada vez mais preparado para usar o inglês no dia a dia profissional.',
      estrelas: 5
    },
    {
      nome: 'João Lucas Oliveira',
      foto: '/JoaoLucas.png',
      comentario: 'Matheus tem um ótimo ritmo de aprendizagem. Cada aula ele traz mais segurança na fala e está ampliando muito bem o vocabulário.',
      estrelas: 5
    },
    {
      nome: 'Fernando Pires',
      foto: '/FernandoPires.png',
      comentario: 'You are amazing , Matheus. It was a pleasure to be your teacher. Keep up the good work!',
      estrelas: 5
    },
    {
      nome: 'Emanuel Silva',
      foto: '/EmanuelSilva.png',
      comentario: 'Parabéns pelo progresso, Matheus!',
      estrelas: 5
    }
  ];

  // Método para gerar estrelas com base na pontuação
  gerarEstrelas(quantidade: number): string {
    return '★'.repeat(quantidade);
  }
}
