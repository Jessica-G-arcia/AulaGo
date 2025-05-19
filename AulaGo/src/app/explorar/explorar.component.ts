import { Component, OnInit } from '@angular/core';
// Import CommonModule e FormsModule para ngModel
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <<< ADICIONADO para [(ngModel)]

// Interface AlunoSearchResult (mantida)
interface AlunoSearchResult {
  id: number;
  nome: string;
  idade: number;
  imageUrl: string;
  rating: number;
  detalhes: {
    [key: string]: string;
  };
  // Para facilitar a filtragem, podemos adicionar campos mais estruturados
  // Estes podem ser preenchidos a partir dos 'detalhes' se necessário
  idiomas?: string[]; // Ex: ['Inglês', 'Francês']
  nivel?: string[]; // Ex: ['Avançado', 'Iniciante']
  modalidade?: string; // Ex: 'Online', 'Presencial', 'Híbrida'
  metodologias?: string[]; // Ex: ['Conversação', 'Gramática']
}

// Interface para o estado dos filtros
interface FiltrosAtivos {
  rating: number;
  idiomas: { [key: string]: boolean }; // Ex: { ingles: true, italiano: false, ... }
  niveis: { [key: string]: boolean };
  modalidades: { [key: string]: boolean };
  metodologias: { [key: string]: boolean };
}


@Component({
  selector: 'app-explorar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule // <<< ADICIONADO
  ],
  templateUrl: './explorar.component.html',
  styleUrls: ['./explorar.component.css']
})
export class ExplorarComponent implements OnInit {

  searchTermDisplay: string = 'Alunos de Inglês';
  todosAlunos: AlunoSearchResult[] = []; // <<< Guarda TODOS os alunos originais
  searchResults: AlunoSearchResult[] = []; // <<< Guarda os alunos filtrados para exibição
  isFilterVisible: boolean = false; // <<< Controla a visibilidade do filtro

  // <<< Define as opções disponíveis para os filtros (para gerar checkboxes/labels)
  availableIdiomas = ['Inglês', 'Italiano', 'Espanhol', 'Francês'];
  availableNiveis = ['Iniciante', 'Intermediário', 'Avançado', 'Preparação para exames (TOEFL, IELTS, DELF, etc)'];
  availableModalidades = ['Online', 'Presencial', 'Híbrida'];
  availableMetodologias = ['Conversação', 'Gramática', 'Foco em negócios', 'Foco em viagens'];

  // <<< Mantém o estado atual dos filtros selecionados
  filtrosAtivos: FiltrosAtivos = {
    rating: 0, // 0 significa qualquer avaliação
    idiomas: {},
    niveis: {},
    modalidades: {},
    metodologias: {}
  };

  // Objeto temporário para ngModel no template, para evitar modificar filtrosAtivos diretamente antes de clicar "Aplicar"
  tempFiltros: FiltrosAtivos = JSON.parse(JSON.stringify(this.filtrosAtivos)); // Cópia inicial

  constructor() {
    // Inicializa os filtros com todas as opções desmarcadas
    this.availableIdiomas.forEach(i => this.filtrosAtivos.idiomas[i] = false);
    this.availableNiveis.forEach(n => this.filtrosAtivos.niveis[n] = false);
    this.availableModalidades.forEach(m => this.filtrosAtivos.modalidades[m] = false);
    this.availableMetodologias.forEach(me => this.filtrosAtivos.metodologias[me] = false);
    // Cria a cópia inicial para o tempFiltros após inicializar filtrosAtivos
    this.tempFiltros = JSON.parse(JSON.stringify(this.filtrosAtivos));
  }

  ngOnInit(): void {
    this.loadSampleData();
  }

