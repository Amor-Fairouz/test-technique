import { Component, OnInit, ElementRef } from '@angular/core';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  private cells: string[] = [];
  private turn : string;
  private gameover = false;
  private winner : string;
  private xIsNext: boolean;
 
  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  constructor() {}

  ngOnInit() {
    this.newGame();
  }
 newGame() {
    this.cells = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
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
        this.changeTurn(idx);
      }
    }
  }

  changeTurn(idx:number) {
    /* to Complete **/
    if (!this.cells[idx]) {
      this.cells.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.checkWinner();
    
  }

  checkWinner() {
    /* To complete **/
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.cells[a] &&
        this.cells[a] === this.cells[b] &&
        this.cells[a] === this.cells[c]
      ) {
        return this.cells[a];
      }
    }
    return this.winner;
   }
}
