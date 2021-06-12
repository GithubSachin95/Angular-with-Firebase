import { Component ,OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  constructor(private auth : AuthService){


  }

  ngOnInit(){
    this.isLoggedIn$ = this.auth.isLoggedIn;
  }


   logout = () => {
    this.auth.logout();
  }
  
  navigation = (input) =>{
    console.log(input);
  }
  
}
