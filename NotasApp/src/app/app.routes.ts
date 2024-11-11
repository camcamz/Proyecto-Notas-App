import { Routes } from '@angular/router';
import { LandingComponent } from './componentes/landing/landing.component';
import { ListaNotasComponent } from './componentes/lista-notas/lista-notas.component';
import { NuevaNotaComponent } from './componentes/nueva-nota/nueva-nota.component';
import { DetalleNotaComponent } from './componentes/detalle-nota/detalle-nota.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'listanotas', component: ListaNotasComponent },
    { path: 'nota/:id', component: DetalleNotaComponent },
    { path: 'nuevanota', component: NuevaNotaComponent },
    { path: '**', redirectTo: '' }
];
