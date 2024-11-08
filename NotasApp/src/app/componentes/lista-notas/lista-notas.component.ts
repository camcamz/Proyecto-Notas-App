import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NotasService } from '../../services/api-notas';

@Component({
  selector: 'app-lista-notas',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './lista-notas.component.html',
  styleUrls: ['./lista-notas.component.css']
})
export class ListaNotasComponent implements OnInit {
  notas: any[] = [];

  constructor(private notasService: NotasService) {}

  ngOnInit(): void {
    this.cargarNotas();
  }

  cargarNotas(): void {
    this.notasService.obtenerNotas().subscribe(
      (data) => {
        this.notas = data;
      },
      (error) => {
        console.error('Error al cargar notas:', error);
      }
    );
  }
}

