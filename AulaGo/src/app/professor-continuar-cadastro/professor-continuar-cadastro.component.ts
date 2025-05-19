import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-professor-continuar-cadastro',
  imports: [ReactiveFormsModule, CommonModule, NgxMaskDirective, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './professor-continuar-cadastro.component.html',
  styleUrl: './professor-continuar-cadastro.component.css'
})
export class ProfessorContinuarCadastroComponent implements OnInit {
  form!: FormGroup;
  bankForm!: FormGroup;

  idiomasList = ['Português', 'Inglês', 'Italiano', 'Francês', 'Espanhol'];


  dias = Array.from({ length: 31 }, (_, i) => i + 1);

  exibirPresencial: boolean = true;
  exibirOnline: boolean = true;

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

  isDropdownOpen = false;

  anos = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  generos = [
    { valor: 'masculino', nome: 'Masculino' },
    { valor: 'feminino', nome: 'Feminino' },
    { valor: 'outro', nome: 'Outro' }
  ];

  modalidade = [
    { valor: 'presencial', nome: 'Presencial' },
    { valor: 'online', nome: 'Online' },
    { valor: 'hibrido', nome: 'Híbrido' }
  ]

  raio = [
    { valor: '5', nome: '5 km' },
    { valor: '10', nome: '10 km' },
    { valor: '15', nome: '15 km' },
    { valor: '20', nome: '20 km' },
    { valor: '25', nome: '25 km' },
    { valor: '30', nome: '30 km' },
    { valor: '35', nome: '35 km' },
    { valor: '40', nome: '40 km' },
    { valor: '45', nome: '45 km' },
    { valor: '50', nome: '50 km' },
  ]
  


  disponibilidade = [
    { valor: 'segunda', nome: 'Segunda-feira' },
    { valor: 'terca', nome: 'Terça-feira' },
    { valor: 'quarta', nome: 'Quarta-feira' },
    { valor: 'quinta', nome: 'Quinta-feira' },
    { valor: 'sexta', nome: 'Sexta-feira' },
    { valor: 'sabado', nome: 'Sábado' },
  ]

  periodo = [
    { valor: 'manha', nome: 'Manhã' },
    { valor: 'tarde', nome: 'Tarde' },
    { valor: 'noite', nome: 'Noite' }
  ]

  minSelectedCheckboxes(min = 1) {
    return (formArray: AbstractControl) => {
      const totalSelected = (formArray.value as boolean[]).filter(v => v).length;
      return totalSelected >= min ? null : { required: true };
    };
  }
  
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.bankForm = this.fb.group({
      nome: ['', Validators.required],
      cif: ['', Validators.required],
      banco: ['', Validators.required],
      agencia: ['', Validators.required],
      tipoConta: ['', Validators.required],
      pix: ['', Validators.required]
    });

    //controles dos checkboxes
    const idiomasControls = this.idiomasList.map(() => new FormControl(false));
  
    //Array de validacao
    const formArray = new FormArray(idiomasControls, this.minSelectedCheckboxes(1));
  
    // desabilitando italiano, frances e espanhol
    formArray.at(2).disable();
    formArray.at(3).disable();
    formArray.at(4).disable();
  
    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      genero: new FormControl('', [Validators.required]),
      dia: new FormControl('', [Validators.required]),
      mes: new FormControl('', [Validators.required]),
      ano: new FormControl('', [Validators.required]),
      idiomas: formArray,
      modalidade: new FormControl('', [Validators.required]),
      especialidade: new FormControl('', [Validators.required]),
      bio: new FormControl('', [Validators.required]),
      disponibilidade: new FormControl('', [Validators.required]),
      periodo: new FormControl('', [Validators.required]),
      valor: new FormControl('', [Validators.required]),
      valoronline: new FormControl('', [Validators.required]),
      raio: new FormControl('', [Validators.required]),
      aceitouTermos: new FormControl(false, Validators.requiredTrue)
    });
  }
  
  onSubmit(): void {
    if (this.bankForm.valid) {
      console.log('Dados bancários enviados:', this.bankForm.value);
      this.isDropdownOpen = false;
      // Aqui você pode enviar os dados para o backend, salvar localmente etc.
    } else {
      this.bankForm.markAllAsTouched();
    }
  }
  onExibirOnlineChange(): void {
    const control = this.form.get('valoronline');
    if (this.exibirOnline) {
      control?.setValidators([Validators.required]);
    } else {
      control?.clearValidators();
    }
    control?.updateValueAndValidity();
  }

  onExibirPresencialChange(): void {
    const control = this.form.get('valor');
    if (this.exibirPresencial) {
      control?.setValidators([Validators.required]);
    } else {
      control?.clearValidators();
    }
    control?.updateValueAndValidity();
  }

  salvar() {
    if (this.form.valid) {
      
      console.log('Dados do Formulário:', this.form.value);}
    // } else {
    //   console.log('Formulário inválido');
    //   this.form.markAllAsTouched();
    // }
  }
  
  voltar() {
    // Lógica para voltar
    console.log('Voltar');
  }

  imagemPreview: string | ArrayBuffer | null = null;

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = () => {
        this.imagemPreview = reader.result;
      };
  
      reader.readAsDataURL(file);
    }
  }
}
