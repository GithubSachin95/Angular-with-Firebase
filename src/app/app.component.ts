import { Component } from '@angular/core';
import {AngularFireDatabase ,AngularFireList} from '@angular/fire/database'
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  Header : String ="Books";
  Books : Observable<any[]>;
  updatedBooks : any[];
  //books = ["book1","book1","book1","book1"];
  constructor (db : AngularFireDatabase){
    // this.Books = db.list('/Books').valueChanges();
    // this.Books.subscribe(Books =>{
    //   this.updatedBooks= Books;
    //   console.log(this.updatedBooks);
    // });


  }
}
