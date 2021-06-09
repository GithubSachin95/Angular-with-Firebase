import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'sign-up',
  templateUrl: './signup.component.html',
  styleUrls:['./signup.component.css'] 
})
export class SignUpComponent {
  Username : string = "p2s2.home@gmail.com";
  password : string = "P2S2@1234";


  constructor(private auth : AuthService , private router : Router){


  }
  Signup(){ 
    console.log("Login with Normal user id and password");
    this.auth.signUp(this.Username,this.password);

}

  
}
