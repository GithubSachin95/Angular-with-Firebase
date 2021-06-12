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
    constructor(public afAuth:  AngularFireAuth, public  router:  Router) {}
    get isLoggedIn() {
        if(localStorage.getItem('user') != null){
            this.loggedIn.next(true);
            
        }
        else if( localStorage.getItem('user') == null || localStorage.getItem('user') == undefined){{
            this.loggedIn.next(false);
            this.router.navigate(['/login']);
        }}
        return this.loggedIn.asObservable(); // {2}
      }

    async login(email:string,password: string){
        var result = await this.afAuth.signInWithEmailAndPassword(email, password);
        localStorage.setItem('user','active');
        this.router.navigate(['/home']);
        this.loggedIn.next(true);
    }

    async loginGoogle(){
            await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
            localStorage.setItem('user','active');
            this.loggedIn.next(true);
            this.router.navigate(['/home']);
        }

    async loginFacebook(){

        await this.afAuth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
        localStorage.setItem('user','active');
        this.loggedIn.next(true);
        this.router.navigate(['/home']);
    }

    async signUp(email:string,password: string){
        var result = await this.afAuth.createUserWithEmailAndPassword(email, password);
        this.afAuth.sendSignInLinkToEmail(email, this.actionCodeSettings);
    }

    async logout(){
        this.loggedIn.next(false);
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    }
    }

