import { Routes } from '@angular/router';
import { EmpleadosListComponent } from './components/empleados-list/empleados-list.component';
import { EmpleadoFormComponent } from './components/empleado-form/empleado-form.component';
import { DepartamentosListComponent } from './components/departamentos-list/departamentos-list.component';
import { DepartamentoFormComponent } from './components/departamento-form/departamento-form.component';

 export const routes: Routes = [
  { path: 'empleados', component: EmpleadosListComponent },
  { path: 'empleado/:id', component: EmpleadoFormComponent },
  { path: 'empleado', component: EmpleadoFormComponent },
  { path: 'departamentos', component: DepartamentosListComponent },
  { path: 'departamento/:id', component: DepartamentoFormComponent },
  { path: 'departamento', component: DepartamentoFormComponent },
  { path: '', redirectTo: '/empleados', pathMatch: 'full' }
];
