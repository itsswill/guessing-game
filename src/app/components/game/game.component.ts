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
      console.log('correct');
    } else {
      console.log('incorrect!');
    }
  }
}
