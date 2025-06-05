import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
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

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(0, []),
      nome: new FormControl('', Validators.required),
      cpf: new FormControl('', [Validators.required, this.cpfValidator]),
      telefone: new FormControl('', [Validators.required, this.telefoneValidator]),
      dia: new FormControl('', Validators.required),
      mes: new FormControl('', Validators.required),
      ano: new FormControl('', Validators.required),
      genero: new FormControl('', Validators.required),
      cep: new FormControl('', [Validators.required, this.cepValidator]),
      cidade: new FormControl('', Validators.required),
      estado: new FormControl('', Validators.required),
      endereco: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.required),
      bairro: new FormControl('', Validators.required),
      complemento: new FormControl('', []),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
      senha: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmarSenha: new FormControl('', [Validators.required, Validators.minLength(8)]),
      aceitouTermos: new FormControl(false, Validators.requiredTrue)
    }, { validators: this.senhasConferemValidator });
  }

  // Função para formatar CPF
  formatarCPF(event: any): void {
    let valor = event.target.value.replace(/\D/g, '');

    if (valor.length <= 11) {
      valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
      valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
      valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }

    event.target.value = valor;
    this.form.get('cpf')?.setValue(valor);
  }

  // Função para formatar telefone
  formatarTelefone(event: any): void {
    let valor = event.target.value.replace(/\D/g, '');

    if (valor.length <= 11) {
      if (valor.length <= 10) {
        // Formato: (11) 1234-5678
        valor = valor.replace(/(\d{2})(\d)/, '($1) $2');
        valor = valor.replace(/(\d{4})(\d)/, '$1-$2');
      } else {
        // Formato: (11) 91234-5678
        valor = valor.replace(/(\d{2})(\d)/, '($1) $2');
        valor = valor.replace(/(\d{5})(\d)/, '$1-$2');
      }
    }

    event.target.value = valor;
    this.form.get('telefone')?.setValue(valor);
  }

  // Função para formatar CEP
  formatarCEP(event: any): void {
    let valor = event.target.value.replace(/\D/g, '');

    if (valor.length <= 8) {
      valor = valor.replace(/(\d{5})(\d)/, '$1-$2');
    }

    event.target.value = valor;
    this.form.get('cep')?.setValue(valor);
  }

  // Validador customizado para CPF
  cpfValidator(control: AbstractControl): ValidationErrors | null {
    const cpf = control.value?.replace(/\D/g, '');

    if (!cpf || cpf.length !== 11) {
      return { cpfInvalido: true };
    }
    return null;
  }

  // Validador customizado para telefone
  telefoneValidator(control: AbstractControl): ValidationErrors | null {
    const telefone = control.value?.replace(/\D/g, '');

    if (!telefone || (telefone.length !== 10 && telefone.length !== 11)) {
      return { telefoneInvalido: true };
    }

    return null;
  }

  // Validador customizado para CEP
  cepValidator(control: AbstractControl): ValidationErrors | null {
    const cep = control.value?.replace(/\D/g, '');

    if (!cep || cep.length !== 8) {
      return { cepInvalido: true };
    }

    return null;
  }

  // Validador para confirmar se as senhas são iguais
  senhasConferemValidator(formGroup: AbstractControl): ValidationErrors | null {
    const senha = formGroup.get('senha')?.value;
    const confirmarSenha = formGroup.get('confirmarSenha')?.value;

    if (senha && confirmarSenha && senha !== confirmarSenha) {
      return { senhasNaoConferem: true };
    }

    return null;
  }

  cadastrar() {
    if (this.form.invalid) {
      console.log('Formulário inválido');
      this.form.markAllAsTouched();
      return;
    }

    // Remove formatação antes de enviar os dados
    const dadosFormulario = { ...this.form.value };
    dadosFormulario.cpf = dadosFormulario.cpf.replace(/\D/g, '');
    dadosFormulario.telefone = dadosFormulario.telefone.replace(/\D/g, '');
    dadosFormulario.cep = dadosFormulario.cep.replace(/\D/g, '');

    console.log('Usuário Cadastrado', dadosFormulario);
    this.router.navigate(['/login']);
  }
}