import { Component, OnInit } from '@angular/core';
import {ChessPiece} from "./ChessPieceClasses/ChessPiece";
import {Pawn} from "./ChessPieceClasses/Pawn"
import { Rook } from './ChessPieceClasses/Rook';
import { Knight } from './ChessPieceClasses/Knight';
import { Bishop } from './ChessPieceClasses/Bishop';
import { Queen } from './ChessPieceClasses/Queen';
import { King } from './ChessPieceClasses/King';

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.css']
})
export class ChessComponent implements OnInit {

  myChessBoard: string[][];
  possibleWhiteMovementsBoard: string[][];
  possibleBlackMovementsBoard: string[][];
  myChessPieces: ChessPiece[];
  clickedPieceIndex: number;
  clickedPieceId: string;
  clickedPieceRow: number;
  clickedPieceCol: number;
  currentPlayerColorStr: string;
  blackKingCheck: boolean = false;
  whiteKingCheck: boolean = false;

  constructor() {
    this.buildPieces();
    this.buildBoards();
    this.clickedPieceIndex = -1;
  }

  ngOnInit(): void 
  {
    this.myChessPieces[0].greet();
    this.myChessPieces[16].greet();
    this.newGame(); 
    this.calculateAllPossibleMoves();
  }

  //Handles on click of square events
  handleSqrClick(event): void {
    var target = event.currentTarget;
    var squareId = target.id;
    let row: number = parseInt(squareId[6])-1;
    let col: number = parseInt(squareId[10])-1;

    //Case 1: Click is a piece on your side so calculate movement possible
    //and mark board
    if((this.myChessBoard[row][col] == this.currentPlayerColorStr) || (this.myChessBoard[row][col] == (this.currentPlayerColorStr + 'K'))) {
      if( this.existPiece(row, col) ) {
        let pieceIndex: number = this.findChessPieceByRowCol(row, col);
        this.cleanBoardMarks();
        this.clickedPieceRow = row;
        this.clickedPieceCol = col;
        this.clickedPieceIndex = pieceIndex;
        this.clickedPieceId = squareId;
        if(this.myChessPieces[pieceIndex].type == 'King') {
          if(this.currentPlayerColorStr == 'W') {
            this.myChessPieces[pieceIndex].calculatePossibleMovements(this.myChessBoard, this.myChessPieces[pieceIndex].possibleMoveBoard, this.possibleBlackMovementsBoard);
          }
          else {
            this.myChessPieces[pieceIndex].calculatePossibleMovements(this.myChessBoard, this.myChessPieces[pieceIndex].possibleMoveBoard, this.possibleWhiteMovementsBoard);
          }
        }
        else {
          this.myChessPieces[pieceIndex].calculatePossibleMovements(this.myChessBoard, this.myChessPieces[pieceIndex].possibleMoveBoard, null);
          if(this.myChessPieces[pieceIndex].type == "Pawn") {
            (this.myChessPieces[pieceIndex] as Pawn).calculatePossibleAttacks(this.myChessBoard, this.myChessPieces[pieceIndex].possibleMoveBoard);
          }
        }
        this.myChessPieces[pieceIndex].markPossibleMoveBoard();
      }
    }
    //Case 2: You've selected a piece already, validate if can move and move to space
    //OR there is enemy so destroy and then move
    else if(this.clickedPieceIndex != -1 && this.myChessPieces[this.clickedPieceIndex].isPossibleMove(row, col)) {
      if(this.myChessBoard[row][col] != '') {
        this.destroyChessPiece(squareId, row, col);
      }
        this.moveChessPiece(squareId, row, col);
    }
    //Case 3: You clicked on random or enemy space, clear and do nothing
    //OR do nothing
    else {

    }
    //console.log(squareId);
  }

  //Returns true if piece exists in given row and col
  existPiece(row: number, col: number): boolean {
    if(this.myChessBoard[row][col] != '') {
        return true;
    }
    else {
      return false;
    }
  }

  //Returns integer index of ChessPiece obj for given row and col
  findChessPieceByRowCol(row: number, col: number): number {
    for(let i = 0; this.myChessPieces.length; i++) {
      if(this.myChessPieces[i].row == row && this.myChessPieces[i].column == col) {
        return i;
      }
    }
    return -1;
  }

  //Boards 2D Arrays for boards
  buildBoards() {
    //2D Array (Table) used to map where the pieces are on table
    //
    this.myChessBoard = [['W','W','W','W','WK','W','W','W']
                        ,['W','W','W','W','W','W','W','W']
                        ,['','','','','','','','']
                        ,['','','','','','','','']
                        ,['','','','','','','','']
                        ,['','','','','','','','']
                        ,['B','B','B','B','B','B','B','B']
                        ,['B','B','B','B','BK','B','B','B']];

    //2D Array (Table) used to map possible movements and attacks of white and black pieces
    //This is needed to find out if King is in check/checkmate
    this.possibleBlackMovementsBoard =
                          [['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']]; 
    this.possibleWhiteMovementsBoard =
                          [['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']];
    
  }

