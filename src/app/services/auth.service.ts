import { Injectable } from  '@angular/core';
import * as Firebase from 'firebase/app';
import { AngularFireAuth  } from  "@angular/fire/auth";
import { Router } from '@angular/router';
import firebase from 'firebase';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn:  'root'
})
export class AuthService {

    private  actionCodeSettings = {
        url: 'https://www.example.com/?email=' + 'dukale.sachin@gmail.com',
        iOS: {
          bundleId: 'com.example.ios'
        },
        android: {
          packageName: 'com.example.android',
          installApp: true,
          minimumVersion: '12'
        },
        handleCodeInApp: true,
        // When multiple custom dynamic link domains are defined, specify which
        // one to use.
        dynamicLinkDomain: "localhost"
      };
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

        await this.afAuth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
        this.loggedIn.next(true);
        this.router.navigate(['/home']);
    }

    async signUp(email:string,password: string){
        var result = await this.afAuth.createUserWithEmailAndPassword(email, password)
        this.afAuth.sendSignInLinkToEmail(email, this.actionCodeSettings );
    }
    }

