import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../../services/departamentos.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-departamentos-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './departamentos-list.component.html',
  styleUrl: './departamentos-list.component.css'
})
export class DepartamentosListComponent implements OnInit {
  departamentos: any[] = [];

  constructor(private departamentosService: DepartamentosService) {}

  async ngOnInit(): Promise<void> {
    await this.loadDepartamentos();
  }

  async loadDepartamentos(): Promise<void> {
    try {
      this.departamentos = await this.departamentosService.getDepartamentos();
    } catch (error) {
      console.error('Error al cargar departamentos', error);
    }
  }

  async deleteDepartamento(id: string): Promise<void> {
    try {
      await this.departamentosService.deleteDepartamento(id);
      await this.loadDepartamentos();
    } catch (error) {
      console.error('Error al eliminar departamento', error);
    }
  }
}