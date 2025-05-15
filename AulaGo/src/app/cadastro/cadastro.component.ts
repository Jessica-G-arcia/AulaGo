import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-cadastro',
  imports: [ReactiveFormsModule, CommonModule, NgxMaskDirective],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent implements OnInit {
  form!: FormGroup;

  dias = Array.from({ length: 31 }, (_, i) => i + 1);

  meses = [
    { valor: 1, nome: 'Janeiro' },
    { valor: 2, nome: 'Fevereiro' },
    { valor: 3, nome: 'Março' },
    { valor: 4, nome: 'Abril' },
    { valor: 5, nome: 'Maio' },
    { valor: 6, nome: 'Junho' },
    { valor: 7, nome: 'Julho' },
    { valor: 8, nome: 'Agosto' },
    { valor: 9, nome: 'Setembro' },
    { valor: 10, nome: 'Outubro' },
    { valor: 11, nome: 'Novembro' },
    { valor: 12, nome: 'Dezembro' }
  ];

  anos = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  generos = [
    { valor: 'masculino', nome: 'Masculino' },
    { valor: 'feminino', nome: 'Feminino' },
    { valor: 'outro', nome: 'Outro' }
  ];

  estados = [
    { valor: 'AC', nome: 'Acre' },
    { valor: 'AL', nome: 'Alagoas' },
    { valor: 'AP', nome: 'Amapá' },
    { valor: 'AM', nome: 'Amazonas' },
    { valor: 'BA', nome: 'Bahia' },
    { valor: 'CE', nome: 'Ceará' },
    { valor: 'DF', nome: 'Distrito Federal' },
    { valor: 'ES', nome: 'Espírito Santo' },
    { valor: 'GO', nome: 'Goiás' },
    { valor: 'MA', nome: 'Maranhão' },
    { valor: 'MT', nome: 'Mato Grosso' },
    { valor: 'MS', nome: 'Mato Grosso do Sul' },
    { valor: 'MG', nome: 'Minas Gerais' },
    { valor: 'PA', nome: 'Pará' },
    { valor: 'PB', nome: 'Paraíba' },
    { valor: 'PR', nome: 'Paraná' },
    { valor: 'PE', nome: 'Pernambuco' },
    { valor: 'PI', nome: 'Piauí' },
    { valor: 'RJ', nome: 'Rio de Janeiro' },
    { valor: 'RN', nome: 'Rio Grande do Norte' },
    { valor: 'RS', nome: 'Rio Grande do Sul' },
    { valor: 'RO', nome: 'Rondônia' },
    { valor: 'RR', nome: 'Roraima' },
    { valor: 'SC', nome: 'Santa Catarina' },
    { valor: 'SE', nome: 'Sergipe' },
    { valor: 'SP', nome: 'São Paulo' },
    { valor: 'TO', nome: 'Tocantins' }
  ];

  senhasIguaisValidator(group: AbstractControl): ValidationErrors | null {
    const senha = group.get('senha');
    const confirmarSenha = group.get('confirmarSenha');

    if (senha && confirmarSenha && senha.value !== confirmarSenha.value) {
      return { senhasNaoConferem: true };
    }

    return null;
  }


  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(0, Validators.required),
      nome: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      dia: new FormControl('', Validators.required),
      mes: new FormControl('', Validators.required),
      ano: new FormControl('', Validators.required),
      genero: new FormControl('', Validators.required),
      cep: new FormControl('', Validators.required),
      cidade: new FormControl('', Validators.required),
      estado: new FormControl('', Validators.required),
      endereco: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.required),
      bairro: new FormControl('', Validators.required),
      complemento: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmarSenha: new FormControl('', [Validators.required, Validators.minLength(8)]),
      aceitouTermos: new FormControl(false, Validators.requiredTrue)
    }, { validators: this.senhasIguaisValidator.bind(this) }
    );
  }

  cadastrar() {
    if (this.form.invalid) {
      console.log('Formulário inválido');
      return;
    }
    console.log('Usuário Cadastrado', this.form.value);
  }
}