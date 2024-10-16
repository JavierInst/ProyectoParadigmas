grammar BiesVM;

program
    : statement+ EOF
    ;

statement
    : assignment
    | ifStatement
    | prnStatement  // Asegúrate de incluir esta línea
    ;

// Assignment statement (e.g., let x = 5;)
assignment
    : LET ID '=' NUMBER SEMI
    ;

// If statement (e.g., if (condition) { ... })
ifStatement
    : IF LPAREN expression RPAREN block
    ;

// Instruction to print
prnStatement
    : PRN ID SEMI
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

LPAREN   : '(' ;
RPAREN   : ')' ;
LBRACE   : '{' ;
RBRACE   : '}' ;
SEMI     : ';' ;
GREATER   : '>' ;
EQUAL    : '=' ;
