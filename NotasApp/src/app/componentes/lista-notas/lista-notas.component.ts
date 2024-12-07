import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NotasService } from '../../services/api-notas';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Importa FormsModule

@Component({
  selector: 'app-lista-notas',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule  // Asegúrate de incluir FormsModule aquí
  ],
  templateUrl: './lista-notas.component.html',
  styleUrls: ['./lista-notas.component.css']
})
export class ListaNotasComponent implements OnInit {
  notas: any[] = [];
  notasFiltradas: any[] = [];
  filtroCompletada: boolean | null = null; // Cambié el tipo a boolean | null
  modalVisible: boolean = false;
  notaAEliminarId: string = '';

  constructor(private notasService: NotasService, private router: Router) {}

  ngOnInit(): void {
    this.cargarNotas();
  }

  cargarNotas(): void {
    this.notasService.obtenerNotas().subscribe(
      (data) => {
        this.notas = data;
        this.notasFiltradas = [...this.notas];
      },
      (error) => {
        console.error('Error al cargar notas:', error);
      }
    );
  }

  filtrarNotas(): void {
    if (this.filtroCompletada === null) {
      this.notasFiltradas = [...this.notas]; // Muestra todas las notas
    } else {
      this.notasFiltradas = this.notas.filter(nota => 
        nota.completada === this.filtroCompletada); // Compara correctamente
    }
  }

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

  editarNota(id: string | undefined) {
    if (!id) {
        console.error('ID de la nota no está definido');
        return;
    }
    this.router.navigate(['/notas', id]);
  }
}
