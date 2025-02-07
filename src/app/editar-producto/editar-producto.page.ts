import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonInput, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.page.html',
  styleUrls: ['./editar-producto.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonInput, IonButton, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EditarProductoPage implements OnInit {
  productoId: any;
  producto: any = {
    name: '',
    description: '',
    precio: '',
    categoria: '',
    stock: ''
  };
  image: any;
  traeP:any;
  constructor(private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // Obtener el id del producto desde la ruta
    this.productoId = this.activatedRoute.snapshot.paramMap.get('id');
    // Cargar el producto que vamos a editar
    this.cargarProducto();
  }

   // Cargar el producto desde la API
   cargarProducto() {
    this.productoService.Unproducto(this.productoId).subscribe((traePro: any) => {
      this.traeP = traePro.productos;
      console.log(this.traeP);
    })
  }

  // Método para actualizar el producto
  actualizarProducto(name:any, description:any, precio:any, categoria:any, stock:any) {
    console.log(this.producto);
    this.productoService.actualizarProducto(
      this.productoId,
      name.value, 
      description.value,
      precio.value,
      categoria.value,
      stock.value,
      this.image
    ).subscribe(
      (response) => {
        console.log('Producto actualizado:', response);
        this.router.navigate(['/catalogo']);  // Redirigir después de la actualización
      },
      (error) => {
        console.error('Error al actualizar el producto:', error);
      }
    );
  }

  // Método para manejar la selección de imagen
  onImageSelected(event: any) {
    this.image = event.target.files[0];
  }


  eliminarProducto() {
    this.productoService.eliminarProducto(this.productoId).subscribe(
      (response) => {
        console.log('Producto eliminado:', response);
        this.router.navigate(['/catalogo']);  // Redirigir después de eliminar el producto
      },
      (error) => {
        console.error('Error al eliminar el producto:', error);
      }
    );


}
}




