import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessComponent } from './chess.component';
import {Rook} from './ChessPieceClasses/Rook';
import {Queen} from './ChessPieceClasses/Queen';
import {King} from './ChessPieceClasses/King';



describe('ChessComponent', () => {
  let component: ChessComponent;
  let fixture: ComponentFixture<ChessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  //Functional test to see if check will
  //trigger correctly for King
  it('should CHECK King', () => {

    /*
    *
    * "Mocked up" data values below
    * 
    */

    component.myChessBoard = 
                          [['','','','','','','','WK']
                          ,['','','','','B','B','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','BK','','','']];

    //2D Array (Table) used to map possible movements and attacks of white and black pieces
    //component is needed to find out if King is in check/checkmate
    component.possibleBlackMovementsBoard =
                          [['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']]; 
    component.possibleWhiteMovementsBoard =
                          [['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']];


    component.myChessPieces = new Array(4);
    component.myChessPieces[0] = new Rook(1, 5, true);
    component.myChessPieces[1] = new Queen(1, 4, true);
    component.myChessPieces[2] = new King(0, 7, false);
    component.myChessPieces[3] = new King(7, 4, true);

    (component.myChessPieces[3] as King).numSubordinates = 2;
    (component.myChessPieces[2] as King).numSubordinates = 1;
    component.currentPlayerColorStr='B';

    //Move Queen to Square, thus there should be check
    //and checkmate
    component.myChessBoard[1][4] = '';
    component.myChessBoard[0][5] = 'B';

    component.myChessPieces[1].row = 0;
    component.myChessPieces[1].column = 5;


    //Calculate new movements now that check/checkmate possible
    component.clearAllPiecesPossibleMovement();
    component.calculateAllPossibleMoves();

    //King should be in check, return true to pass test;
    let isInCheck = (component.myChessPieces[2] as King).isInCheck;
    expect(isInCheck).toBeTrue();

  });

  //Functional test to see if check will
  //not trigger for King
  it('should NOT CHECK King', () => {

    /*
    *
    * "Mocked up" data values below
    * 
    */

    component.myChessBoard = 
                          [['','','','','','','','WK']
                          ,['','','','','B','B','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','BK','','','']];

    //2D Array (Table) used to map possible movements and attacks of white and black pieces
    //component is needed to find out if King is in check/checkmate
    component.possibleBlackMovementsBoard =
                          [['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']]; 
    component.possibleWhiteMovementsBoard =
                          [['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']];


    component.myChessPieces = new Array(4);
    component.myChessPieces[0] = new Rook(1, 5, true);
    component.myChessPieces[1] = new Queen(1, 4, true);
    component.myChessPieces[2] = new King(0, 7, false);
    component.myChessPieces[3] = new King(7, 4, true);

    (component.myChessPieces[3] as King).numSubordinates = 2;
    (component.myChessPieces[2] as King).numSubordinates = 1;
    component.currentPlayerColorStr='B';

    /*
    *
    * Functional Test below
    * 
    */

    //Calculate new movements now that check/checkmate possible
    component.clearAllPiecesPossibleMovement();
    component.calculateAllPossibleMoves();

    //King should be in check, return true to pass test;
    let isInCheck = (component.myChessPieces[2] as King).isInCheck;
    expect(isInCheck).toBeFalse();

  });

  //Functional test to see if check will
  //trigger correctly
  it('should CHECKMATE King', () => {

    /*
    *
    * "Mocked up" data values below
    * 
    */

    component.myChessBoard = 
                          [['','','','','','','','WK']
                          ,['','','','','B','B','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','BK','','','']];


    component.possibleBlackMovementsBoard =
                          [['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']]; 
    component.possibleWhiteMovementsBoard =
                          [['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']];


    component.myChessPieces = new Array(4);
    component.myChessPieces[0] = new Rook(1, 5, true);
    component.myChessPieces[1] = new Queen(1, 4, true);
    component.myChessPieces[2] = new King(0, 7, false);
    component.myChessPieces[3] = new King(7, 4, true);

    (component.myChessPieces[3] as King).numSubordinates = 2;
    (component.myChessPieces[2] as King).numSubordinates = 1;
    component.currentPlayerColorStr='B';

    
    /*
    *
    * Functional Test below
    * 
    */

    //Move Queen to Square, thus there should be check
    //and checkmate
    component.myChessBoard[1][4] = '';
    component.myChessBoard[0][5] = 'B';

    component.myChessPieces[1].row = 0;
    component.myChessPieces[1].column = 5;


    //Calculate new movements now that check/checkmate possible
    component.clearAllPiecesPossibleMovement();
    component.calculateAllPossibleMoves();

    //King should be in check, return true to pass test;
    let isInCheck = (component.myChessPieces[2] as King).isCheckMate;
    expect(isInCheck).toBeTrue();

  });

  //Functional test to see if checkmate will
  //not trigger when King is not in checkmate
  it('should NOT CHECKMATE King', () => {

    /*
    *
    * "Mocked up" data values below
    * 
    */
    component.myChessBoard = 
                          [['','','','','','','','WK']
                          ,['','','','','B','B','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','BK','','','']];

    //2D Array (Table) used to map possible movements and attacks of white and black pieces
    //component is needed to find out if King is in check/checkmate
    component.possibleBlackMovementsBoard =
                          [['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']]; 
    component.possibleWhiteMovementsBoard =
                          [['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']];

    component.myChessPieces = new Array(4);
    component.myChessPieces[0] = new Rook(1, 5, true);
    component.myChessPieces[1] = new Queen(1, 4, true);
    component.myChessPieces[2] = new King(0, 7, false);
    component.myChessPieces[3] = new King(7, 4, true);

    (component.myChessPieces[3] as King).numSubordinates = 2;
    (component.myChessPieces[2] as King).numSubordinates = 1;
    component.currentPlayerColorStr='B';

    /*
    *
    * Functional Test below
    * 
    */

    //Calculate new movements now that check/checkmate possible
    component.clearAllPiecesPossibleMovement();
    component.calculateAllPossibleMoves();

    //King should be in check, return true to pass test;
    let isInCheck = (component.myChessPieces[2] as King).isCheckMate;
    expect(isInCheck).toBeFalse();

  });

  //Functional test to see if checkmate will
  //trigger in case that King is last piece
  //AND cannot move into a space where it won't
  //be hit
  it('should CHECKMATE King when last piece NO CHECK', () => {

    /*
    *
    * "Mocked up" data values below
    * 
    */
    component.myChessBoard = 
                          [['','','','','','','','WK']
                          ,['','','','','','B','','']
                          ,['','','','','','','B','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','BK','','','']];

    //2D Array (Table) used to map possible movements and attacks of white and black pieces
    //component is needed to find out if King is in check/checkmate
    component.possibleBlackMovementsBoard =
                          [['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']]; 
    component.possibleWhiteMovementsBoard =
                          [['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']];


    component.myChessPieces = new Array(4);
    component.myChessPieces[0] = new Rook(2, 6, true);
    component.myChessPieces[1] = new Queen(1, 5, true);
    component.myChessPieces[2] = new King(0, 7, false);
    component.myChessPieces[3] = new King(7, 4, true);

    (component.myChessPieces[3] as King).numSubordinates = 2;
    (component.myChessPieces[2] as King).numSubordinates = 0;
    component.currentPlayerColorStr='B';

    /*
    *
    * Functional Test below
    * 
    */

    //Calculate new movements now that check/checkmate possible
    component.clearAllPiecesPossibleMovement();
    component.calculateAllPossibleMoves();

    //King should be in check, return true to pass test;
    let isInCheck = (component.myChessPieces[2] as King).isCheckMate;
    expect(isInCheck).toBeTrue();

  });

  //Functional test to see if checkmate will
  //trigger in case that King is last piece
  //AND cannot move into a space where it won't
  //be hit
  it('should CHECKMATE King when last piece NO CHECK and King can hit piece', () => {

    /*
    *
    * "Mocked up" data values below
    * 
    */
    component.myChessBoard = 
                          [['','','','','','','','WK']
                          ,['','','','','','B','B','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','BK','','','']];

    //2D Array (Table) used to map possible movements and attacks of white and black pieces
    //component is needed to find out if King is in check/checkmate
    component.possibleBlackMovementsBoard =
                          [['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']]; 
    component.possibleWhiteMovementsBoard =
                          [['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']
                          ,['','','','','','','','']];


    component.myChessPieces = new Array(4);
    component.myChessPieces[0] = new Rook(1, 6, true);
    component.myChessPieces[1] = new Queen(1, 5, true);
    component.myChessPieces[2] = new King(0, 7, false);
    component.myChessPieces[3] = new King(7, 4, true);

    (component.myChessPieces[3] as King).numSubordinates = 2;
    (component.myChessPieces[2] as King).numSubordinates = 0;
    component.currentPlayerColorStr='B';

    /*
    *
    * Functional Test below
    * 
    */

    //Calculate new movements now that check/checkmate possible
    component.clearAllPiecesPossibleMovement();
    component.calculateAllPossibleMoves();
    console.log("Final attack board: ");
    console.log(component.possibleBlackMovementsBoard);

    //King should be in check, return true to pass test;
    let isInCheckMate = (component.myChessPieces[2] as King).isCheckMate;
    console.log("Final result: " + isInCheckMate);
    console.log("King move board:")
    console.log(component.myChessPieces[2].possibleMoveBoard);
    expect(isInCheckMate).toBeTrue();

  });



});
