import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagamento-boleto',
  imports: [CommonModule, ],
  templateUrl: './pagamento-boleto.component.html',
  styleUrl: './pagamento-boleto.component.css'
})
export class PagamentoBoletoComponent {
  @Output() fecharFormulario = new EventEmitter<void>();

  fechar() {
    this.fecharFormulario.emit();
  }
  
  copiarCodigo() {
  const codigoInput = document.querySelector('.codigo-barras-input') as HTMLInputElement;
  if (!codigoInput) return;

  const texto = codigoInput.value;

  
  navigator.clipboard.writeText(texto).then(() => {
    
    const mensagem = document.getElementById('mensagem-copiado');
    if (mensagem) {
      mensagem.style.display = 'block';
      setTimeout(() => {
        mensagem.style.display = 'none';
      }, 3000);
    }
  }).catch(err => {
    console.error('Erro ao copiar para área de transferência: ', err);
  });
}

  gerando = false;
  sucesso = false;

  gerarBoleto() {
    this.gerando = true;
    this.sucesso = false;

    setTimeout(() => {
      this.gerando = false;
      this.sucesso = true;
    }, 3000);

    // Opcional: esconder a mensagem de sucesso depois de um tempo também
    setTimeout(() => {
      this.sucesso = false;
    }, 8000); // 5 segundos após aparecer a mensagem de sucesso
  }
}
