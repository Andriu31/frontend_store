import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:3000/api/cart';
  constructor(private http:HttpClient) { }

   // Agregar producto al carrito
   addToCart(user_id: number, product_id: number, quantity: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, { user_id, product_id, quantity });
  }

  // Obtener el carrito de un usuario
  getCart(user_id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${user_id}`);
  }

  // Eliminar un producto del carrito
  removeFromCart(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/remove/${id}`);
  }

  // Vaciar el carrito de un usuario
  clearCart(user_id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/clear/${user_id}`);
  }
  
}
