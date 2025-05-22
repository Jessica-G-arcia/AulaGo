import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-editar-perfil-aluno',
  imports: [ReactiveFormsModule, CommonModule, RouterModule, FormsModule, ReactiveFormsModule, NgbCollapseModule],
  templateUrl: './editar-perfil-aluno.component.html',
  styleUrl: './editar-perfil-aluno.component.css'
})
export class EditarPerfilAlunoComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  idiomasList = ['Inglês', 'Italiano', 'Francês', 'Espanhol'];
  periodoList = ['Manhã', 'Tarde', 'Noite'];
  disponibilidadeList = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'];


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

  niveis = [
    { valor: 'iniciante', nome: 'Iniciante' },
    { valor: 'intermediario', nome: 'Intermediário' },
    { valor: 'avancado', nome: 'Avançado' }
  ];

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

  ngOnInit(): void {

    const periodoControls = this.periodoList.map((item, index) => new FormControl(index === 2));
    const diasSelecionados = [0, 1, 2]
    const disponibilidadeControls = this.disponibilidadeList.map((item, index) =>
      new FormControl(diasSelecionados.includes(index))); // Marca apenas "Segunda-feira" e "Terça-feira" como selecionados
    const idiomasControls = this.idiomasList.map((item, index) =>
      new FormControl(index === 0)); //deixa o inglês selecionado

    const idiomasFormArray = new FormArray(idiomasControls);
    const periodoFormArray = new FormArray(periodoControls);
    const disponibilidadeFormArray = new FormArray(disponibilidadeControls);
    const formArray = new FormArray(idiomasControls, this.minSelectedCheckboxes(1));

    // desabilitando italiano, frances e espanhol
    idiomasFormArray.at(1).disable();
    idiomasFormArray.at(2).disable();
    idiomasFormArray.at(3).disable();

    this.form = new FormGroup({
      nome: new FormControl('Matheus Oliveira', [Validators.required]),
      genero: new FormControl('masculino', [Validators.required]),
      dia: new FormControl('8', [Validators.required]),
      mes: new FormControl('8', [Validators.required]),
      ano: new FormControl('1998', [Validators.required]),
      idiomas: formArray,
      modalidade: new FormControl('presencial', [Validators.required]),
      nivel: new FormControl('intermediario', [Validators.required]),
      periodo: periodoFormArray,
      disponibilidade: disponibilidadeFormArray,
      bio: new FormControl('Olá, me chamo Matheus, tenho 27 anos e trabalho como analista de dados em uma grande empresa em Sorocaba. Estou em busca de aulas particulares de inglês que sejam focadas nas minhas dificuldades e objetivos. Quero melhorar meu vocabulário e aprimorar minhas habilidades no idioma, tanto para meu crescimento profissional quanto pessoal.', []),

    });
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

  salvar() {
    console.log('Usuário Cadastrado', this.form.value);
    this.router.navigate(['/perfil-aluno']);
  }

  voltar() {
    this.router.navigate(['/perfil-aluno']);
  }
}
