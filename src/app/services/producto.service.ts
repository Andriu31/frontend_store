import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

 

  constructor(private http:HttpClient) { }

  // Agregar producto
  RegistroProducto(name:any, description:any, precio:any, categoria:any, stock:any):
  Observable<any>{

    const data ={
      "name":name,
      "description":description,
      "precio":precio,
      "categoria":categoria,
      "stock":stock
    };
    return this.http.post('http://127.0.0.1:3000/api/crearproduct', data);
  }
// Servicio para subir imagen después de registrar el producto
 SubirImagenProducto(id: any, image: any) {
  const data = new FormData();
  data.append('file', image);
  return this.http.post(`http://127.0.0.1:3000/api/products/${id}/image`, data);
}

obtenerProductos(): Observable<any> {
  return this.http.get('http://127.0.0.1:3000/api/verproduct');
}


}
