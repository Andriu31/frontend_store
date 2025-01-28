import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonTabBar, IonTabButton, IonIcon, IonLabel, IonItem, IonButton, IonInput } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { add, chevronForwardOutline, home, menu, cartOutline, person, cubeOutline, pricetag, clipboard, cash, list, image } from 'ionicons/icons';
import { IonFab, IonFabButton } from '@ionic/angular/standalone';
import { ProductoService } from '../services/producto.service';
import{ LoadingController, AlertController} from '@ionic/angular';
@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.page.html',
  styleUrls: ['./agregar-producto.page.scss'],
  standalone: true,
  imports: [IonInput, IonButton, IonItem, IonLabel, IonIcon, IonTabButton, IonTabBar, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class AgregarProductoPage implements OnInit {

  
  user: any;
  constructor(private productServise: ProductoService, private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) {addIcons({pricetag,clipboard,cash,list,image,home,add,menu,cartOutline,person,cubeOutline,chevronForwardOutline});  }

  ngOnInit() {
    this.user = localStorage.getItem('username') || 'Invitado';
  }

  async registerProduct(name: any, description: any, precio: any, categoria: any, stock: any, imageInput: any) {
    const loading = await this.loadingController.create({
      message: 'Registrando producto...',
      spinner: 'circles',
    });
    await loading.present();
  
    const image = imageInput.files[0]; // Obtener la imagen del input de archivo
  
    // Paso 1: Registrar producto sin imagen
    this.productServise.RegistroProducto(name.value, description.value, precio.value, categoria.value, stock.value).subscribe({
      next: async (data: any) => {
        const productId = data.id; // Asegúrate de que el backend retorne el ID del producto recién creado
        console.log('Producto registrado:', productId);
  
        // Si hay una imagen seleccionada, subirla
        if (image) {
          this.productServise.SubirImagenProducto(productId, image).subscribe({
            next: async () => {
              debugger
              await loading.dismiss();
              const alert = await this.alertController.create({
                header: 'Registro exitoso',
                message: 'Producto y su imagen registrados correctamente.',
                buttons: ['OK'],
              });
              await alert.present();
              this.router.navigateByUrl('/lista-productos'); // Redirige a la lista de productos tras el registro
            },
            error: async (error: any) => {
              debugger
              await loading.dismiss();
              console.error('Error al subir la imagen:', error);
  
              const alert = await this.alertController.create({
                header: 'Error',
                message: 'Producto registrado, pero hubo un problema al subir la imagen.',
                buttons: ['OK'],
              });
              await alert.present();
            },
          });
        } else {
          // Si no hay imagen, solo cerrar el loading y mostrar éxito
          await loading.dismiss();
          const alert = await this.alertController.create({
            header: 'Registro exitoso',
            message: 'Producto registrado correctamente.',
            buttons: ['OK'],
          });
          await alert.present();
          this.router.navigateByUrl('/lista-productos');
        }
      },
      error: async (error: any) => {
        debugger
        await loading.dismiss();
        console.error('Error al registrar el producto:', error);
  
        const alert = await this.alertController.create({
          header: 'Error',
          message: error.error.message || 'Ocurrió un error al registrar el producto.',
          buttons: ['OK'],
        });
        await alert.present();
      },
    });
  }

}
