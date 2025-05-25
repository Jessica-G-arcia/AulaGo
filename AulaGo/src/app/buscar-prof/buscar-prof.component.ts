import { Component, OnInit } from '@angular/core';
import { MenuLateralComponent } from '../menu-lateral/menu-lateral.component';
import { MenuSuperiorComponent } from '../menu-superior/menu-superior.component';
import { FormBuilder, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buscar-prof',
  imports: [MenuLateralComponent, MenuSuperiorComponent, CommonModule, FormsModule],
  templateUrl: './buscar-prof.component.html',
  styleUrl: './buscar-prof.component.css'
})
export class BuscarProfComponent implements OnInit {


  searchTerm: string = '';
  loading: boolean = false;

  // Arrays originais (todos os dados)
  alunos: any[] = [];

  // Arrays para exibição
  alunosFiltrados: any[] = [];

  // Filtros temporários (não aplicados até clicar no botão)
  filtrosTemporarios = {
    rating: 0,
    idiomas: [] as string[],
    nivel: [] as string[],
    modalidades: [] as string[],
    metodologias: [] as string[]
  };

  // Filtros atualmente aplicados
  filtrosAplicados = {
    rating: 0,
    idiomas: [] as string[],
    nivel: [] as string[],
    modalidades: [] as string[],
    metodologias: [] as string[]
  };

  // Arrays para as opções dos filtros
  idiomas: string[] = ['Inglês', 'Espanhol', 'Francês', 'Alemão', 'Italiano', 'Japonês'];
  nivel: string[] = ['Iniciante', 'Intermediário', 'Avançado'];
  modalidades: string[] = ['Presencial', 'Online', 'Híbrido'];
  metodologias: string[] = ['Conversação', 'Gramática', 'Imersão', 'Lúdica', 'Tradicional'];

  currentRating: number = 0; // Para o rating temporário

  ngOnInit(): void {
    this.carregarAlunos();
  }

  carregarAlunos(): void {
    this.loading = true;

    // Simulando dados de exemplo
    setTimeout(() => {
      this.alunos = [
        {
          id: 1,
          nome: 'Matheus Oliveira',
          idade: 27,
          rating: 5,
          idioma: 'Inglês',
          modalidade: 'Presencial',
          nivel: 'Intermediário',
          metodologia: 'Conversação',
          distancia: '1.2km',
          foto: '/matheus.png'
        },
        {
          id: 2,
          nome: 'Sofia Almeida',
          idade: 18,
          rating: 5,
          idioma: 'Inglês',
          modalidade: 'Híbrido',
          nivel: 'Avançado',
          metodologia: 'Preparação para exames',
          distancia: '4km',
          foto: '/SofiaAlmeida.png'
        },
        {
          id: 3,
          nome: 'Bruno Costa',
          idade: 35,
          rating: 4,
          idioma: 'Inglês',
          modalidade: 'Online',
          nivel: 'Avançado',
          metodologia: 'Foco em negócios',
          distancia: '0km',
          foto: '/BrunoCosta.png'
        },
        {
          id: 4,
          nome: 'Mariana Lopes',
          idade: 27,
          rating: 4,
          idioma: 'Inglês',
          modalidade: 'Online',
          nivel: 'Intermediário',
          metodologia: 'Conversação e foco em viagens',
          distancia: '0km',
          foto: '/MarianaLopes.png'
        },
        {
          id: 5,
          nome: 'Gabriela Nunes',
          idade: 19,
          rating: 3,
          idioma: 'Inglês',
          modalidade: 'Presencial',
          nivel: 'Intermediário',
          metodologia: 'Conversação',
          distancia: '8km',
          foto: '/GabrielaNunes.png'
        },
        {
          id: 6,
          nome: 'João Martins',
          idade: 24,
          rating: 3,
          idioma: 'Inglês',
          modalidade: 'Online',
          nivel: 'Intermediário',
          metodologia: 'Conversação e foco em viagens',
          distancia: '0km',
          foto: '/JoaoMartins.png'
        },
        {
          id: 7,
          nome: 'Juliana Alves',
          idade: 41,
          rating: 4,
          idioma: 'Inglês',
          modalidade: 'Híbrido',
          nivel: 'Intermediário',
          metodologia: 'Foco em viagens',
          distancia: '2.9km',
          foto: '/JulianaAlves.png'
        },
        {
          id: 8,
          nome: 'Thiago Pereira',
          idade: 36,
          rating: 4,
          idioma: 'Inglês',
          modalidade: 'Presencial',
          nivel: 'Iniciante',
          metodologia: 'Gramática',
          distancia: '3.7km',
          foto: '/ThiagoPereira.png'
        },
        {
          id: 9,
          nome: 'Fernanda Souza',
          idade: 31,
          rating: 5,
          idioma: 'Inglês',
          modalidade: 'Online',
          nivel: 'Avançado',
          metodologia: 'Conversação',
          distancia: '1.5km',
          foto: '/FernandaSouza.png'
        }
      ];

      this.loading = false;
      // Inicialmente, mostra todos os alunos
      this.aplicarFiltrosAtuais();
    }, 1000); // Simula 1 segundo de carregamento
  }

