import { Component, OnInit } from '@angular/core';
import { MenuLateralComponent } from '../menu-lateral/menu-lateral.component';
import { MenuSuperiorComponent } from '../menu-superior/menu-superior.component';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar-prof',
  imports: [MenuLateralComponent, MenuSuperiorComponent],
  templateUrl: './buscar-prof.component.html',
  styleUrl: './buscar-prof.component.css'
})
export class BuscarProfComponent implements OnInit{


ngOnInit(): void {
  
}

constructor(private fb: FormBuilder, private router: Router) { }

offCanvasOpen = false;

Conferir(){
  this.router.navigate(['/perfil-aluno']);
}

}
