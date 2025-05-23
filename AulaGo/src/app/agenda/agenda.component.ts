import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Aula } from '../models/Aula';
import { MenuSuperiorComponent } from '../menu-superior/menu-superior.component';
import { MenuLateralComponent } from '../menu-lateral/menu-lateral.component';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css'],
  standalone: true,
  imports: [CommonModule,MenuSuperiorComponent,MenuLateralComponent, RouterLink, RouterLinkActive],
})
export class AgendaComponent implements OnInit {
  mesAtual: number = new Date().getMonth();
  anoAtual: number = new Date().getFullYear();
  calendario: (number | null)[][] = [];
  diaSelecionado: number = new Date().getDate();
  visualizacao: 'mes' | 'semana' = 'mes';
  semanaAtual: { dia: number, mes: number, ano: number, data: Date }[] = [];
  horarios: string[] = [];
  dataAtual: Date = new Date();

  aulas: Aula[] = [
    {
      id: 1,
      dataInicio: this.criarData(0, 14, 0),
      dataFim: this.criarData(0, 15, 0),
      aluno: 'Carlos Silva',
      modalidade: 'Presencial',
      idioma: 'Inglês'
    },
    {
      id: 2,
      dataInicio: this.criarData(1, 10, 30),
      dataFim: this.criarData(1, 11, 30),
      aluno: 'Ana Paula',
      modalidade: 'Online',
      idioma: 'Inglês'
    },
    {
      id: 3,
      dataInicio: this.criarData(0, 15, 30),
      dataFim: this.criarData(0, 16, 30),
      aluno: 'Ana Paula',
      modalidade: 'Online',
      idioma: 'Inglês'
    }
  ];

  ngOnInit() {
    this.gerarCalendario();
    this.gerarHorarios();
    this.gerarSemanaAtual();
  }

  get mesAtualNome(): string {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return meses[this.mesAtual];
  }

  gerarCalendario() {
    const primeiroDia = new Date(this.anoAtual, this.mesAtual, 1).getDay();
    const diasNoMes = new Date(this.anoAtual, this.mesAtual + 1, 0).getDate();

    let dias: (number | null)[] = Array(primeiroDia).fill(null);
    for (let i = 1; i <= diasNoMes; i++) {
      dias.push(i);
    }

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
    if (dia !== null) { // Verificação explícita para null
      this.diaSelecionado = dia;
      this.dataAtual = new Date(this.anoAtual, this.mesAtual, dia);
      
      if (this.visualizacao === 'semana') {
        this.gerarSemanaAtual();
      }
    }
  }
  

  gerarSemanaAtual() {
    const hoje = new Date(this.anoAtual, this.mesAtual, this.diaSelecionado);
    const diaSemana = hoje.getDay();
    
    this.semanaAtual = [];
    
    for (let i = 0; i < 7; i++) {
      const data = new Date(hoje);
      data.setDate(hoje.getDate() - diaSemana + i);
      this.semanaAtual.push({
        dia: data.getDate(),
        mes: data.getMonth(),
        ano: data.getFullYear(),
        data
      });
    }
  }

  mudarVisualizacao(tipo: 'mes' | 'semana') {
    this.visualizacao = tipo;
    if (tipo === 'semana') {
      this.gerarSemanaAtual();
    }
  }

  gerarHorarios() {
    const horarios: string[] = [];
    for (let h = 8; h <= 22; h++) {
      horarios.push(`${h.toString().padStart(2, '0')}:00`);
    }
    this.horarios = horarios;
  }

  avancarSemana() {
    if (this.semanaAtual.length === 0) return;
  
    const ultimoDia = this.semanaAtual[6].data;
    const novaData = new Date(ultimoDia);
    novaData.setDate(novaData.getDate() + 1);
  
    this.anoAtual = novaData.getFullYear();
    this.mesAtual = novaData.getMonth();
    this.diaSelecionado = novaData.getDate();
  
    this.gerarSemanaAtual();
  }

