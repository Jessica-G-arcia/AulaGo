import { Component } from '@angular/core';
import { MenuSuperiorAlunoComponent } from "../menu-superior-aluno/menu-superior-aluno.component";
import { MenuLateralAlunoComponent } from "../menu-lateral-aluno/menu-lateral-aluno.component";

@Component({
  selector: 'app-explorar',
  imports: [MenuSuperiorAlunoComponent, MenuLateralAlunoComponent],
  templateUrl: './explorar.component.html',
  styleUrl: './explorar.component.css'
})
export class ExplorarComponent {

}
