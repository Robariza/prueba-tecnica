import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-empleados-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './empleados-list.component.html',
  styleUrl: './empleados-list.component.css'
})
export class EmpleadosListComponent implements OnInit {
  empleados: any[] = [];

  constructor(private empleadosService: EmpleadosService) {}

  async ngOnInit(): Promise<void> {
    await this.loadEmpleados();
  }

  async loadEmpleados(): Promise<void> {
    try {
      this.empleados = await this.empleadosService.getEmpleados();
    } catch (error) {
      console.error('Error al cargar empleados', error);
    }
  }

  async deleteEmpleado(id: string): Promise<void> {
    try {
      await this.empleadosService.deleteEmpleado(id);
      await this.loadEmpleados();
    } catch (error) {
      console.error('Error al eliminar empleado', error);
    }
  }
}