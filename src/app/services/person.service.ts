import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http:HttpClient) { }

  updatePerson(id:any, name:any, lastname:any, ci:any, address:any, phone:any){
    const data ={
      id:id,
      name:name,
      lastname:lastname,
      ci:ci,
      address:address,
      phone:phone
    }
    const header = new HttpHeaders()
    .set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.put<any>('http://127.0.0.1:3000/api/person/'+id, data, { headers: header });
  }

 updateImage(id:any, image:any){
const data = new FormData();
data.append('file', image);
console.log('ID:', id);
  console.log('Image:', image);

return this.http.put<any>('http://127.0.0.1:3000/api/update/image/'+id, data);
 }


}



   

