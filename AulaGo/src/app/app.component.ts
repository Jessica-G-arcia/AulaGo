import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuLateralComponent, MenuSuperiorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AulaGo';
}
