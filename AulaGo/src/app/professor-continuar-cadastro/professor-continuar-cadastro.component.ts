import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-professor-continuar-cadastro',
  imports: [ReactiveFormsModule, CommonModule, RouterModule, FormsModule, ReactiveFormsModule, NgbCollapseModule],
  templateUrl: './professor-continuar-cadastro.component.html',
  styleUrl: './professor-continuar-cadastro.component.css'
})
export class ProfessorContinuarCadastroComponent implements OnInit {
  form!: FormGroup;
  bankForm!: FormGroup;

  idiomasList = ['Inglês', 'Italiano', 'Francês', 'Espanhol'];

imagemSelecionada: File | null = null;
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
    { valor: '50km', nome: '50 km' },
  ]
  



  periodoList = ['Manhã', 'Tarde', 'Noite'];
  disponibilidadeList = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'];
  especialidadesList = ['Conversação', 'Gramática', 'Foco em negócios', 'Foco em viagens'];

  ajustarAltura(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto'; // Reseta a altura
    textarea.style.height = textarea.scrollHeight + 'px'; // Define nova altura com base no conteúdo
  }

  minSelectedCheckboxes(min = 1) {
    return (formArray: AbstractControl) => {
      const totalSelected = (formArray.value as boolean[]).filter(v => v).length;
      return totalSelected >= min ? null : { required: true };
    };
  }
  
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {

    this.bankForm = this.fb.group({
      banco: ['', Validators.required],
      agencia: ['', Validators.required],
      tipoConta: ['', Validators.required],
      pix: ['', Validators.required]
    });

    //controles dos checkboxes
    const idiomasControls = this.idiomasList.map(() => new FormControl(false));
  
    //Array de validacao
    const formArray = new FormArray(idiomasControls, this.minSelectedCheckboxes(1));
    const especialidadesControls = this.especialidadesList.map(() => new FormControl(false));
    const periodoControls = this.periodoList.map(() => new FormControl(false));
    const disponibilidadeControls = this.disponibilidadeList.map(() => new FormControl(false));
    
    const especialidadesFormArray = new FormArray(especialidadesControls);
    const periodoFormArray = new FormArray(periodoControls);
    const disponibilidadeFormArray = new FormArray(disponibilidadeControls);

    // desabilitando italiano, frances e espanhol
    formArray.at(1).disable();
    formArray.at(2).disable();
    formArray.at(3).disable();
  
    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      genero: new FormControl('', [Validators.required]),
      dia: new FormControl('', [Validators.required]),
      mes: new FormControl('', [Validators.required]),
      ano: new FormControl('', [Validators.required]),
      idiomas: formArray,
      modalidade: new FormControl('', [Validators.required]),
      especialidades: especialidadesFormArray,
      bio: new FormControl('', []),
      disponibilidade: disponibilidadeFormArray,
      periodo: periodoFormArray,
      valor: new FormControl('', [Validators.required]),
      valorOnline: new FormControl('', [Validators.required]),
      raio: new FormControl('', [Validators.required]),
      nomeBanco: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required]),
      banco: new FormControl('', [Validators.required]),
      agencia: new FormControl('', [Validators.required]),
      tipoConta: new FormControl('', [Validators.required]),
      pix: new FormControl('', [Validators.required]),
    });
  }
  dadosAdicionados: boolean = false;

  adicionar(): void {
    if (this.bankForm.valid) {
      console.log('Dados bancários adicionados:', this.bankForm.value);
      this.isDropdownOpen = false;
      this.dadosAdicionados = true;
      
      // Aqui você pode enviar os dados para o backend, salvar localmente etc.
    } else {
      this.bankForm.markAllAsTouched();
    }
  }
  

  salvar() {
    console.log('Usuário Cadastrado', this.form.value);
    this.router.navigate(['/login']);
  }
  voltar() {
    // Lógica para voltar
    console.log('Voltar');
  }
isCollapsed = true;
isCollapsedOnline = true;
isCollapsedHibrido = true;

selectedModalidade: 'presencial' | 'online' | 'hibrido' | null = null;


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
