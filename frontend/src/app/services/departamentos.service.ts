// src/app/services/departamentos.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {
  private apiUrl = 'http://localhost:3000/api/departamentos';

  constructor(private http: HttpClient) { }

  async getDepartamentos(): Promise<any[]> {
    try {
      return await this.http.get<any[]>(this.apiUrl).toPromise() || [];
    } catch (error) {
      console.error('Error al obtener departamentos', error);
      return [];
    }
  }

  async getDepartamento(id: string): Promise<any> {
    try {
      return await this.http.get<any>(`${this.apiUrl}/${id}`).toPromise();
    } catch (error) {
      console.error('Error al obtener departamento', error);
      return null;
    }
  }

  async createDepartamento(departamento: any): Promise<any> {
    try {
      return await this.http.post<any>(this.apiUrl, departamento).toPromise();
    } catch (error) {
      console.error('Error al crear departamento', error);
      return null;
    }
  }

  async updateDepartamento(id: string, departamento: any): Promise<any> {
    try {
      return await this.http.put<any>(`${this.apiUrl}/${id}`, departamento).toPromise();
    } catch (error) {
      console.error('Error al actualizar departamento', error);
      return null;
    }
  }

  async deleteDepartamento(id: string): Promise<any> {
    try {
      return await this.http.delete<any>(`${this.apiUrl}/${id}`).toPromise();
    } catch (error) {
      console.error('Error al eliminar departamento', error);
      return null;
    }
  }
}
