import { Injectable } from  '@angular/core';
import * as Firebase from 'firebase/app';
import { AngularFireAuth  } from  "@angular/fire/auth";
import { Router } from '@angular/router';
import firebase from 'firebase';
import { BehaviorSubject } from 'rxjs';

//import {firebaseConfig} from '../app.module../app.module'


@Injectable({
    providedIn:  'root'
})
export class AuthService {
    private loggedIn = new BehaviorSubject<boolean>(false);
    constructor(public  afAuth:  AngularFireAuth, public  router:  Router) {}
    get isLoggedIn() {
        return this.loggedIn.asObservable(); // {2}
      }

    async login(email:string,password: string){
        var result = await this.afAuth.signInWithEmailAndPassword(email, password);
        this.router.navigate(['/home']);
        this.loggedIn.next(true);

    }

    async loginGoogle(){
        await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
        this.loggedIn.next(true);
            this.router.navigate(['/home']);
        }

    async loginFacebook(){
        this.loggedIn.next(true);
        this.router.navigate(['/home']);
    }
    }

