import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  private cells: string[] = [];
  private turn = 'x';
  private gameover = false;
  private winner = null;

  ngOnInit() {
    for (let i = 0; i < 9; i++) {
      this.cells[i] = null;
    }
  }

  reset() {
    for (let i = 0; i < 9; i++) {
      this.cells[i] = null;
    }
    this.turn = 'x';
    this.gameover = false;
    this.winner = null;
  }

  clickHandler(idx: number) {
    if (!this.gameover) {
      if (this.cells[idx] === null) {
        this.cells[idx] = this.turn;
        this.checkWinner();
        this.changeTurn();
      }
    }
  }

  changeTurn() {
    /* to Complete **/
    if(!this.gameover){
      this.turn='O';
      this.gameover = false;
      this.winner = 1;
    }
    else {
      this.turn='X';
    }
  }

  checkWinner() {
    /* To complete **/
   this.winner="";
  }
}
