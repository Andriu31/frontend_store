import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonThumbnail,IonBackButton, IonTabButton, IonIcon, IonLabel, IonTabBar, IonButton, IonItem, IonList, IonInput } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { add, chevronForwardOutline, home, menu, cartOutline, person, logoPaypal, image } from 'ionicons/icons';
import { IonFab, IonFabButton } from '@ionic/angular/standalone';
import { CartService } from '../../services/cart.service';
import { ProductoService } from 'src/app/services/producto.service';




@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: true,
  imports: [IonInput, IonList, IonItem,IonThumbnail, IonButton, IonTabBar, IonLabel, IonIcon, IonTabButton, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class CarritoPage implements OnInit {
  cartItems: any[] = [];
  user_id: number | null = null;
  
  
  constructor(private catrservice:CartService,
     private router:Router,
    private productoservie:ProductoService) { addIcons({logoPaypal,home,add,menu,cartOutline,person,chevronForwardOutline}); }
user :any; 
  ngOnInit() {
    this.user = localStorage.getItem('username') || 'Invitado';
    const userId = localStorage.getItem('id'); // Usa 'id' como clave
    if (userId) {
      this.user_id = parseInt(userId, 10); // Convertir a número
      this.loadCart();
    } else {
      console.error('No se encontró user_id en el localStorage');
      // Redirigir al login si no hay user_id
    }
    
    
  }

  
// Cargar el carrito del usuario
loadCart() {
  if (this.user_id) {
    this.catrservice.getCart(this.user_id).subscribe({
      next: (data) => {
       
        this.cartItems = data
        
      },
      error: (error) => {
        console.error('Error al cargar el carrito:', error);
      },
    });
  } else {
    console.error('user_id no está definido');
  }
}

// Eliminar un producto del carrito
removeItem(id: number) {
  this.catrservice.removeFromCart(id).subscribe({
    next: () => {
      this.loadCart(); // Recargar el carrito
    },
    error: (error) => {
      console.error('Error al eliminar producto:', error);
    },
  });
}

// Vaciar el carrito
clearCart() {
  if (this.user_id) {
    this.catrservice.clearCart(this.user_id).subscribe({
      next: () => {
        this.cartItems = []; // Vaciar el carrito en el frontend
      },
      error: (error) => {
        console.error('Error al vaciar el carrito:', error);
      },
    });
  } else {
    console.error('user_id no está definido');
  }
}

  

}
