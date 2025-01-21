import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonItem, IonLabel, IonInput, IonCheckbox, IonButton, IonButtons,IonInputPasswordToggle } from '@ionic/angular/standalone';
import { Route, Router, RouterLink } from '@angular/router';
import { UsersService } from '../services/users.service';
import{ LoadingController, AlertController} from '@ionic/angular';

@Component({
  selector: 'app-inicio-secion',
  templateUrl: './inicio-secion.page.html',
  styleUrls: ['./inicio-secion.page.scss'],
  standalone: true,
  imports: [IonButtons, IonButton, IonCheckbox, IonInput, IonLabel, IonItem, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink, IonInputPasswordToggle ]
})
export class InicioSecionPage implements OnInit {

  constructor(private usersService:UsersService,
     private router:Router ,
     private loadingController:LoadingController, 
    private alertController:AlertController) { }

  ngOnInit() {
  }

  async login(email:any, password:any){
    const loading = await this.loadingController.create({
      message: 'Iniciando Secion...',
      spinner: 'circles',
    });
   
    loading.present();  
    this.usersService.Slogin(email.value , password.value).subscribe({
      next: (data:any)=>{
        localStorage.setItem('token',data.token);
        localStorage.setItem('id', data.dataUser.id);
        localStorage.setItem('idp', data.dataUser.idperson);
        localStorage.setItem('username', data.dataUser.user);
        localStorage.setItem('idtu', data.dataUser.typeusers_id);
        loading.dismiss();
        this.router.navigateByUrl('bienvenida') 
        
      },
      error: async (error:any)=>{
        loading.dismiss();
        const alert =await this.alertController.create({
          header: 'Error',
          message: error.error.message,
          buttons:['ok']
        })
        await alert.present();
      }
     })
  
    }
     
  }

