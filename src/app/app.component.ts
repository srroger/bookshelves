import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookshelves';
  constructor() {
  	// Initialize Firebase
	  var config = {
	    apiKey: "AIzaSyDIyXrRvkSZbgL0H02ZU8kmuKX3VzjVEXQ",
	    authDomain: "bookshelves-d4fce.firebaseapp.com",
	    databaseURL: "https://bookshelves-d4fce.firebaseio.com",
	    projectId: "bookshelves-d4fce",
	    storageBucket: "bookshelves-d4fce.appspot.com",
	    messagingSenderId: "134906042837"
	  };
	  firebase.initializeApp(config);
  }
}
