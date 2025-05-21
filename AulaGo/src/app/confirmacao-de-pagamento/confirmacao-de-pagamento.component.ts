import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmacao-de-pagamento',
  imports: [],
  templateUrl: './confirmacao-de-pagamento.component.html',
  styleUrl: './confirmacao-de-pagamento.component.css'
})
export class ConfirmacaoDePagamentoComponent {
constructor(private router: Router) {}

irParaAulas() {
  this.router.navigate(['/aulas']);
}

irParaHome() {
  this.router.navigate(['/home-aluno']);
}
}
