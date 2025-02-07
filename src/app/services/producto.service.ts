import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

searchProduct(name: any){
  
  const data ={
    name:name
  }
  return this.http.post<any>('http://localhost:3000/api/producto/nombre',data)
}



actualizarProducto(id: any, name: any, description: any, precio: any, categoria: any, stock: any, image: any): Observable<any> {
  const data = new FormData();
  data.append('name', name);
  data.append('description', description);
  data.append('precio', precio);
  data.append('categoria', categoria);
  data.append('stock', stock);
  if (image) {
    data.append('file', image);
  }
  return this.http.put(`http://127.0.0.1:3000/api/products/${id}`, data);
}


eliminarProducto(id: any): Observable<any> {
  return this.http.delete(`http://127.0.0.1:3000/api/products/${id}`);
}

Unproducto(id:any){
  return this.http.get('http://127.0.0.1:3000/api/unProduct/'+id);
}



}
