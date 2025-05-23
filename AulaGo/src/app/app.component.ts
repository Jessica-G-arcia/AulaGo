import { Component} from '@angular/core';
<<<<<<< HEAD
import { RouterOutlet} from '@angular/router';
=======
import { RouterOutlet, Router} from '@angular/router';
>>>>>>> 17db327de999548c406b0d2b0fa7d767120abc7c
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AulaGo';
}