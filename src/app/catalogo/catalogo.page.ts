import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonButton, IonCardSubtitle, IonIcon, IonItem, IonList, IonLabel, IonButtons, IonBackButton, IonTabButton, IonTabBar } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { add, chevronForwardOutline, home, menu, cartOutline, person } from 'ionicons/icons';
import { IonFab, IonFabButton } from '@ionic/angular/standalone';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
  standalone: true,
  imports: [IonTabBar, IonFab, IonFabButton  ,IonTabButton, IonBackButton, IonButtons, IonLabel, IonList, IonItem, IonIcon, IonCardSubtitle, IonButton, IonCardTitle, IonCardHeader, IonCard, IonCol, IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class CatalogoPage implements OnInit {
  user: any;
  idtu: any;
  constructor() {  addIcons({add,chevronForwardOutline,home,menu,cartOutline,person}); }

  ngOnInit() {
    this.user = localStorage.getItem('username') || 'Invitado';
    this.idtu = localStorage.getItem('idtu') || '0';
  }

}
