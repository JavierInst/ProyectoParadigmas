grammar BiesVM;

program
    : statement+ EOF
    ;

statement
    : assignment
    | ifStatement
    | prnInstruction
    | hltInstruction
    | ldvInstruction
    | addInstruction
    | subInstruction
    | mulInstruction
    | divInstruction
    | popInstruction
    | swpInstruction
    | bldInstruction
    | bstInstruction
    ;

// Assignment statement (e.g., let x = 5;)
assignment
    : LET ID '=' NUMBER SEMI
    ;

// If statement (e.g., if (condition) { ... })
ifStatement
    : IF LPAREN expression RPAREN block
    ;

// Print instruction (e.g., PRN x;)
prnInstruction
    : PRN ID SEMI
    ;

// Halt instruction (e.g., HLT;)
hltInstruction
    : HLT SEMI
    ;

// Load value instruction (e.g., LDV x;)
ldvInstruction
    : LDV ID SEMI
    ;

// Addition instruction (e.g., ADD;)
addInstruction
    : ADD SEMI
    ;

// Subtraction instruction (e.g., SUB;)
subInstruction
    : SUB SEMI
    ;

// Multiplication instruction (e.g., MUL;)
mulInstruction
    : MUL SEMI
    ;

// Division instruction (e.g., DIV;)
divInstruction
    : DIV SEMI
    ;

// Pop instruction (e.g., POP;)
popInstruction
    : POP SEMI
    ;

// Swap instruction (e.g., SWP;)
swpInstruction
    : SWP SEMI
    ;

// Build instruction (e.g., BLD;)
bldInstruction
    : BLD SEMI
    ;

// Store instruction (e.g., BST;)
bstInstruction
    : BST SEMI
    ;

// Block of statements (enclosed in braces)
block
    : LBRACE statement* RBRACE
    ;

// Expression for comparisons
expression
    : ID GREATER NUMBER
    ;

// Lexer rules
NUMBER   : [0-9]+ ;
ID       : [a-zA-Z_][a-zA-Z0-9_]* ;
WS       : [ \t\r\n]+ -> skip ;

LET      : 'LET';
IF       : 'IF';
ELSE     : 'ELSE';
PRN      : 'PRN';
HLT      : 'HLT';
LDV      : 'LDV';
ADD      : 'ADD';
SUB      : 'SUB';
MUL      : 'MUL';
DIV      : 'DIV';
POP      : 'POP';
SWP      : 'SWP';
BLD      : 'BLD';
BST      : 'BST';

LPAREN   : '(' ;
RPAREN   : ')' ;
LBRACE   : '{' ;
RBRACE   : '}' ;
SEMI     : ';' ;
GREATER  : '>' ;
EQUAL    : '=' ;
