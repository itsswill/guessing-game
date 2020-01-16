import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuessingService {
  constructor() { }

  getSecretNumber() {
    const secretNum = Math.ceil(Math.random() * 99);
    console.log(secretNum);
    return secretNum;
  }
}




