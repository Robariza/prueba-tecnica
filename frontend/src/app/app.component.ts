import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadosListComponent } from "./components/empleados-list/empleados-list.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmpleadosListComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
