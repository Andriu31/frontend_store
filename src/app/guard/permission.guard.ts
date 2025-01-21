import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'

})

export class PermissionGuard implements CanActivate  {
  constructor(private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {


  const idtu = localStorage.getItem('idtu');
  if(idtu != "2"){
    this.router.navigate(['/inicio-tienda'])
    return false;

  }
  return true;
}
}
