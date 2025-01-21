import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonTabButton, IonIcon, IonLabel, IonTabBar, IonButton, IonItem, IonList, IonInput } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { add, chevronForwardOutline, home, menu, cartOutline, person, logoPaypal } from 'ionicons/icons';
import { IonFab, IonFabButton } from '@ionic/angular/standalone';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: true,
  imports: [IonInput, IonList, IonItem, IonButton, IonTabBar, IonLabel, IonIcon, IonTabButton, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class CarritoPage implements OnInit {

  constructor() { addIcons({logoPaypal,home,add,menu,cartOutline,person,chevronForwardOutline}); }
user :any; 
  ngOnInit() {
    this.user = localStorage.getItem('username') || 'Invitado';
  }

}
