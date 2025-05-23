import { Component } from '@angular/core';
import { MenuLateralAlunoComponent } from '../menu-lateral-aluno/menu-lateral-aluno.component';
import { MenuSuperiorAlunoComponent } from '../menu-superior-aluno/menu-superior-aluno.component';

@Component({
  selector: 'app-home-aluno',
  imports: [MenuLateralAlunoComponent, MenuSuperiorAlunoComponent],
  templateUrl: './home-aluno.component.html',
  styleUrl: './home-aluno.component.css'
})
export class HomeAlunoComponent {

}
