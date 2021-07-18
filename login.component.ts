//import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators , NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

import { Users } from '../Users';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {













login : any;
  flag : number=1;


  constructor(private router : Router, private lgService : LoginService ) { }

  ngOnInit(): void {

    //this.lgService.getUser().subscribe(data => (this.login = data)


    this.lgService.getUser().subscribe((data => this.login = data['users'])

 )

 //console.log(this.login)

  }



//mahesh code

 /*ngOnInit() {

    //this.lgService.getUser().subscribe(data => (this.login = data)


    this.lgService.getUser().subscribe(data =>{
       this.login = data['users'];
       console.log(this.login);

    })*/

 //console.log(this.login)

  //}















loginUser(value:any){



  /*loginUser(value:any){
    this.login.filter(<any>res=>{
    })*/


/*const validlogin=this.login.filter(res=>{
  res.email===value.email&&
})*/


for(let i=0 ; i< this.login.length; i++)
{
    if (this.login[i].email === value.useremail && this.login[i].password === value.password)
    {
        console.log("User Found");
        localStorage.setItem('credentials' , JSON.stringify(value))
        this.router.navigateByUrl('/home')
        this.flag = 0;

    }


}
//console.log(value);


if(this.flag === 1){
  console.log('Enter Valid credentails');
}
return this.flag = 0;

}

}
