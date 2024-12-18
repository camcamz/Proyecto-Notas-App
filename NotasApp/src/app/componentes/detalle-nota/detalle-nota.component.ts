import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotasService } from '../../services/api-notas';
import { Nota } from '../modals/nota';

@Component({
  selector: 'app-detalle-nota',
  standalone: true,
  imports: [],
  templateUrl: './detalle-nota.component.html',
  styleUrl: './detalle-nota.component.css'
})
export class DetalleNotaComponent {
  nota!: Nota;

  constructor(
    private route: ActivatedRoute,
    private notasService: NotasService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("id ", id);
  
    if (id) {
      this.notasService.obtenerNotaById(id).subscribe(data => {
        console.log("notaID: ", data);
        this.nota = data;
      });
    } else {
      console.error('No se proporcionó un ID válido');
    }
  }
}
