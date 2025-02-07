import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonTabs, IonFooter, IonIcon, IonTabButton, IonTabBar, IonLabel, IonInput, IonButton, IonButtons, IonCol, IonGrid, IonRow, IonSearchbar, IonNav, IonModal, IonCard, IonCardContent, IonItemOptions, IonItemSliding, IonItem, IonAvatar, IonItemOption, IonList, IonCardHeader } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { search, home, person, heartOutline, add, menu, cartOutline, pin, share, trash } from 'ionicons/icons';

import { BotonComponent } from '../componentes/boton/boton.component';
import { ProductoService } from '../services/producto.service';
@Component({
  selector: 'app-inicio-tienda',
  templateUrl: './inicio-tienda.page.html',
  styleUrls: ['./inicio-tienda.page.scss'],
  standalone: true,
  imports: [IonCardHeader, IonList, IonItemOption, IonAvatar, IonItem, IonItemSliding, IonItemOptions, BotonComponent,IonCardContent, IonCard, IonModal, IonNav, IonSearchbar, IonRow, IonGrid, IonCol, IonButtons, IonButton, IonInput, IonLabel, IonTabBar, IonTabButton, IonIcon, IonFooter, IonTabs, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class InicioTiendaPage implements OnInit {

  user: any;
  productos: any[] = []; // Lista de productos
  productosFiltrados: any[] = []; // Lista filtrada
  
  product:any;

  constructor( private productoservise: ProductoService) {
    addIcons({pin,share,trash,heartOutline,home,add,menu,cartOutline,person,search});
  }

  ngOnInit() {
    this.user = localStorage.getItem('username') || 'Invitado';

    // Lista de productos iniciales (puedes agregar más)
    this.productos = [
      { id: 1, name: 'Blusa Celeste', price: 458, image: 'assets/icon/blusabla.png' },
      { id: 2, name: 'Vestido Rojo', price: 529, image: 'assets/icon/vestidoM.png' },
      { id: 3, name: 'Short Cortos', price: 458, image: 'assets/icon/short.jpg' },
      { id: 4, name: 'Blusa Negra', price: 529, image: 'assets/icon/blusaNegra.png' },
    ];

    this.productosFiltrados = [...this.productos]; // Inicializar con todos los productos
  }

  // Método para buscar productos
  searchCustomer(event: any) {
    const text = event.target.value;

    if (text && text.trim() !== '') {
      this.productosFiltrados = this.productos.filter((producto) => {
        return producto.name.toLowerCase().includes(text.toLowerCase());
      });
    } else {
      this.productosFiltrados = [...this.productos]; // Mostrar todos si no hay búsqueda
    }
  }

  buscarProducto(name:any){
    
    this.productoservise.searchProduct(name.value).subscribe({
      next: (data: any)=>{
       
        this.product= data.productos
        
      },
      error: (error)=>{
       
        console.log(error);
      }
    })
  }


}
