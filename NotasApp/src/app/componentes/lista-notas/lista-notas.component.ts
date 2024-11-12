import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NotasService } from '../../services/api-notas';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista-notas',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './lista-notas.component.html',
  styleUrls: ['./lista-notas.component.css']
})
export class ListaNotasComponent implements OnInit {
  notas: any[] = [];
  modalVisible: boolean = false;
  notaAEliminarId: string = '';

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

  /*eliminarNota(id: string): void {
    this.notasService.eliminarNota(id).subscribe(() => {
      this.notas = this.notas.filter(nota => nota._id !== id);
    });
  }*/
  abrirModal(id: string): void {
    console.log("se abre modal???", id)
    this.notaAEliminarId = id;
    this.modalVisible = true;
  }

  cerrarModal(): void {
    this.modalVisible = false;
  }

  confirmarEliminacion(): void {
    this.notasService.eliminarNota(this.notaAEliminarId).subscribe(() => {
      this.notas = this.notas.filter(nota => nota._id !== this.notaAEliminarId);
      this.cerrarModal();
    });
  }
}

