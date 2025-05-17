import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule, NgForm} from '@angular/forms';
import { ViewChild } from '@angular/core';
// import { Usuario } from '../models/Usuario';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, FormsModule, CommonModule], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // usuario: Usuario = {
  //   id: 0,
  //   email: '',
  //   senha: ''
  // };

  @ViewChild('form') form!: NgForm;
  salvar(){
    if(this.form.valid){
      // console.log ('Usuário salvo', this.usuario);
      alert('Usuário salvo com sucesso!');
    }
  }
}