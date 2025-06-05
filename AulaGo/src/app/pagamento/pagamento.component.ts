import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { PagamentoCartaoComponent } from "../pagamento-cartao/pagamento-cartao.component";
import { PagamentoPixComponent } from "../pagamento-pix/pagamento-pix.component";
import { PagamentoBoletoComponent } from "../pagamento-boleto/pagamento-boleto.component";
import { MenuLateralComponent } from "../menu-lateral/menu-lateral.component";
import { MenuSuperiorComponent } from "../menu-superior/menu-superior.component";
import { MenuSuperiorAlunoComponent } from "../menu-superior-aluno/menu-superior-aluno.component";
import { MenuLateralAlunoComponent } from "../menu-lateral-aluno/menu-lateral-aluno.component";


@Component({
  selector: 'app-pagamento',
  imports: [CommonModule, RouterLink, FormsModule, PagamentoCartaoComponent, PagamentoPixComponent, PagamentoBoletoComponent, MenuSuperiorAlunoComponent, MenuLateralAlunoComponent, FormsModule],
  templateUrl: './pagamento.component.html',
  styleUrl: './pagamento.component.css'
})
export class PagamentoComponent {
  pagamentoSelecionado: string = '';
  classTime: string = '';
  formSubmitAttempt: boolean = false;
  horarioValido: boolean = true;

  classDuration: string = '';
  durationError: boolean = false;

  email: string = '';

  selecionarPagamento(tipo: string) {
    this.pagamentoSelecionado = tipo;
  }

  formatarHorario() {
    // Verifica se há letras ou caracteres inválidos
    if (/[^0-9:]/.test(this.classTime)) {
      this.horarioValido = false;
      return;
    }

    let valor = this.classTime.replace(/\D/g, '');

    if (valor.length > 4) {
      valor = valor.substring(0, 4);
    }

    if (valor.length >= 3) {
      valor = valor.substring(0, 2) + ':' + valor.substring(2);
    }

    this.classTime = valor;

    const partes = this.classTime.split(':');
    if (partes.length === 2) {
      const hora = parseInt(partes[0], 10);
      const minuto = parseInt(partes[1], 10);

      this.horarioValido =
        !isNaN(hora) && !isNaN(minuto) &&
        hora >= 0 && hora <= 23 &&
        minuto >= 0 && minuto <= 59;
    } else {
      this.horarioValido = false;
    }
  }

  concluirPagamento(form: NgForm) {
    this.formSubmitAttempt = true;

    if (form.valid && this.horarioValido && !this.durationError) {
      console.log("Horário da aula:", this.classTime);
      console.log("Duração da aula:", this.classDuration);
      // continue com o processo de pagamento
    } else {
      console.log("Formulário inválido.");
    }
  }

  onDurationChange() {
    // Remove tudo que não é número
    this.classDuration = this.classDuration.replace(/[^0-9]/g, '');

    // Limita até 2 caracteres
    if (this.classDuration.length > 2) {
      this.classDuration = this.classDuration.substring(0, 2);
    }

    // Verifica se valor está entre 1 e 10
    const num = Number(this.classDuration);
    if (num < 1 || num > 10 || this.classDuration === '') {
      this.durationError = true;
    } else {
      this.durationError = false;
    }
  }

  emailInvalid: boolean = false;

  validarEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (this.email && !emailRegex.test(this.email)) {
      this.emailInvalid = true;
    } else {
      this.emailInvalid = false;
    }
  }

  coupon: string = '';
  mensagemCupom: string = '';
  cupomValido: boolean = false;

  onCouponInput() {
    // Força maiúsculas enquanto digita
    this.coupon = this.coupon.toUpperCase().slice(0, 10); // garante limite 10 também
  }

  aplicarCupom() {
    if (this.coupon === 'AULAGO10') {
      this.mensagemCupom = 'Cupom aplicado com sucesso!';
      this.cupomValido = true;
    } else {
      this.mensagemCupom = 'Cupom inválido.';
      this.cupomValido = false;
    }
  }
}