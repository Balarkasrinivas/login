import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import{ Http } from '@angular/http';
import { Users } from './Users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 /* constructor(private http:HttpClient) { }

  validateuser(username: any,password: any){
return true;*/



/*authuser(username:any,password:any){
  let userarray=[];
  if(localStorage.getItem("username"))*/





/*  getUser(){
  this.http.get('../assets/data/details.json')
}

  }

}*/






constructor(private http : HttpClient) { }


  getUser(){
    return this.http.get<any>('../assets/data.json');
  }
  isLoggedIn(){
    return !!localStorage.getItem("credentials")
  }
}