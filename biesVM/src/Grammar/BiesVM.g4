grammar BiesVM;

program
    : instruction+ EOF
    ;

instruction
    : ldvInstruction
    | addInstruction
    | subInstruction
    | mulInstruction
    | divInstruction
    | prnInstruction
    | hltInstruction
    | popInstruction
    | swpInstruction
    | bldInstruction
    | bstInstruction
    | exprInstruction    // Added expression instruction
    ;

// Expression rule for arithmetic operations
exprInstruction
    : 'PRINT' LPAREN expression RPAREN SEMI // For printing expressions
    ;

expression
    : expression PLUS expression     # AdditionExpr
    | expression MINUS expression    # SubtractionExpr
    | expression MUL expression      # MultiplicationExpr
    | expression DIV expression      # DivisionExpr
    | LPAREN expression RPAREN       # ParenthesesExpr
    | NUMBER                         # NumberExpr
    | ID                             # IdentifierExpr
    ;

// Instructions for assembly-like operations
ldvInstruction
    : 'LDV' NUMBER
    ;

addInstruction
    : 'ADD'
    ;

subInstruction
    : 'SUB'
    ;

mulInstruction
    : 'MUL'
    ;

divInstruction
    : 'DIV'
    ;

prnInstruction
    : 'PRN' expression SEMI // Modify to allow printing expressions
    ;

hltInstruction
    : 'HLT'
    ;

popInstruction
    : 'POP'
    ;

swpInstruction
    : 'SWP'
    ;

bldInstruction
    : 'BLD' ID 'FROM' ID
    ;

bstInstruction
    : 'BST' NUMBER
    ;

// Lexer rules
NUMBER : [0-9]+ ;
ID     : [a-zA-Z_][a-zA-Z_0-9]* ;
WS     : [ \t\r\n]+ -> skip ;
LPAREN : '(' ;
RPAREN : ')' ;
PLUS   : '+' ;
MINUS  : '-' ;
MUL    : '*' ;
DIV    : '/' ;
SEMI   : ';';