  voltarSemana() {
    if (this.semanaAtual.length === 0) return;
  
    const primeiroDia = this.semanaAtual[0].data;
    const novaData = new Date(primeiroDia);
    novaData.setDate(novaData.getDate() - 7);
  
    this.anoAtual = novaData.getFullYear();
    this.mesAtual = novaData.getMonth();
    this.diaSelecionado = novaData.getDate();
  
    this.gerarSemanaAtual();
  }

  getAulasDia(dia: number): Aula[] {
    return this.aulas.filter(aula => 
      aula.dataInicio.getDate() === dia && 
      aula.dataInicio.getMonth() === this.mesAtual && 
      aula.dataInicio.getFullYear() === this.anoAtual
    ).sort((a, b) => a.dataInicio.getTime() - b.dataInicio.getTime());
  }

  getAulasHoje(): Aula[] {
    return this.aulas.filter(aula => 
      aula.dataInicio.getDate() === this.dataAtual.getDate() && 
      aula.dataInicio.getMonth() === this.dataAtual.getMonth() && 
      aula.dataInicio.getFullYear() === this.dataAtual.getFullYear()
    ).sort((a, b) => a.dataInicio.getTime() - b.dataInicio.getTime());
  }

  getAulasPorDataHora(data: Date, hora: string): any[] {
    const horaRef = parseInt(hora.split(':')[0], 10);
    
    return this.aulas
      .filter(aula => {
        const mesmoDia = aula.dataInicio.getDate() === data.getDate() &&
                         aula.dataInicio.getMonth() === data.getMonth() &&
                         aula.dataInicio.getFullYear() === data.getFullYear();
        
        const horaInicio = aula.dataInicio.getHours();
        const minutoInicio = aula.dataInicio.getMinutes();
        const horaFim = aula.dataFim.getHours();
        const minutoFim = aula.dataFim.getMinutes();

        return mesmoDia && (
          (horaInicio < horaRef && horaFim > horaRef) || // Aula longa
          (horaInicio === horaRef) || // Começa nesta hora
          (horaFim > horaRef && horaInicio <= horaRef) // Termina depois
        );
      })
      .map(aula => {
        const horaInicio = aula.dataInicio.getHours();
        const minutoInicio = aula.dataInicio.getMinutes();
        const horaFim = aula.dataFim.getHours();
        const minutoFim = aula.dataFim.getMinutes();

        return {
          aula: aula,
          comecaMeiaHora: horaInicio === horaRef && minutoInicio > 0,
          terminaMeiaHora: horaFim === horaRef && minutoFim > 0
        };
      });
  }

  calcularAlturaAula(aulaItem: any, hora: string): string {
    const horaRef = parseInt(hora.split(':')[0], 10);
    const aula = aulaItem.aula;

    if (aulaItem.comecaMeiaHora) {
      // Aula que começa em meia hora (ex: 10:30)
      const minutos = 60 - aula.dataInicio.getMinutes();
      return `${(minutos/60)*60}px`;
    }
    else if (aulaItem.terminaMeiaHora) {
      // Aula que termina em meia hora (ex: 11:30)
      const minutos = aula.dataFim.getMinutes();
      return `${(minutos/60)*60}px`;
    }
    // Aula que ocupa hora completa
    return '60px';
  }

  formatarHora(data: Date): string {
    return data.getHours().toString().padStart(2, '0') + ':' + 
           data.getMinutes().toString().padStart(2, '0');
  }

  private criarData(diasAdicionais: number, horas: number, minutos: number): Date {
    const data = new Date();
    data.setDate(data.getDate() + diasAdicionais);
    data.setHours(horas, minutos, 0, 0);
    return data;
  }

  ehDiaAtual(dia: number | null): boolean {
    if (dia === null) return false;
    
    const hoje = new Date();
    return dia === hoje.getDate() && 
           this.mesAtual === hoje.getMonth() && 
           this.anoAtual === hoje.getFullYear();
  }
}