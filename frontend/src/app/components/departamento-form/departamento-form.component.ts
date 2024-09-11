import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../../services/departamentos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-departamento-form',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './departamento-form.component.html',
  styleUrl: './departamento-form.component.css'
})
export class DepartamentoFormComponent implements OnInit {
  departamento: any = {};

  constructor(
    private departamentosService: DepartamentosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      try {
        this.departamento = await this.departamentosService.getDepartamento(id) || {};
      } catch (error) {
        console.error('Error al cargar departamento', error);
      }
    }
  }

  async saveDepartamento(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
    try {
      if (id) {
        await this.departamentosService.updateDepartamento(id, this.departamento);
      } else {
        await this.departamentosService.createDepartamento(this.departamento);
      }
      this.router.navigate(['/departamentos']);
    } catch (error) {
      console.error('Error al guardar departamento', error);
    }
  }
}