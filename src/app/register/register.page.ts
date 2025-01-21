import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonItem, IonInput, IonCheckbox, IonLabel, IonButton, IonInputPasswordToggle } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';
import { UsersService } from '../services/users.service';
import{ LoadingController, AlertController} from '@ionic/angular';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonButton, IonLabel, IonCheckbox, IonInput, IonItem, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInputPasswordToggle, RouterLink]
})
export class RegisterPage implements OnInit {

  constructor(private usersService: UsersService,
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController ) { }

  ngOnInit() {
  }

  async register(user: any, email: any, password: any) {
    const loading = await this.loadingController.create({
      message: 'Registrando usuario...',
      spinner: 'circles',
    });
    loading.present();

    this.usersService.Sregister(user.value, email.value, password.value).subscribe({
      next: async (data: any) => {
        loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Registro exitoso',
          message: 'Usuario registrado correctamente.',
          buttons: ['OK'],
        });
        await alert.present();
        this.router.navigateByUrl('/inicio-secion'); // Redirige al login tras el registro
      },
      error: async (error: any) => {
        loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Error',
          message: error.error.message || 'Ocurrió un error al registrar el usuario.',
          buttons: ['OK'],
        });
        await alert.present();
      },
    });
  }
}