  //Build ChessPiece objects for game
  //Note: Only adds pawns for now
  buildPieces() {

    this.myChessPieces = new Array(32);

    //Creates Pawns
    for(let i = 0; i < 8; i++) {
      this.myChessPieces[i] = new Pawn(1, i, false);
      this.myChessPieces[i+8] = new Pawn(6, i, true);
    }

    //Create Rooks
    this.myChessPieces[16] = new Rook(0, 0, false);
    this.myChessPieces[17] = new Rook(0, 7, false);
    this.myChessPieces[18] = new Rook(7, 0, true);
    this.myChessPieces[19] = new Rook(7, 7, true);

    //Create Knights
    this.myChessPieces[20] = new Knight(0, 1, false);
    this.myChessPieces[21] = new Knight(0, 6, false);
    this.myChessPieces[22] = new Knight(7, 1, true);
    this.myChessPieces[23] = new Knight(7, 6, true);

    //Create Knights
    this.myChessPieces[24] = new Bishop(0, 2, false);
    this.myChessPieces[25] = new Bishop(0, 5, false);
    this.myChessPieces[26] = new Bishop(7, 2, true);
    this.myChessPieces[27] = new Bishop(7, 5, true);

    //Create Queens
    this.myChessPieces[28] = new Queen(0, 3, false);
    this.myChessPieces[29] = new Queen(7, 3, true);

    //Create Kings
    this.myChessPieces[this.myChessPieces.length-2] = new King(0, 4, false);
    this.myChessPieces[this.myChessPieces.length-1] = new King(7, 4, true);
  }

  //Function resets board back to original color/state
  cleanBoardMarks() {
    let whiteSquareObj = document.getElementsByClassName("whiteSquare") as HTMLCollectionOf<HTMLElement>;;
    let blackSquareObj = document.getElementsByClassName("blackSquare") as HTMLCollectionOf<HTMLElement>;;
    for(let i = 0; i < whiteSquareObj.length; i++) {
      whiteSquareObj[i].style.backgroundColor = "#F8F8FF";
      whiteSquareObj[i].style.borderStyle = 'none';
      blackSquareObj[i].style.backgroundColor = "#808080";
      blackSquareObj[i].style.borderStyle = 'none';
    }

  }

  //Moves selected piece to destination square
  moveChessPiece(destId: string, destRow: number, destCol: number): void {
    
    let currentSqr = document.getElementById(this.clickedPieceId);
    let destSqr = document.getElementById(destId);
    let pieceSpanNode = currentSqr.childNodes[0];

    //Take care of removing from original spot
    currentSqr.removeChild(currentSqr.childNodes[0]);
    let tempBoardStr: string = this.myChessBoard[this.clickedPieceRow][this.clickedPieceCol];
    this.myChessBoard[this.clickedPieceRow][this.clickedPieceCol] = '';

    //Adjust chess of moving piece to new spot
    this.myChessBoard[destRow][destCol] = tempBoardStr;
    this.myChessPieces[this.clickedPieceIndex].row = destRow;
    this.myChessPieces[this.clickedPieceIndex].column = destCol;
    if(this.myChessPieces[this.clickedPieceIndex].type == "Pawn") {
      (this.myChessPieces[this.clickedPieceIndex] as Pawn).isFirstMovement = false;
    }
    destSqr.appendChild(pieceSpanNode);

    //Clear movement board before moving
    this.cleanBoardMarks();
    this.clearAllPiecesPossibleMovement();
    this.clearPossibleAttacksAndMovements();
    this.calculateAllPossibleMoves();
    this.nextTurn();
  }


  destroyChessPiece(destId: string, destRow: number, destCol: number): void {
    let destSqr = document.getElementById(destId);
    let pieceSpanNode = destSqr.childNodes[0];
    destSqr.removeChild(pieceSpanNode);
    let pieceIndex: number = this.findChessPieceByRowCol(destRow, destCol);
    this.myChessPieces[pieceIndex].row = -1;
    this.myChessPieces[pieceIndex].column = -1;
    if(this.currentPlayerColorStr == 'W') {
      (this.myChessPieces[this.myChessPieces.length-2] as King).numSubordinates--;
    }
    else {
      (this.myChessPieces[this.myChessPieces.length-1] as King).numSubordinates--;
    }

    //Will possibly look into removing piece from list to make searches
    //more efficient. Weird errors occured when using line below
    //that appear to cause from the row/col numbers messed up.
    //Could be deleting wrong one?

    //console.log("destRow: " + destRow + " - destCol: " + destCol);
    //console.log("destRow: " + this.myChessPieces[pieceIndex].row + " - destCol: " + this.myChessPieces[pieceIndex].column);
    //console.log("pieceIndex: " + pieceIndex);
    //this.myChessPieces.splice(pieceIndex, 1);
  }

  //Switches Current Player on screen to opposite team
  switchPlayerOnScreen(currentPlayerStr: string) {
    let myTextSpan: HTMLElement = document.getElementById("currentPlayer");
    if(currentPlayerStr == 'W') {
      myTextSpan.innerHTML="White";
    }
    else {
      myTextSpan.innerHTML="Black";
    }
  }

