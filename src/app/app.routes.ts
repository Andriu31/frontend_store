import { Routes } from '@angular/router';
import { PermissionGuard } from './guard/permission.guard';
import { LoginGuard } from './guard/login.guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
      path: '',
      redirectTo: 'welcome',
      pathMatch: 'full',
  },
  {
    path: 'welcome',
    loadComponent: () => import('./welcome/welcome.page').then( m => m.WelcomePage),
    canActivate: [LoginGuard]
  },
  {
    path: 'inicio-secion',
    loadComponent: () => import('./inicio-secion/inicio-secion.page').then( m => m.InicioSecionPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
  },
  {
    path: '',
    redirectTo: 'inicio-secion',
    pathMatch: 'full'
  },
  {
    path: 'bienvenida',
    loadComponent: () => import('./bienvenida/bienvenida.page').then( m => m.BienvenidaPage)
  },
  {
    path: 'inicio-tienda',
    loadComponent: () => import('./inicio-tienda/inicio-tienda.page').then( m => m.InicioTiendaPage)
  },
  {
    path: 'person',
    loadComponent: () => import('./person/person.page').then( m => m.PersonPage)
  },
  {
    path: 'catalogo',
    loadComponent: () => import('./catalogo/catalogo.page').then( m => m.CatalogoPage)
  },

 
  
  {
    path: 'carrito',
    loadComponent: () => import('./pages/carrito/carrito.page').then( m => m.CarritoPage)
  },
  {
    path: 'detalle-producto',
    loadComponent: () => import('./pages/detalle-producto/detalle-producto.page').then( m => m.DetalleProductoPage)
  },
  {
    path: 'agregar-producto',
    loadComponent: () => import('./agregar-producto/agregar-producto.page').then( m => m.AgregarProductoPage),
    canActivate: [PermissionGuard]
  },
];
