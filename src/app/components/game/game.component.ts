import { Component, OnInit } from '@angular/core';
import { GuessingService } from '../../services/guessing.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  userGuess: string;
  secretNum: number;
  showCorrectAlert: boolean;
  showLowIncorrectAlert: boolean;
  showHighIncorrectAlert: boolean;

  constructor(private guessServ: GuessingService) { }

  ngOnInit() {

    this.secretNum = this.guessServ.getSecretNumber();
  }

  /**
   * Captures user's guess and compares it with secret number!!!
   */

    playGame() {
    console.log(this.userGuess);
    console.log(this.secretNum);
    if (parseInt(this.userGuess) === this.secretNum) {
      this.showCorrectAlert = true;
      console.log('correct');
    } else if (parseInt(this.userGuess) < this.secretNum) {
      this.showLowIncorrectAlert = true;
      console.log('incorrect!, low guess');
    } else if (parseInt(this.userGuess) > this.secretNum) {
      this.showHighIncorrectAlert = true;
      console.log('incorrect, high guess');
    }
  }
}