  // Busca por texto (aplicada imediatamente)
  buscarAlunos(): void {
    this.aplicarFiltrosAtuais();
  }

  // Métodos para filtros temporários (não aplicam imediatamente)
  setStars(rating: number): void {
    this.currentRating = rating;
    this.filtrosTemporarios.rating = rating;
  }

  toggleLanguage(item: string): void {
    // Determina qual array usar baseado no tipo do item
    let array: string[];

    if (this.idiomas.includes(item)) {
      array = this.filtrosTemporarios.idiomas;
    } else if (this.nivel.includes(item)) {
      array = this.filtrosTemporarios.nivel;
    } else if (this.modalidades.includes(item)) {
      array = this.filtrosTemporarios.modalidades;
    } else if (this.metodologias.includes(item)) {
      array = this.filtrosTemporarios.metodologias;
    } else {
      return;
    }

    const index = array.indexOf(item);
    if (index > -1) {
      array.splice(index, 1);
    } else {
      array.push(item);
    }
  }

  aplicarFiltros(): void {
    this.filtrosAplicados = {
      rating: this.filtrosTemporarios.rating,
      idiomas: [...this.filtrosTemporarios.idiomas],
      nivel: [...this.filtrosTemporarios.nivel],
      modalidades: [...this.filtrosTemporarios.modalidades],
      metodologias: [...this.filtrosTemporarios.metodologias]
    };

    // Aplica os filtros
    this.aplicarFiltrosAtuais();

    // Fecha o offcanvas (opcional)
    this.fecharOffcanvas();
  }

  // Limpa todos os filtros
  limparFiltros(): void {
    // Limpa filtros temporários
    this.filtrosTemporarios = {
      rating: 0,
      idiomas: [],
      nivel: [],
      modalidades: [],
      metodologias: []
    };

    // Limpa filtros aplicados
    this.filtrosAplicados = {
      rating: 0,
      idiomas: [],
      nivel: [],
      modalidades: [],
      metodologias: []
    };

    this.currentRating = 0;

    // Reaplica (mostrará todos os alunos)
    this.aplicarFiltrosAtuais();
  }

  // Aplica os filtros atualmente definidos
  private aplicarFiltrosAtuais(): void {
    let alunosFiltrados = [...this.alunos];

    // Filtro por texto de busca
    if (this.searchTerm && this.searchTerm.trim()) {
      const termo = this.searchTerm.toLowerCase().trim();
      alunosFiltrados = alunosFiltrados.filter(aluno =>
        aluno.nome.toLowerCase().includes(termo) ||
        aluno.idioma.toLowerCase().includes(termo) ||
        aluno.modalidade.toLowerCase().includes(termo) ||
        aluno.nivel.toLowerCase().includes(termo) ||
        aluno.metodologia.toLowerCase().includes(termo)
      );
    }

    // Filtro por rating
    if (this.filtrosAplicados.rating > 0) {
      alunosFiltrados = alunosFiltrados.filter(aluno =>
        aluno.rating === this.filtrosAplicados.rating
      );
    }

    // Filtro por idiomas
    if (this.filtrosAplicados.idiomas.length > 0) {
      alunosFiltrados = alunosFiltrados.filter(aluno =>
        this.filtrosAplicados.idiomas.includes(aluno.idioma)
      );
    }

    // Filtro por nível
    if (this.filtrosAplicados.nivel.length > 0) {
      alunosFiltrados = alunosFiltrados.filter(aluno =>
        this.filtrosAplicados.nivel.includes(aluno.nivel)
      );
    }

    // Filtro por modalidade
    if (this.filtrosAplicados.modalidades.length > 0) {
      alunosFiltrados = alunosFiltrados.filter(aluno =>
        this.filtrosAplicados.modalidades.includes(aluno.modalidade)
      );
    }

    // Filtro por metodologia
    if (this.filtrosAplicados.metodologias.length > 0) {
      alunosFiltrados = alunosFiltrados.filter(aluno =>
        this.filtrosAplicados.metodologias.includes(aluno.metodologia)
      );
    }

    this.alunosFiltrados = alunosFiltrados;
  }

  // Método auxiliar para exibir as estrelas
  getStarsArray(count: number): number[] {
    return Array(count).fill(0);
  }

  constructor(private fb: FormBuilder, private router: Router) { }

  conferirAluno(aluno: any): void {
    if (aluno.id == 1) {
      console.log('Conferindo aluno:', aluno);
      this.router.navigate(['/perfil-aluno'])
    }
  }

  private fecharOffcanvas(): void {
    const offcanvas = document.getElementById('filtroOffcanvas');

  }
}