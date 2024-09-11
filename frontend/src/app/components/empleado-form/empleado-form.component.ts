import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleado-form',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './empleado-form.component.html',
  styleUrl: './empleado-form.component.css'
})
export class EmpleadoFormComponent implements OnInit {
  empleado: any = {};

  constructor(
    private empleadosService: EmpleadosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      try {
        this.empleado = await this.empleadosService.getEmpleado(id) || {};
      } catch (error) {
        console.error('Error al cargar empleado', error);
      }
    }
  }

  async saveEmpleado(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
    try {
      if (id) {
        await this.empleadosService.updateEmpleado(id, this.empleado);
      } else {
        await this.empleadosService.createEmpleado(this.empleado);
      }
      this.router.navigate(['/empleados']);
    } catch (error) {
      console.error('Error al guardar empleado', error);
    }
  }
}
