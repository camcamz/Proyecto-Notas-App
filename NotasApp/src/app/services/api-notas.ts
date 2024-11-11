import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotasService {
  private _httpClient = inject(HttpClient); // Usa inject() para inyectar HttpClient
  private apiUrl = 'http://localhost:3000/api/notas';

  constructor() {}

  // Método para obtener todas las notas
  obtenerNotas(): Observable<any> {
    return this._httpClient.get<any>(this.apiUrl);
  }  

  // Método para obtener una nota
  obtenerNotaById(id: any): Observable<any> {
    return this._httpClient.get<any>(`${this.apiUrl}/${id}`);
  }

  // Método para agregar una nueva nota
  agregarNota(nota: any): Observable<any> {
    return this._httpClient.post<any>(this.apiUrl, nota);
  }
  // Método para eliminar una nota por id
  eliminarNota(id: string): Observable<any> {
    return this._httpClient.delete<any>(`${this.apiUrl}/${id}`);
  }

  // Otros métodos para actualizar y eliminar notas
}
