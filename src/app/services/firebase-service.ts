import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from "firebase/app";

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  

  firebaseConfig = {
    apiKey: "AIzaSyA8GmJk0gxmqGBKtCi5QNqFV0JWY6UieG8",

    authDomain: "feed-reader-99771.firebaseapp.com",

    projectId: "feed-reader-99771",

    storageBucket: "feed-reader-99771.firebasestorage.app",

     messagingSenderId: "650324065522",

    appId: "1:650324065522:web:339e19d15c754692e8246b"
  };

  app: FirebaseApp;

  constructor() {
    this.app = initializeApp(this.firebaseConfig);
  }
}
