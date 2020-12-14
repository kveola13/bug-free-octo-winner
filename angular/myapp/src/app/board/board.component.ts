import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: any[] = [];
  xIsNext: boolean = false;
  winner: string = ""

  constructor() { }

  ngOnInit(): void {
    this.newGame()
  }

  newGame(){
    this.squares = Array(9).fill(null)
    this.xIsNext = true
  }

  get player(){
    return this.xIsNext ? "X" : "O"
  }

  makeMove(index: number){
    if(!this.squares[index]){
      this.squares.splice(index, 1, this.player)
      this.xIsNext = !this.xIsNext
    }
  }

}
