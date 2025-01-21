import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  // Cierra sesión y redirige al usuario a la página de inicio
  logout(): void {
    localStorage.clear(); // Limpia el almacenamiento local
    this.router.navigate(['/welcome']); // Redirige a la página de inicio de sesión
  }

  // Verifica si el usuario está autenticado
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token'); // Devuelve true si existe un token
  }
}

