import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonInput, IonButton, IonAvatar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonTabs, IonTabBar, IonTabButton, IonIcon, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { cog, search, person ,mail,create,trash,add, home,close, menu,exit, heartOutline, homeOutline, personOutline, cartOutline, pencil } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import{ chevronDownCircle,
  chevronForwardCircle,
  chevronUpCircle,
  colorPalette,
  document,
  globe,}from 'ionicons/icons';
import { Data, Router, RouterLink } from '@angular/router';
import { PersonService } from '../services/person.service';
import{ LoadingController, AlertController} from '@ionic/angular';



@Component({
  selector: 'app-person',
  templateUrl: './person.page.html',
  styleUrls: ['./person.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonIcon, IonTabButton, IonTabBar, IonTabs, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonAvatar, IonButton, IonInput, IonList, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class PersonPage implements OnInit {
  profile:any;
  personid:any;
  editDatos:boolean=true;
  perdson:any;

  constructor( private usersService:UsersService, private personService:PersonService, 
    private loadingController:LoadingController, 
    private alertController:AlertController,
    private router:Router) {
    addIcons({ cog, search ,person, mail,create,trash,add,home,close,exit,menu, pencil});
    addIcons({ chevronDownCircle, chevronForwardCircle, chevronUpCircle, colorPalette, document, globe });
    this.personid = localStorage.getItem('id');
    this.perdson =localStorage.getItem('idp')

  }

  user:any;
  ngOnInit() {
    this.user=localStorage.getItem('username');
    this.viewProfile();
    this.verimagen();
  }

  editperfil(){
    this.editDatos=false;
  }

  verimagen(){
    this.usersService.getOneUser(this.perdson).subscribe({
      next: (data) => {
        this.profile=data;
      },
      error:(error:any)=>{

      }
    })
  }

  viewProfile(){
    this.usersService.getOneUser(this.personid).subscribe({
      next:(data:any)=>{
        this.profile=data;
        
      },
      error:(error:any)=>{

      }
    })
  }

  updatePerson(){
    const idp =localStorage.getItem('idp');
    const personData = this.profile.user.person; 
    this.personService.updatePerson(idp,  personData.name, personData.lastname, personData.ci, personData.address, personData.phone).subscribe({
      next:(data:any)=>{  

        this.viewProfile();
        this.editDatos = true;
        
      },
      error:(error:any)=>{
        console.error('Error al actualizar el perfil:', error);
          
      }
    })
}





cerrarSesion(){
  localStorage.clear()
  this.router.navigateByUrl('/welcome')
}


changeImage(event: any){
  const file = event.target.files[0];
  this.personService.updateImage(this.perdson, file).subscribe({
    next:(data:any)=>{
      
     
      this.viewProfile();
    },
    error:(error:any)=>{
      

    }
  })
}

}
