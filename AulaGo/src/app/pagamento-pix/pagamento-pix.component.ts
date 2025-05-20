import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagamento-pix',
  imports: [],
  templateUrl: './pagamento-pix.component.html',
  styleUrl: './pagamento-pix.component.css'
})
export class PagamentoPixComponent {
  @Output() fecharFormulario = new EventEmitter<void>();

  fechar() {
    this.fecharFormulario.emit();
  }

   codigoPix: string = '1234643434234344225345678432112313434324483748327483748237482374832794723847324'; 

  copiarCodigo(): void {
  navigator.clipboard.writeText(this.codigoPix).then(() => {
    const msg = document.getElementById('mensagem-copiado');
    if (msg) {
      msg.style.display = 'block';
      setTimeout(() => {
        msg.style.display = 'none';
      }, 2000);
    }
  });
  }
}
