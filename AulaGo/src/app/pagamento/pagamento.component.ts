import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PagamentoCartaoComponent } from "../pagamento-cartao/pagamento-cartao.component";
import { PagamentoPixComponent } from "../pagamento-pix/pagamento-pix.component";
import { PagamentoBoletoComponent } from "../pagamento-boleto/pagamento-boleto.component";
import { MenuLateralComponent } from "../menu-lateral/menu-lateral.component";
import { MenuSuperiorComponent } from "../menu-superior/menu-superior.component";
import { MenuSuperiorAlunoComponent } from "../menu-superior-aluno/menu-superior-aluno.component";
import { MenuLateralAlunoComponent } from "../menu-lateral-aluno/menu-lateral-aluno.component";

@Component({
  selector: 'app-pagamento',
  imports: [CommonModule, FormsModule, PagamentoCartaoComponent, PagamentoPixComponent, PagamentoBoletoComponent, MenuSuperiorAlunoComponent, MenuLateralAlunoComponent],
  templateUrl: './pagamento.component.html',
  styleUrl: './pagamento.component.css'
})
export class PagamentoComponent {
  pagamentoSelecionado: string = ''; // controlar qual método está ativo

  selecionarPagamento(tipo: string) {
    this.pagamentoSelecionado = tipo;
  }

}
