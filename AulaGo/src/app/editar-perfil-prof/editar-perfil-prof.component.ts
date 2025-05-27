import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuLateralComponent } from '../menu-lateral/menu-lateral.component';
import { MenuSuperiorComponent } from '../menu-superior/menu-superior.component';

@Component({
  selector: 'app-editar-perfil-prof',
  imports: [ReactiveFormsModule, CommonModule, RouterModule, FormsModule, ReactiveFormsModule, NgbCollapseModule, MenuLateralComponent, MenuSuperiorComponent],
  templateUrl: './editar-perfil-prof.component.html',
  styleUrl: './editar-perfil-prof.component.css'
})
export class EditarPerfilProfComponent implements OnInit {

  form!: FormGroup;
  bankForm!: FormGroup;
  idiomasList = ['Inglês', 'Italiano', 'Francês', 'Espanhol'];

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

  dadosAdicionados: boolean = true;
  isDropdownOpen = false;
  periodoList = ['Manhã', 'Tarde', 'Noite'];
  disponibilidadeList = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'];
  especialidadesList = ['Conversação', 'Gramática', 'Foco em negócios', 'Foco em viagens'];


  ngOnInit(): void {

    this.bankForm = this.fb.group({
      banco: [ 'Banco do Brasil' ],
      agencia: [ '0561-2' ],
      tipoConta: [ 'corrente' ],
      pix: [ 'fernandadias@gmail.com' ]
    });

    //controles dos checkboxes
    const periodoControls = this.periodoList.map((item, index) => new FormControl(index === 0));
    const diasSelecionados = [0, 3, 4]
    const disponibilidadeControls = this.disponibilidadeList.map((item, index) =>
      new FormControl(diasSelecionados.includes(index))); // Marca apenas "Segunda-feira" e "Terça-feira" como selecionados
    const idiomasControls = this.idiomasList.map((item, index) =>
      new FormControl(index === 0)); //deixa o inglês selecionado
    const especialidadesControls = this.especialidadesList.map((item, index) =>
      new FormControl(index === 0) // Marca apenas "Conversação" como selecionado
    );

    const especialidadesFormArray = new FormArray(especialidadesControls);
    const idiomasFormArray = new FormArray(idiomasControls);
    const periodoFormArray = new FormArray(periodoControls);
    const disponibilidadeFormArray = new FormArray(disponibilidadeControls);
    const formArray = new FormArray(idiomasControls, this.minSelectedCheckboxes(1));

    // desabilitando italiano, frances e espanhol
    idiomasFormArray.at(1).disable();
    idiomasFormArray.at(2).disable();
    idiomasFormArray.at(3).disable();

    this.form = new FormGroup({
      nome: new FormControl('Fernanda Dias', [Validators.required]),
      genero: new FormControl('feminino', [Validators.required]),
      dia: new FormControl('5', [Validators.required]),
      mes: new FormControl('5', [Validators.required]),
      ano: new FormControl('1995', [Validators.required]),
      idiomas: formArray,
      modalidade: new FormControl('', [Validators.required]),
      especialidades: especialidadesFormArray,
      bio: new FormControl('Sou a Fernanda, tenho 30 anos, moro em Sorocaba e sou professora particular de inglês. Amo ensinar e busco sempre adaptar as aulas ao perfil de cada aluno, com uma abordagem dinâmica, personalizada e focada em resultados reais. Atendo diferentes objetivos, como conversação, reforço escolar, inglês para viagens ou entrevistas de emprego. Será um prazer te ajudar a evoluir no inglês com leveza e eficiência!', []),
      disponibilidade: disponibilidadeFormArray,
      periodo: periodoFormArray,
      valor: new FormControl('R$150', [Validators.required]),
      valorOnline: new FormControl('R$100', [Validators.required]),
      raio: new FormControl('20', []),
      cpf: new FormControl('', [Validators.required]),
      banco: new FormControl('', [Validators.required]),
      agencia: new FormControl('', [Validators.required]),
      tipoConta: new FormControl('', [Validators.required]),
      pix: new FormControl('', [Validators.required]),
    });
  }

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

  isCollapsed = true;
  isCollapsedOnline = true;
  isCollapsedHibrido = true;

  selectedModalidade: 'presencial' | 'online' | 'hibrido' | null = 'hibrido';

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

  constructor(private fb: FormBuilder, private router: Router) { }

  salvar() {
    console.log('Usuário Cadastrado', this.form.value);
    this.router.navigate(['/perfil-professor']);
  }
  voltar() {
    this.router.navigate(['/perfil-professor']);
  }

}
