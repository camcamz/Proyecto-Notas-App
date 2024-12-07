import { Component } from '@angular/core';
import { NotasService } from '../../services/api-notas'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nueva-nota',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nueva-nota.component.html',
  styleUrls: ['./nueva-nota.component.css']
})
export class NuevaNotaComponent {
  titulo = '';
  descripcion = '';
  completada = false;
  mensajeExito: string | null = null;

  constructor(private notasService: NotasService) {}

  onSubmit() {
    const nuevaNota = {
      titulo: this.titulo,
      descripcion: this.descripcion,
      completada: this.completada,
    };

    this.notasService.agregarNota(nuevaNota).subscribe(
      (response) => {
        console.log('Nota creada:', response);
        this.mensajeExito = '¡Nota creada exitosamente!';
        setTimeout(() => {
          this.mensajeExito = null;
        }, 3000);
      },
      (error) => {
        console.error('Error al crear la nota:', error);
      }
    );
  }
}