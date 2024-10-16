// Generated from BiesVM.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,15,84,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,1,0,4,0,33,8,0,11,0,12,0,34,1,1,1,1,5,1,39,8,1,10,
1,12,1,42,9,1,1,2,4,2,45,8,2,11,2,12,2,46,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,
4,1,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,8,1,8,1,9,1,
9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,0,0,15,1,1,3,2,5,3,7,
4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,1,0,4,1,0,
48,57,3,0,65,90,95,95,97,122,4,0,48,57,65,90,95,95,97,122,3,0,9,10,13,13,
32,32,86,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,
1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,
0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,1,32,1,0,0,0,3,36,1,
0,0,0,5,44,1,0,0,0,7,50,1,0,0,0,9,54,1,0,0,0,11,57,1,0,0,0,13,62,1,0,0,0,
15,66,1,0,0,0,17,70,1,0,0,0,19,72,1,0,0,0,21,74,1,0,0,0,23,76,1,0,0,0,25,
78,1,0,0,0,27,80,1,0,0,0,29,82,1,0,0,0,31,33,7,0,0,0,32,31,1,0,0,0,33,34,
1,0,0,0,34,32,1,0,0,0,34,35,1,0,0,0,35,2,1,0,0,0,36,40,7,1,0,0,37,39,7,2,
0,0,38,37,1,0,0,0,39,42,1,0,0,0,40,38,1,0,0,0,40,41,1,0,0,0,41,4,1,0,0,0,
42,40,1,0,0,0,43,45,7,3,0,0,44,43,1,0,0,0,45,46,1,0,0,0,46,44,1,0,0,0,46,
47,1,0,0,0,47,48,1,0,0,0,48,49,6,2,0,0,49,6,1,0,0,0,50,51,5,76,0,0,51,52,
5,69,0,0,52,53,5,84,0,0,53,8,1,0,0,0,54,55,5,73,0,0,55,56,5,70,0,0,56,10,
1,0,0,0,57,58,5,69,0,0,58,59,5,76,0,0,59,60,5,83,0,0,60,61,5,69,0,0,61,12,
1,0,0,0,62,63,5,80,0,0,63,64,5,82,0,0,64,65,5,78,0,0,65,14,1,0,0,0,66,67,
5,72,0,0,67,68,5,76,0,0,68,69,5,84,0,0,69,16,1,0,0,0,70,71,5,40,0,0,71,18,
1,0,0,0,72,73,5,41,0,0,73,20,1,0,0,0,74,75,5,123,0,0,75,22,1,0,0,0,76,77,
5,125,0,0,77,24,1,0,0,0,78,79,5,59,0,0,79,26,1,0,0,0,80,81,5,62,0,0,81,28,
1,0,0,0,82,83,5,61,0,0,83,30,1,0,0,0,4,0,34,40,46,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class BiesVMLexer extends antlr4.Lexer {

    static grammarFileName = "BiesVM.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, null, null, null, "'LET'", "'IF'", "'ELSE'", 
                         "'PRN'", "'HLT'", "'('", "')'", "'{'", "'}'", "';'", 
                         "'>'", "'='" ];
	static symbolicNames = [ null, "NUMBER", "ID", "WS", "LET", "IF", "ELSE", 
                          "PRN", "HLT", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
                          "SEMI", "GREATER", "EQUAL" ];
	static ruleNames = [ "NUMBER", "ID", "WS", "LET", "IF", "ELSE", "PRN", 
                      "HLT", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "SEMI", 
                      "GREATER", "EQUAL" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

BiesVMLexer.EOF = antlr4.Token.EOF;
BiesVMLexer.NUMBER = 1;
BiesVMLexer.ID = 2;
BiesVMLexer.WS = 3;
BiesVMLexer.LET = 4;
BiesVMLexer.IF = 5;
BiesVMLexer.ELSE = 6;
BiesVMLexer.PRN = 7;
BiesVMLexer.HLT = 8;
BiesVMLexer.LPAREN = 9;
BiesVMLexer.RPAREN = 10;
BiesVMLexer.LBRACE = 11;
BiesVMLexer.RBRACE = 12;
BiesVMLexer.SEMI = 13;
BiesVMLexer.GREATER = 14;
BiesVMLexer.EQUAL = 15;



