import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagamento-cartao',
  imports: [FormsModule],
  templateUrl: './pagamento-cartao.component.html',
  styleUrl: './pagamento-cartao.component.css'
})
export class PagamentoCartaoComponent {
 @Output() fecharFormulario = new EventEmitter<void>();


  fechar() {
    this.fecharFormulario.emit();
  }

  constructor(private router: Router) {}

concluirPagamento() {
  this.router.navigate(['/confirmacao-de-pagamento']);
}
}
