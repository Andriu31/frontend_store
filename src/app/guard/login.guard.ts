import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'

})

export class LoginGuard implements CanActivate  {
  constructor(private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {


  const token = localStorage.getItem('token');
  if(token ){
    this.router.navigate(['/inicio-tienda'])
    return false;

  }
  return true;
}
}
