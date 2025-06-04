import { Component } from '@angular/core';
import { MenuSuperiorComponent } from '../menu-superior/menu-superior.component';
import { MenuLateralComponent } from '../menu-lateral/menu-lateral.component';

@Component({
  selector: 'app-dashboard',
  imports: [MenuSuperiorComponent, MenuLateralComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