  //Switches player turn in backend
  nextTurn() {
    if(this.currentPlayerColorStr == 'W') {
      this.currentPlayerColorStr = 'B'
      this.switchPlayerOnScreen('B');
    }
    else {
      this.currentPlayerColorStr = 'W'
      this.switchPlayerOnScreen('W');
    }
  }

  //Picks a random player and starts game
  newGame() {
    let randomPlayer = Math.floor(Math.random() * 2);
    if(randomPlayer == 0) {
      this.currentPlayerColorStr='W';
      this.switchPlayerOnScreen('W');
    }
    else {
      this.currentPlayerColorStr='B';
      this.switchPlayerOnScreen('B');
    }
  }

  //Clears calculated possible moves for all individual pieces
  clearAllPiecesPossibleMovement(): void {
    for(let i = 0; i < this.myChessPieces.length; i++) {
      this.myChessPieces[i].clearPossibleMoveBoard();
    }
  }

  clearPossibleAttacksAndMovements() {
    //2D Array (Table) used to map possible movements of white and black pieces
    //This is needed to find out if King is in check/checkmate
    this.possibleBlackMovementsBoard =
                          [['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']]; 
    this.possibleWhiteMovementsBoard =
                          [['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']];
  }

  //Functon needs to be updated to handle pieces that have been destroy
  //i.e. they have xpos = -1 and ypos = -1
  //Seems to be causing an error when destroying pieces
  calculateAllPossibleMoves() {
    //All Pieces minus Kings
    for(let i = 0; i < this.myChessPieces.length-2; i++) {
      if(this.myChessPieces[i].isBlack && this.myChessPieces[i].row != -1) {
        if(this.myChessPieces[i].type == "Pawn") {
          (this.myChessPieces[i] as Pawn).calculatePossibleAttacks(this.myChessBoard, this.possibleBlackMovementsBoard);
        }
        else {
          this.myChessPieces[i].calculatePossibleMovements(this.myChessBoard, this.possibleBlackMovementsBoard, null);
        }
      }
      else if(this.myChessPieces[i].row != -1) {
        if(this.myChessPieces[i].type == "Pawn") {
          (this.myChessPieces[i] as Pawn).calculatePossibleAttacks(this.myChessBoard, this.possibleWhiteMovementsBoard);
        }
        else {
          this.myChessPieces[i].calculatePossibleMovements(this.myChessBoard, this.possibleWhiteMovementsBoard, null);
        }
      }
    }

    this.areKingsInCheck();

    //White King
    this.myChessPieces[this.myChessPieces.length-2].calculatePossibleMovements(this.myChessBoard, this.possibleWhiteMovementsBoard, this.possibleBlackMovementsBoard);
    //Black King
    this.myChessPieces[this.myChessPieces.length-1].calculatePossibleMovements(this.myChessBoard, this.possibleBlackMovementsBoard, this.possibleWhiteMovementsBoard);

    console.log("White Moves\n")
    console.log(this.possibleWhiteMovementsBoard);
    console.log("Black Noves\n");
    console.log(this.possibleBlackMovementsBoard);

    this.updateKingStatus();

  }

  areKingsInCheck(): void {
    if(this.possibleBlackMovementsBoard[this.myChessPieces[this.myChessPieces.length-2].row][this.myChessPieces[this.myChessPieces.length-2].column] == 'R') {
      this.whiteKingCheck = true;
      (this.myChessPieces[this.myChessPieces.length-2] as King).isInCheck = true;
    }
    else {
      this.whiteKingCheck = false;
      (this.myChessPieces[this.myChessPieces.length-2] as King).isInCheck = false;

    }
    
    if(this.possibleWhiteMovementsBoard[this.myChessPieces[this.myChessPieces.length-1].row][this.myChessPieces[this.myChessPieces.length-1].column] == 'R') {
      this.blackKingCheck = true;
      (this.myChessPieces[this.myChessPieces.length-1] as King).isInCheck = true;
    }
    else {
      this.blackKingCheck = false;
      (this.myChessPieces[this.myChessPieces.length-1] as King).isInCheck = false;
    }
  }

  updateKingStatus(): void {
    if((this.myChessPieces[this.myChessPieces.length-2] as King).isCheckMate) {
      document.getElementById('whiteKingStatus').innerHTML = "Checkmate, Game Over";
      return
    }
    else if(this.whiteKingCheck) {
      document.getElementById('whiteKingStatus').innerHTML = "Check, must move King";
    }
    else {
      document.getElementById('whiteKingStatus').innerHTML = "Safe";
    }

    if((this.myChessPieces[this.myChessPieces.length-1] as King).isCheckMate) {
      document.getElementById('blackKingStatus').innerHTML = "Checkmate, Game Over";
      return;
    }
    else if(this.blackKingCheck) {
      document.getElementById('blackKingStatus').innerHTML = "Check, must move King";
    }
    else {
      document.getElementById('blackKingStatus').innerHTML = "Safe";
    }
  }

}
