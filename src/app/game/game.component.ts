import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  currentPlayer: string;
  ticTacBoard: string[][];
  canvas: any;
  context: any;

  constructor() { }

  ngOnInit(): void {
    this.canvas = document.getElementById("myCanvas");
    this.context = this.canvas.getContext("2d");
    this.newGame();
  }

  newGame() {
    this.ticTacBoard = [["Z","Z","Z"],["Z","Z","Z"],["Z","Z","Z"]];
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.chooseRandomPlayer();
    this.writeMessage("Player " + this.currentPlayer + " turn");
    this.drawBoard()
  }

  drawBoard() {
    this.context.beginPath();
    this.context.moveTo(0, 100);
    this.context.lineTo(300, 100);
    this.context.stroke();
  
    this.context.beginPath();
    this.context.moveTo(0, 200);
    this.context.lineTo(300,200);
    this.context.stroke();
  
    this.context.beginPath();
    this.context.moveTo(100, 0);
    this.context.lineTo(100, 300);
    this.context.stroke();
  
    this.context.beginPath();
    this.context.moveTo(200, 0);
    this.context.lineTo(200,300);
    this.context.stroke();
  }

  drawX(row, col)
  {
    const xpos : number = 50 + 100 * col;
    const ypos : number = 50 + 100 * row;
    this.context.beginPath();
    this.context.moveTo(xpos-25, ypos-25);
    this.context.lineTo(xpos+25, ypos+25);
    this.context.stroke();

    this.context.beginPath();
    this.context.moveTo(xpos-25, ypos+25);
    this.context.lineTo(xpos+25, ypos-25);
    this.context.stroke();
  }

  drawO(row, col)
  {
    const xpos : number = 50 + 100 * col;
    const ypos : number = 50 + 100 * row;
    this.context.beginPath();
    this.context.arc(xpos,ypos,40,0,2*Math.PI)
    this.context.stroke();
  }

  chooseRandomPlayer()
  {
    const random : number = Math.floor(Math.random()*2);
    if(random === 0) {
      this.currentPlayer = 'O';
    }
    else {
      this.currentPlayer = 'X';
    }
  }

  ticTacToe(mousePos)
  {
    let row = -1;
    let col = -1;
    if(mousePos.x < 100) {
      col = 0;
    }
    else if (mousePos.x < 200) {
      col = 1;
    }
    else {
      col = 2;
    }

    if(mousePos.y < 100) {
      row = 0;
    }
    else if(mousePos.y < 200) {
      row = 1;
    }
    else {
      row = 2;
    }

    if(this.ticTacBoard[row][col] === 'Z')
    {
      if(this.currentPlayer === 'X') {
        this.ticTacBoard[row][col] = 'X';
        this.drawX(row, col);
        this.currentPlayer = 'O';    
      }
      else {
        this.ticTacBoard[row][col] = 'O';
        this.drawO(row, col);
        this.currentPlayer = 'X';
      }
      this.writeMessage("Player " + this.currentPlayer + " turn");
    }
    this.checkForWinner();
  }

  //Checks to see who if there is a winner and displays if there is one
 checkForWinner() 
 {
  //Checks for horizontal winners
  for(let i = 0; i < this.ticTacBoard.length; i++)
  {
    if(this.ticTacBoard[0][i] === this.ticTacBoard[1][i] && this.ticTacBoard[0][i] === this.ticTacBoard[2][i])
    {
      if(this.ticTacBoard[0][i] != 'Z') {
        this.writeMessage("Player " + this.ticTacBoard[0][i] + " wins!");
      }
    }
  }

  //Checks for vertical winners
  for(let i = 0; i < this.ticTacBoard.length; i++)
  {
    if(this.ticTacBoard[i][0] === this.ticTacBoard[i][1] && this.ticTacBoard[i][0] === this.ticTacBoard[i][2])
    {
      if(this.ticTacBoard[i][0] != 'Z') {
        this.writeMessage("Player " + this.ticTacBoard[0][i] + " wins!");
      }
    }
  }

  if( (this.ticTacBoard[0][0] === this.ticTacBoard[1][1]) && (this.ticTacBoard[1][1] === this.ticTacBoard[2][2]))
  {
    if(this.ticTacBoard[0][0] != 'Z') { 
    }
  }

  if( (this.ticTacBoard[0][2] === this.ticTacBoard[1][1]) && (this.ticTacBoard[0][2] === this.ticTacBoard[2][0]))
  {
    if(this.ticTacBoard[0][2] != 'Z') {
      this.writeMessage("Player " + this.ticTacBoard[0][2] + " wins!");
    }
  }
}

boardClicked() {
  let mousePos = this.getMousePos(this.canvas, event);
    if(mousePos.y > 300)
    {
      console.log("Clicked off of board")
    }
    else
    {
      this.ticTacToe(mousePos)
    }
}

getMousePos(canvas, event)
{
  var rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
}

  writeMessage(message)
  {
    this.context.beginPath();
    this.context.clearRect(0, 300, 300, 200);
    this.context.font = "30px Arial";
    this.context.fillText(message, 75, 350);
  }
}
