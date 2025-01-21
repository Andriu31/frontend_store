import { IonButton, IonText } from '@ionic/angular/standalone';
import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  standalone: true,
  styleUrls: ['./boton.component.scss'],
  imports: [IonText, IonButton]
  
})
export class BotonComponent  implements OnInit {

  @Input() texto: string = 'Boton';
  @Input() color: string = 'primary';
  constructor() { }

  ngOnInit() {}

}
