import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid,IonThumbnail,IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonButton, IonCardSubtitle, IonIcon, IonItem, IonList, IonLabel, IonButtons, IonBackButton, IonTabButton, IonTabBar } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { add, chevronForwardOutline, home, menu, cartOutline, person, pin, share, trash,pencil } from 'ionicons/icons';
import { IonFab, IonFabButton } from '@ionic/angular/standalone';
import { ProductoService } from '../services/producto.service';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
  standalone: true,
  imports: [IonTabBar, IonFab, IonFabButton  ,IonThumbnail,IonTabButton, IonBackButton, IonButtons, IonLabel, IonList, IonItem, IonIcon, IonCardSubtitle, IonButton, IonCardTitle, IonCardHeader, IonCard, IonCol, IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class CatalogoPage implements OnInit {
  user: any;
  idtu: any;
  productos: any[] = []; // Arreglo para almacenar los productos

  cartItems: any[] = [];
  user_id: number | null = null;
  constructor(private productoServise: ProductoService,
     private catrservice:CartService, private route: Router) {  addIcons({add,pin,share,trash,home,menu,cartOutline,person,chevronForwardOutline,pencil}); }

  ngOnInit() {
    this.user = localStorage.getItem('username') || 'Invitado';
    this.idtu = localStorage.getItem('idtu') || '0';
    this.cargarProductos();
        
  }
  cargarProductos() {
    this.productoServise.obtenerProductos().subscribe({
      next: (data: any) => {
        console.log(data);
        this.productos = data.productos; // Asigna los productos al arreglo
        console.log('Productos cargados:', this.productos);
      },
      error: (error) => {
        console.error('Error al cargar los productos:', error);
      }
    });

  }


  // Método para agregar un producto al carrito
  agregarAlCarrito(producto_id: number) {
    const user_id = localStorage.getItem('id'); // Obtén el user_id del localStorage
    if (user_id) {
      this.catrservice.addToCart(parseInt(user_id, 10), producto_id, 1).subscribe({
        next: () => {
          console.log('Producto agregado al carrito');
        },
        error: (error) => {
          console.error('Error al agregar producto al carrito:', error);
        },
      });
    } else {
      console.error('No se encontró user_id en el localStorage');
      this.route.navigate(['/login']); // Redirigir al login si no hay user_id
    }





  }
}
