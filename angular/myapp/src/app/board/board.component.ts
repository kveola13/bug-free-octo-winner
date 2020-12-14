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
  }

}
