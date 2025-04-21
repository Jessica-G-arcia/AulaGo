import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css'],
  imports: [CommonModule],
})


export class AgendaComponent implements OnInit {
  mesAtual: number = new Date().getMonth(); // 0 = Janeiro
  anoAtual: number = new Date().getFullYear();
  calendario: (number | null)[][] = [];
  diaSelecionado: number | null = null;
  visualizacao: 'dia' | 'semana' | 'mes' = 'mes';

  ngOnInit() {
    this.gerarCalendario();
  }

  get mesAtualNome(): string {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return meses[this.mesAtual];
  }

  gerarCalendario() {
    const primeiroDia = new Date(this.anoAtual, this.mesAtual, 1).getDay(); // dia da semana do 1º
    const diasNoMes = new Date(this.anoAtual, this.mesAtual + 1, 0).getDate(); // total de dias no mês

    let dias: (number | null)[] = Array(primeiroDia).fill(null);
    for (let i = 1; i <= diasNoMes; i++) {
      dias.push(i);
    }

    // Quebrar dias em semanas (linhas da tabela)
    this.calendario = [];
    for (let i = 0; i < dias.length; i += 7) {
      this.calendario.push(dias.slice(i, i + 7));
    }
  }

  avancarMes() {
    if (this.mesAtual === 11) {
      this.mesAtual = 0;
      this.anoAtual++;
    } else {
      this.mesAtual++;
    }
    this.gerarCalendario();
  }

  voltarMes() {
    if (this.mesAtual === 0) {
      this.mesAtual = 11;
      this.anoAtual--;
    } else {
      this.mesAtual--;
    }
    this.gerarCalendario();
  }

  selecionarDia(dia: number | null) {
    if (dia) {
      this.diaSelecionado = dia;
      console.log(`Dia selecionado: ${dia}/${this.mesAtual + 1}/${this.anoAtual}`);
      // Aqui você pode carregar os dados do lado direito, etc.
    }
  }

  mudarVisualizacao(tipo: 'dia' | 'semana' | 'mes') {
    this.visualizacao = tipo;
    console.log('Visualização atual:', this.visualizacao);
    // Aqui você pode carregar os dados correspondentes ao tipo escolhido
  }
}