  loadSampleData(): void {
    // Simula o carregamento dos dados
    const sampleData: AlunoSearchResult[] = [
       {
        id: 1, nome: 'João Martins', idade: 24, imageUrl: 'students/joao.png', rating: 4,
        detalhes: {'Idioma buscado': 'Inglês', 'Modalidade': 'Online', 'Nível': 'Intermediário', 'Metodologia': 'Conversação e foco para viagens', 'Distância de você': '0 km'},
        idiomas: ['Inglês'], nivel: ['Intermediário'], modalidade: 'Online', metodologias: ['Conversação', 'Foco em viagens']
      },
      {
        id: 2, nome: 'Sophia Almeida', idade: 27, imageUrl: 'students/sophia.png', rating: 5,
        detalhes: {'Idiomas buscados': 'Inglês, Francês', 'Modalidade': 'Híbrida', 'Nível': 'Avançado (Inglês), Iniciante (Francês)', 'Metodologia': 'Preparação para exames (IELTS e DELF)', 'Distância de você': '4km'},
        idiomas: ['Inglês', 'Francês'], nivel: ['Avançado', 'Iniciante'], modalidade: 'Híbrida', metodologias: ['Preparação para exames']
      },
      {
        id: 3, nome: 'Mariana Lopes', idade: 27, imageUrl: 'students/mariana.png', rating: 5,
        detalhes: {'Idioma buscado': 'Inglês e Espanhol', 'Modalidade': 'Online', 'Nível': 'Intermediário', 'Metodologia': 'Conversação e foco em viagens', 'Distância de você': '0Km'},
         idiomas: ['Inglês', 'Espanhol'], nivel: ['Intermediário'], modalidade: 'Online', metodologias: ['Conversação', 'Foco em viagens']
      },
       {
        id: 4, nome: 'Thiago pereira', idade: 31, imageUrl: 'students/thiago.png', rating: 4,
        detalhes: {'Idioma ensinado': 'Inglês', 'Modalidade': 'Presencial', 'Nível': 'Iniciante', 'Metodologia': 'Gramática básica e vocabulário', 'Distância de você': '4Km'},
        idiomas: ['Inglês'], nivel: ['Iniciante'], modalidade: 'Presencial', metodologias: ['Gramática']
      },
       {
        id: 5, nome: 'Bruno Costa', idade: 35, imageUrl: 'students/bruno.png', rating: 5,
        detalhes: {'Idioma buscado': 'Inglês', 'Modalidade': 'Online', 'Nível': 'Avançado', 'Metodologia': 'Foco em negócios e apresentações', 'Distância de você': '0Km'},
        idiomas: ['Inglês'], nivel: ['Avançado'], modalidade: 'Online', metodologias: ['Foco em negócios']
      },
       {
        id: 6, nome: 'Gabriela Nunes', idade: 19, imageUrl: 'students/gabriela.png', rating: 3,
        detalhes: {'Idioma buscado': 'Inglês', 'Modalidade': 'Presencial', 'Nível': 'Intermediário', 'Metodologia': 'Conversação dia a dia', 'Distância de você': '3,5Km'},
        idiomas: ['Inglês'], nivel: ['Intermediário'], modalidade: 'Presencial', metodologias: ['Conversação']
      },
    ];

    // Adiciona campos estruturados para facilitar a filtragem (exemplo)
     this.todosAlunos = sampleData.map(aluno => ({
        ...aluno,
        // Exemplo de como popular campos estruturados a partir de 'detalhes'
        // Em um app real, isso viria da API ou seria processado de forma mais robusta
        idiomas: Object.entries(aluno.detalhes).filter(([key]) => key.toLowerCase().includes('idioma')).map(([, value]) => value.split(/,| e /)).flat().map(s => s.trim()).filter(s => s.length > 0),
        nivel: Object.entries(aluno.detalhes).filter(([key]) => key.toLowerCase().includes('nível')).map(([, value]) => value.split(',')).flat().map(s => s.replace(/\(.*?\)/g, '').trim()).filter(s => s.length > 0),
        modalidade: aluno.detalhes['Modalidade'] || undefined,
        metodologias: Object.entries(aluno.detalhes).filter(([key]) => key.toLowerCase().includes('metodologia')).map(([, value]) => value.split(/,| e /)).flat().map(s => s.trim()).filter(s => s.length > 0)
     }));


    this.searchResults = [...this.todosAlunos]; // Inicialmente, mostra todos
  }

