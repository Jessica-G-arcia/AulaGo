import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-continuar-cadastro',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './continuar-cadastro.component.html',
  styleUrl: './continuar-cadastro.component.css'
})
export class ContinuarCadastroComponent implements OnInit {

  form!: FormGroup;

  idiomasList = ['Português', 'Inglês', 'Italiano', 'Francês', 'Espanhol'];

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


  ngOnInit(): void {


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
      nivel: new FormControl('', [Validators.required]),
      bio: new FormControl('', []),
      disponibilidade: new FormControl('', []),
      periodo: new FormControl('', []),
    })
  }
constructor(private router: Router) { }
salvar() {
  console.log('Usuário Cadastrado', this.form.value);
  this.router.navigate(['/login']);
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
