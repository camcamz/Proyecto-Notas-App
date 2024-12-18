import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotasService {
  private apiUrl = 'http://localhost:3000/api/notas';

  constructor(private _httpClient: HttpClient) {}

  // Método para obtener todas las notas
  obtenerNotas(): Observable<any> {
    return this._httpClient.get<any>(this.apiUrl);
  }  

  // Método para obtener una nota por ID
  obtenerNotaById(id: any): Observable<any> {
    return this._httpClient.get<any>(`${this.apiUrl}/${id}`);
  }

  // Método para agregar una nueva nota
  agregarNota(nota: any): Observable<any> {
    return this._httpClient.post<any>(this.apiUrl, nota);
  }

  // Método para eliminar una nota por ID
  eliminarNota(id: string): Observable<any> {
    return this._httpClient.delete<any>(`${this.apiUrl}/${id}`);
  }

  // Función para actualizar una nota
  actualizarNota(id: string, nota: any): Observable<any> {
    return this._httpClient.put<any>(`${this.apiUrl}/${id}`, nota);
  }

}