  getDetalheKeys(detalhes: { [key: string]: string }): string[] {
    return Object.keys(detalhes);
  }

  conferirAluno(aluno: AlunoSearchResult): void {
    console.log('Conferir aluno:', aluno.nome);
  }

  // --- Funções do Filtro ---

  toggleFiltros(): void {
    if (!this.isFilterVisible) {
      // Ao abrir, copia os filtros ativos para o temporário que será editado
      this.tempFiltros = JSON.parse(JSON.stringify(this.filtrosAtivos));
    }
    this.isFilterVisible = !this.isFilterVisible;
  }

  fecharFiltros(): void {
    this.isFilterVisible = false;
  }

  aplicarFiltros(): void {
    // 1. Copia os filtros temporários (editados na tela) para os filtros ativos
    this.filtrosAtivos = JSON.parse(JSON.stringify(this.tempFiltros));

    // 2. Aplica a lógica de filtragem
    this.searchResults = this.todosAlunos.filter(aluno => {
      // Verifica cada critério de filtro

      // Filtro de Avaliação (Rating)
      if (this.filtrosAtivos.rating > 0 && aluno.rating < this.filtrosAtivos.rating) {
        return false; // Não passou no filtro de rating
      }

      // Filtro de Idiomas
      const idiomasSelecionados = Object.entries(this.filtrosAtivos.idiomas)
                                    .filter(([, value]) => value).map(([key]) => key);
      if (idiomasSelecionados.length > 0 && !idiomasSelecionados.some(idioma => aluno.idiomas?.includes(idioma))) {
         return false; // Não tem nenhum dos idiomas selecionados
      }

      // Filtro de Níveis (lógica similar a idiomas)
      const niveisSelecionados = Object.entries(this.filtrosAtivos.niveis)
                                  .filter(([, value]) => value).map(([key]) => key);
       // Simplificação: verifica se ALGUM nível do aluno corresponde a ALGUM nível selecionado
       // (considerando que "Preparação para exames..." é um nível específico aqui)
      if (niveisSelecionados.length > 0 && !niveisSelecionados.some(nivelSel => {
             if (nivelSel.startsWith('Preparação para exames')) {
                 // Lógica específica para checar exames, talvez em metodologia?
                 // Por simplicidade, vamos tratar como um nível por enquanto
                 return aluno.nivel?.includes(nivelSel) || aluno.metodologias?.some(m => m.toLowerCase().includes('exames'));
             }
             return aluno.nivel?.includes(nivelSel);
          })) {
          return false;
      }


      // Filtro de Modalidades
      const modalidadesSelecionadas = Object.entries(this.filtrosAtivos.modalidades)
                                      .filter(([, value]) => value).map(([key]) => key);
      if (modalidadesSelecionadas.length > 0 && !modalidadesSelecionadas.includes(aluno.modalidade ?? '')) {
        return false;
      }

      // Filtro de Metodologias
      const metodologiasSelecionadas = Object.entries(this.filtrosAtivos.metodologias)
                                        .filter(([, value]) => value).map(([key]) => key);
      if (metodologiasSelecionadas.length > 0 && !metodologiasSelecionadas.some(met => aluno.metodologias?.includes(met))) {
        return false;
      }

      // Se passou por todos os filtros, retorna true
      return true;
    });

    // 3. Fecha o painel de filtros
    this.fecharFiltros();
  }

  // Função para lidar com cliques nas estrelas de avaliação no filtro
  setRatingFilter(rating: number): void {
    // Se clicar na mesma estrela de novo, desmarca (volta pra 0)
    this.tempFiltros.rating = this.tempFiltros.rating === rating ? 0 : rating;
  }
}