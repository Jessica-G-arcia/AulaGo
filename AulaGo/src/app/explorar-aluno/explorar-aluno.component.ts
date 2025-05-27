import { Component, OnInit } from '@angular/core';
import { MenuSuperiorAlunoComponent } from "../menu-superior-aluno/menu-superior-aluno.component";
import { MenuLateralAlunoComponent } from "../menu-lateral-aluno/menu-lateral-aluno.component";
import { FormBuilder, FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-explorar-aluno',
    imports: [CommonModule, FormsModule, MenuSuperiorAlunoComponent, MenuLateralAlunoComponent],
    templateUrl: './explorar-aluno.component.html',
    styleUrl: './explorar-aluno.component.css'
})
export class ExplorarAlunoComponent {
   searchTerm: string = '';
  loading: boolean = false;

  professores: any[] = [];
  professoresFiltrados: any[] = [];

  filtrosTemporarios = {
    rating: 0,
    idiomas: [] as string[],
    nivel: [] as string[],
    modalidades: [] as string[],
    metodologias: [] as string[]
  };

  filtrosAplicados = {
    rating: 0,
    idiomas: [] as string[],
    nivel: [] as string[],
    modalidades: [] as string[],
    metodologias: [] as string[]
  };

  idiomas: string[] = ['Inglês'];
  modalidades: string[] = ['Presencial', 'Online', 'Híbrido'];
  metodologias: string[] = ['Conversação', 'Gramática', 'Imersão', 'Lúdica', 'Tradicional'];

