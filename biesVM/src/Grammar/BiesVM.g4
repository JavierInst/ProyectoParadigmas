grammar BiesVM;

program
    : statement+ EOF
    ;

statement
    : exprStatement
    | assignment
    | ifStatement
    | whileStatement
    | forStatement
    | functionDefinition
    | prnInstruction
    | hltInstruction
    ;

// Expression statement (e.g., expressions like print, function calls)
exprStatement
    : expression SEMI
    ;

// Assignment statement (e.g., let x = 5;)
assignment
    : 'LET' ID '=' expression SEMI
    ;

// If statement (e.g., if (condition) { ... })
ifStatement
    : 'IF' LPAREN expression RPAREN block ( 'ELSE' block )?
    ;

// While statement (e.g., while (condition) { ... })
whileStatement
    : 'WHILE' LPAREN expression RPAREN block
    ;

// For statement (e.g., for (let i = 0; i < n; i++) { ... })
forStatement
    : 'FOR' LPAREN assignment expression ';' expression RPAREN block
    ;

// Function definition (e.g., function factorial(n) { ... })
functionDefinition
    : 'FUNCTION' ID LPAREN ID RPAREN block
    ;

// Block of statements (enclosed in braces)
block
    : '{' statement* '}'
    ;

// Expression for arithmetic operations and function calls
expression
    : expression PLUS expression     # AdditionExpr
    | expression MINUS expression    # SubtractionExpr
    | expression MUL expression      # MultiplicationExpr
    | expression DIV expression      # DivisionExpr
    | LPAREN expression RPAREN       # ParenthesesExpr
    | ID                             # IdentifierExpr
    | NUMBER                         # NumberExpr
    | functionCall                   # FunctionCallExpr
    ;

// Function call (e.g., factorial(5))
functionCall
    : ID LPAREN expression? RPAREN
    ;

// Instructions for assembly-like operations
prnInstruction
    : 'PRN' expression SEMI // Allow printing expressions
    ;

hltInstruction
    : 'HLT' SEMI
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
