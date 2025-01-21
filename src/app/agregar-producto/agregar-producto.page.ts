import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { add, chevronForwardOutline, home, menu, cartOutline, person } from 'ionicons/icons';
import { IonFab, IonFabButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.page.html',
  styleUrls: ['./agregar-producto.page.scss'],
  standalone: true,
  imports: [IonLabel, IonIcon, IonTabButton, IonTabBar, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class AgregarProductoPage implements OnInit {

  user: any;
  constructor() {addIcons({add,chevronForwardOutline,home,menu,cartOutline,person});  }

  ngOnInit() {
    this.user = localStorage.getItem('username') || 'Invitado';
  }

}
