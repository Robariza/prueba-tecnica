// src/app/services/empleados.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  private apiUrl = 'http://localhost:3000/api/empleados';

  constructor(private http: HttpClient) { }

  async getEmpleados(): Promise<any[]> {
    try {
      return await this.http.get<any[]>(this.apiUrl).toPromise() || [];
    } catch (error) {
      console.error('Error al obtener empleados', error);
      return [];
    }
  }

  async getEmpleado(id: string): Promise<any> {
    try {
      return await this.http.get<any>(`${this.apiUrl}/${id}`).toPromise();
    } catch (error) {
      console.error('Error al obtener empleado', error);
      return null;
    }
  }

  async createEmpleado(empleado: any): Promise<any> {
    try {
      return await this.http.post<any>(this.apiUrl, empleado).toPromise();
    } catch (error) {
      console.error('Error al crear empleado', error);
      return null;
    }
  }

  async updateEmpleado(id: string, empleado: any): Promise<any> {
    try {
      return await this.http.put<any>(`${this.apiUrl}/${id}`, empleado).toPromise();
    } catch (error) {
      console.error('Error al actualizar empleado', error);
      return null;
    }
  }

  async deleteEmpleado(id: string): Promise<any> {
    try {
      return await this.http.delete<any>(`${this.apiUrl}/${id}`).toPromise();
    } catch (error) {
      console.error('Error al eliminar empleado', error);
      return null;
    }
  }
}
