import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagamento-cartao',
  imports: [FormsModule, CommonModule],
  templateUrl: './pagamento-cartao.component.html',
  styleUrl: './pagamento-cartao.component.css'
})

export class PagamentoCartaoComponent {
  @Output() fecharFormulario = new EventEmitter<void>();


  numeroCartao: string = '';
  validade: string = '';
  cvv: string = '';
  nomeTitular: string = '';

  formSubmitAttempt = false;

  constructor(private router: Router) {}

  fechar() {
    this.fecharFormulario.emit();
  }

  formatarNumeroCartao() {
    let valor = this.numeroCartao.replace(/\D/g, ''); // Remove não dígitos
    valor = valor.slice(0, 16); // Limita a 16 números
    this.numeroCartao = valor.replace(/(\d{4})(?=\d)/g, '$1 '); // Espaços a cada 4 dígitos
  }

  formatarValidade() {
  let val = this.validade.replace(/\D/g, ''); // tira tudo que não é número

  if (val.length > 2) {
    // limita o mês entre 01 e 12
    let mes = val.substring(0, 2);
    if (parseInt(mes) < 1) mes = '01';
    else if (parseInt(mes) > 12) mes = '12';

    val = mes + val.substring(2, 4);
    val = val.substring(0, 4);
    this.validade = val.substring(0, 2) + '/' + val.substring(2);
  } else {
    this.validade = val;
  }
}

  formatarCVV() {
    this.cvv = this.cvv.replace(/\D/g, '').slice(0, 4);
  }

  concluirPagamento(form: NgForm) {
    this.formSubmitAttempt = true;
    if (form.invalid) {
      form.control.markAllAsTouched(); // mostra erros
      return;
    }
    this.router.navigate(['/confirmacao-de-pagamento']);
  }
}
