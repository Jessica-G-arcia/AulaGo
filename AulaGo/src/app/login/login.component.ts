import { CommonModule } from '@angular/common';
import { Component, ViewChild, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  standalone: true
})
export class LoginComponent {
  @ViewChild('errorModal') errorModal!: TemplateRef<any>;
  @ViewChild('selectUserTypeModal') selectUserTypeModal!: TemplateRef<any>;
  loginForm: FormGroup;
  modalMessage: string = '';
  private tipoUsuario: 'professor' | 'aluno' | null = null;
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

  // Handler para tecla Enter
  onEnterPressed() {
    if (this.loginForm.valid) {
      this.salvar();
    }
  }

  // Método principal de login
  salvar(event?: Event) {
    if (event) {
      event.preventDefault();
    }

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    if (!this.validarCredenciais()) {
      this.mostrarErro('E-mail ou senha incorretos');
      return;
    }

    // Se o tipo de usuário já foi definido (clicou em um botão específico)
    if (this.tipoUsuario) {
      this.redirecionarPorTipoUsuario();
    } else {
      // Se veio pelo Enter, mostra a modal de seleção
      this.modalService.open(this.selectUserTypeModal, {
        centered: true,
        backdrop: 'static'
      });
    }
  }

  // Métodos para login específico
  entrarComoProfessor() {
    this.tipoUsuario = 'professor';
    this.salvar();
  }

  entrarComoAluno() {
    this.tipoUsuario = 'aluno';
    this.salvar();
  }

  confirmarTipoUsuario(tipo: 'professor' | 'aluno') {
    this.tipoUsuario = tipo;
    this.redirecionarPorTipoUsuario();
  }

  private redirecionarPorTipoUsuario() {
    if (this.tipoUsuario === 'professor') {
      this.router.navigate(['/home-professor']);
    } else if (this.tipoUsuario === 'aluno') {
      this.router.navigate(['/home-aluno']);
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

  // Métodos para login social
  loginWithGoogle() {
    console.log('Login com Google');
  }

  loginWithFacebook() {
    console.log('Login com Facebook');
  }

  loginWithLinkedIn() {
    console.log('Login com LinkedIn');
  }

  loginWithApple() {
    console.log('Login com Apple');
  }
}