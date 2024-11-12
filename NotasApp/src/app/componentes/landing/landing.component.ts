import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  constructor(private router: Router) {}

  irAListaNotas() {
    this.router.navigate(['/listanotas']); // Cambia a la ruta correspondiente dirgiendo al componente que muestra todas las notas
  }

  irANuevaNota() {
    this.router.navigate(['/nuevanota']); // Cambia a la ruta correspondiente dirgiendo al componente que crea una nota nueva
  }
}