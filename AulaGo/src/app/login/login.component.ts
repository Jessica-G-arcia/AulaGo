import { CommonModule } from '@angular/common';
import { Component, ViewChild, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink, 
    RouterLinkActive
  ],
})
export class LoginComponent {
  @ViewChild('errorModal') errorModal!: TemplateRef<any>;
  loginForm: FormGroup;
  modalMessage: string = '';
  validCredentials = [
    { email: 'fernandadias@gmail.com', password: 'senha123' },
    { email: 'matheusoliveira@gmail.com', password: 'senha456' }
  ];

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, this.emailValidator.bind(this)]],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  // Validador customizado para email
  emailValidator(control: { value: string }) {
    if (!control.value) {
      return null;
    }
    const isValid = this.validCredentials.some(cred => cred.email === control.value);
    return isValid ? null : { invalidEmail: true };
  }

  // Método para validar credenciais
  validarCredenciais(): boolean {
    const formValue = this.loginForm.value;
    return this.validCredentials.some(cred => 
      cred.email === formValue.email && cred.password === formValue.password
    );
  }

  // Método principal de login
  salvar() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    if (this.validarCredenciais()) {
      console.log('Login válido', this.loginForm.value);
      // Aqui você pode redirecionar ou fazer outras ações
    } else {
      this.mostrarErro('E-mail ou senha incorretos');
    }
  }

  // Métodos para login específico
  entrarComoProfessor() {
    if (this.loginForm.valid && this.validarCredenciais()) {
      this.router.navigate(['/home']);
    } else {
      this.mostrarErro('Senha inválida');
    }
  }

  entrarComoAluno() {
    if (this.loginForm.valid && this.validarCredenciais()) {
      this.router.navigate(['/home']);
    } else {
      this.mostrarErro('Senha inválida');
    }
  }

  // Método para exibir erros
  private mostrarErro(mensagem: string) {
    this.modalMessage = mensagem;
    this.modalService.open(this.errorModal, { 
      centered: true,
      backdrop: 'static'
    });
  }

  // Métodos para login social (implementação básica)
  loginWithGoogle() {
    console.log('Login com Google');
    // Implementação real vai aqui
  }

  loginWithFacebook() {
    console.log('Login com Facebook');
    // Implementação real vai aqui
  }

  loginWithLinkedIn() {
    console.log('Login com LinkedIn');
    // Implementação real vai aqui
  }

  loginWithApple() {
    console.log('Login com Apple');
    // Implementação real vai aqui
  }
}