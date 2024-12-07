import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Para obtener el parámetro id de la ruta
import { NotasService } from '../../services/api-notas'; // Asegúrate de importar el servicio
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-actualizar-nota',
  standalone: true,
  templateUrl: './actualizar-nota.component.html',
  styleUrls: ['./actualizar-nota.component.css'],
  imports: [FormsModule, CommonModule], // Importar FormsModule para ngModel
})
export class ActualizarNotaComponent implements OnInit {
  nota = { titulo: '', descripcion: '', completada: false }; // Incluimos el campo `completada`
  idNota: string | null = ''; // Guardar el ID de la nota que se está editando
  mensajeExito: string | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private notasService: NotasService
  ) {}

  ngOnInit() {
    // Obtener el ID de la nota desde la ruta
    this.idNota = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.idNota) {
      this.cargarNota(this.idNota);
    }
  }

  cargarNota(id: string) {
    // Llamar al servicio para obtener la nota por ID
    this.notasService.obtenerNotaById(id).subscribe(
      (nota) => {
        // Asignar la nota obtenida al modelo para mostrar en el formulario
        this.nota = {
          titulo: nota.titulo,
          descripcion: nota.descripcion,
          completada: nota.completada || false, // Asegurar un valor por defecto
        };
      },
      (error) => {
        console.error('Error al obtener la nota:', error);
      }
    );
  }

  actualizarNota() {
    if (this.idNota) {
      // Llamar al servicio para actualizar la nota
      this.notasService.actualizarNota(this.idNota, this.nota).subscribe(
        (respuesta) => {
          console.log('Nota actualizada correctamente:', respuesta);
          this.mensajeExito = '¡Nota actualizada exitosamente!';
          setTimeout(() => {
            this.mensajeExito = null;
          }, 3000);
        },
        (error) => {
          console.error('Error al actualizar la nota:', error);
        }
      );
    }
  }
}
