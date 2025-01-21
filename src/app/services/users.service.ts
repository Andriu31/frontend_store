import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor( private http:HttpClient) { }

  Slogin(email:any, password:any){
    const data ={
      "email":email,
      "password":password
    }
    return this.http.post('http://localhost:3000/api/login', data)
  }

  Sregister(user: any, email: any, password: any) {
    const data = {
     "user" :user,
     "email":email,
     "password":password
     
    };
    return this.http.post('http://localhost:3000/api/register', data);
  }

  getOneUser(id:number){
    
    const header = new HttpHeaders()
    .set('Authorization', `Bearer ${localStorage.getItem('token')}`);

    return this.http.get('http://localhost:3000/api/user/'+id, { headers: header });
  }

}