  currentRating: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.carregarProfessores();
  }

  carregarProfessores(): void {
    this.loading = true;

    setTimeout(() => {
      this.professores = [
        {
          id: 1,
          nome: 'Fernanda Dias',
          idade: 30,
          rating: 5,
          idioma: 'Inglês',
          modalidade: 'Hibrido',
          valorHora: 'R$ 50,00',
          metodologia: 'Conversação',
          distancia: '1.2km',
          foto: 'fernanda.png'
        },
        {
          id: 2,
          nome: 'Sarah Mendes',
          idade: 29,
          rating: 5,
          idioma: 'Inglês',
          modalidade: 'online',
          valorHora: 'R$ 70,00',
          metodologia: 'Conversação para viagens',
          distancia: '4km',
          foto: 'prof_sarah.png'
        },
        {
          id: 3,
          nome: 'Lucas Santana',
          idade: 35,
          rating: 4,
          idioma: 'Inglês',
          modalidade: 'Presencial',
          valorHora: 'R$ 60,00',
          metodologia: 'Gramática e conversação',
          distancia: '5km',
          foto: 'prof_lucas.png'
        },
        {
          id: 4,
          nome: 'Rafael Teixeira',
          idade: 38,
          rating: 4,
          idioma: 'Inglês',
          modalidade: 'Hibrido',
          valorHora: 'R$ 50,00',
          metodologia: 'Conversação do dia a dia',
          distancia: '4,5km',
          foto: 'prof_rafael.png'
        },
        {
          id: 5,
          nome: 'Amanda Ribeiro',
          idade: 26,
          rating: 3,
          idioma: 'Inglês',
          modalidade: 'Hibrido',
          valorHora: 'R$ 55,00',
          metodologia: 'Inglês para negócios',
          distancia: '6km',
          foto: 'prof_amanda.png'
        },
        {
          id: 6,
          nome: 'Daniel Costa',
          idade: 42,
          rating: 3,
          idioma: 'Inglês',
          modalidade: 'Online',
          valorHora: 'R$ 70,00',
          metodologia: 'Preparação para exames TOEFL e IELTS',
          distancia: '1km',
          foto: 'prof_daniel.png'
        },
        {
          id: 7,
          nome: 'Helena Duarte',
          idade: 40,
          rating: 4,
          idioma: 'Inglês',
          modalidade: 'Presencial',
          valorHora: 'R$ 65,00',
          metodologia: 'Gramatica e leitura avançada',
          distancia: '2.9km',
          foto: 'prof_Helena.png'
        },
        {
          id: 8,
          nome: 'Leonardo Silva',
          idade: 30,
          rating: 4,
          idioma: 'Inglês',
          modalidade: 'Presencial',
          valorHora: 'R$ 70,00',
          metodologia: 'Gramática',
          distancia: '3.7km',
          foto: 'professor_leo.png'
        },
        {
          id: 9,
          nome: 'Larissa Mendes',
          idade: 21,
          rating: 5,
          idioma: 'Inglês',
          modalidade: 'Online',
          valorHora: 'R$ 65,00',
          metodologia: 'Conversação',
          distancia: '1.5km',
          foto: 'prof_larissa.png'
        }
      ];
      this.loading = false;
      this.aplicarFiltros();
    }, 1000);
  }

  buscarProfessores(): void {
    this.aplicarFiltros();
  }

  setStars(rating: number): void {
    this.currentRating = rating;
    this.filtrosTemporarios.rating = rating;
  }

  toggleFiltro(item: string): void {
    let array: string[] | undefined;

    if (this.idiomas.includes(item)) {
      array = this.filtrosTemporarios.nivel;
    } else if (this.modalidades.includes(item)) {
      array = this.filtrosTemporarios.modalidades;
    } else if (this.metodologias.includes(item)) {
      array = this.filtrosTemporarios.metodologias;
    }

    if (!array) return;

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

    this.filtrarProfessores();
    this.fecharOffcanvas();
  }

  limparFiltros(): void {
    this.filtrosTemporarios = {
      rating: 0,
      idiomas: [],
      nivel: [],
      modalidades: [],
      metodologias: []
    };

    this.filtrosAplicados = {
      rating: 0,
      idiomas: [],
      nivel: [],
      modalidades: [],
      metodologias: []
    };

    this.currentRating = 0;
    this.filtrarProfessores();
  }

  private filtrarProfessores(): void {
    let listaFiltrada = [...this.professores];

    if (this.searchTerm.trim() !== '') {
      const termo = this.searchTerm.toLowerCase().trim();
      listaFiltrada = listaFiltrada.filter(professor =>
        professor.nome.toLowerCase().includes(termo) ||
        (professor.idioma && professor.idioma.toLowerCase().includes(termo)) ||
        (professor.modalidade && professor.modalidade.toLowerCase().includes(termo)) ||
        (professor.nivel && professor.nivel.toLowerCase().includes(termo)) ||
        (professor.metodologia && professor.metodologia.toLowerCase().includes(termo))
      );
    }

    if (this.filtrosAplicados.rating > 0) {
      listaFiltrada = listaFiltrada.filter(professor =>
        professor.rating === this.filtrosAplicados.rating
      );
    }

    if (this.filtrosAplicados.idiomas.length > 0) {
      listaFiltrada = listaFiltrada.filter(professor =>
        this.filtrosAplicados.idiomas.includes(professor.idioma)
      );
    }

    if (this.filtrosAplicados.nivel.length > 0) {
      listaFiltrada = listaFiltrada.filter(professor =>
        professor.nivel && this.filtrosAplicados.nivel.includes(professor.nivel)
      );
    }

    if (this.filtrosAplicados.modalidades.length > 0) {
      listaFiltrada = listaFiltrada.filter(professor =>
        this.filtrosAplicados.modalidades.includes(professor.modalidade)
      );
    }

    if (this.filtrosAplicados.metodologias.length > 0) {
      listaFiltrada = listaFiltrada.filter(professor =>
        this.filtrosAplicados.metodologias.includes(professor.metodologia)
      );
    }

    this.professoresFiltrados = listaFiltrada;
  }

  getStarsArray(count: number): number[] {
    return Array(count).fill(0);
  }

  conferirProfessor(professor: any): void {
    if (professor.id === 1) {
      console.log('Conferindo professor:', professor);
      this.router.navigate(['/perfil-professor-visao-aluno']);
    }
  }

  private fecharOffcanvas(): void {
    const offcanvas = document.getElementById('filtroOffcanvas');
  }
}
