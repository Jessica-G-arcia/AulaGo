import { Component} from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { RouterOutlet} from '@angular/router';
=======
import { RouterOutlet, Router} from '@angular/router';
>>>>>>> 17db327de999548c406b0d2b0fa7d767120abc7c
=======
import { RouterOutlet, Router} from '@angular/router';
>>>>>>> 711e1ffe6df4e52324f2c4d982e1ad30276c2ca5
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule,],
<<<<<<< HEAD
=======
import { RouterOutlet, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
>>>>>>> 2335d62fa7c27cacc9c32dde894582e2fca0df87
=======
>>>>>>> 711e1ffe6df4e52324f2c4d982e1ad30276c2ca5
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AulaGo';
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> 2335d62fa7c27cacc9c32dde894582e2fca0df87
=======
}
>>>>>>> 711e1ffe6df4e52324f2c4d982e1ad30276c2ca5
