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
    ;

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
    : 'PRN'
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

NUMBER : [0-9]+;
ID     : [a-zA-Z_][a-zA-Z_0-9]*;
WS     : [ \t\r\n]+ -> skip;
