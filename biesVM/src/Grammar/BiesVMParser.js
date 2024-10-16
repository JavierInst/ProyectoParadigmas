// Generated from BiesVM.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import BiesVMListener from './BiesVMListener.js';
import BiesVMVisitor from './BiesVMVisitor.js';

const serializedATN = [4,1,24,117,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,4,0,36,8,0,11,0,12,0,37,1,0,
1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,55,8,1,1,2,1,
2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,
6,1,6,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,1,11,1,
11,1,11,1,12,1,12,1,12,1,13,1,13,1,13,1,14,1,14,1,14,1,15,1,15,5,15,106,
8,15,10,15,12,15,109,9,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,0,0,17,0,2,
4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,0,0,113,0,35,1,0,0,0,2,54,1,0,
0,0,4,56,1,0,0,0,6,62,1,0,0,0,8,68,1,0,0,0,10,72,1,0,0,0,12,75,1,0,0,0,14,
79,1,0,0,0,16,82,1,0,0,0,18,85,1,0,0,0,20,88,1,0,0,0,22,91,1,0,0,0,24,94,
1,0,0,0,26,97,1,0,0,0,28,100,1,0,0,0,30,103,1,0,0,0,32,112,1,0,0,0,34,36,
3,2,1,0,35,34,1,0,0,0,36,37,1,0,0,0,37,35,1,0,0,0,37,38,1,0,0,0,38,39,1,
0,0,0,39,40,5,0,0,1,40,1,1,0,0,0,41,55,3,4,2,0,42,55,3,6,3,0,43,55,3,8,4,
0,44,55,3,10,5,0,45,55,3,12,6,0,46,55,3,14,7,0,47,55,3,16,8,0,48,55,3,18,
9,0,49,55,3,20,10,0,50,55,3,22,11,0,51,55,3,24,12,0,52,55,3,26,13,0,53,55,
3,28,14,0,54,41,1,0,0,0,54,42,1,0,0,0,54,43,1,0,0,0,54,44,1,0,0,0,54,45,
1,0,0,0,54,46,1,0,0,0,54,47,1,0,0,0,54,48,1,0,0,0,54,49,1,0,0,0,54,50,1,
0,0,0,54,51,1,0,0,0,54,52,1,0,0,0,54,53,1,0,0,0,55,3,1,0,0,0,56,57,5,4,0,
0,57,58,5,2,0,0,58,59,5,24,0,0,59,60,5,1,0,0,60,61,5,22,0,0,61,5,1,0,0,0,
62,63,5,5,0,0,63,64,5,18,0,0,64,65,3,32,16,0,65,66,5,19,0,0,66,67,3,30,15,
0,67,7,1,0,0,0,68,69,5,7,0,0,69,70,5,2,0,0,70,71,5,22,0,0,71,9,1,0,0,0,72,
73,5,8,0,0,73,74,5,22,0,0,74,11,1,0,0,0,75,76,5,9,0,0,76,77,5,2,0,0,77,78,
5,22,0,0,78,13,1,0,0,0,79,80,5,10,0,0,80,81,5,22,0,0,81,15,1,0,0,0,82,83,
5,11,0,0,83,84,5,22,0,0,84,17,1,0,0,0,85,86,5,12,0,0,86,87,5,22,0,0,87,19,
1,0,0,0,88,89,5,13,0,0,89,90,5,22,0,0,90,21,1,0,0,0,91,92,5,14,0,0,92,93,
5,22,0,0,93,23,1,0,0,0,94,95,5,15,0,0,95,96,5,22,0,0,96,25,1,0,0,0,97,98,
5,16,0,0,98,99,5,22,0,0,99,27,1,0,0,0,100,101,5,17,0,0,101,102,5,22,0,0,
102,29,1,0,0,0,103,107,5,20,0,0,104,106,3,2,1,0,105,104,1,0,0,0,106,109,
1,0,0,0,107,105,1,0,0,0,107,108,1,0,0,0,108,110,1,0,0,0,109,107,1,0,0,0,
110,111,5,21,0,0,111,31,1,0,0,0,112,113,5,2,0,0,113,114,5,23,0,0,114,115,
5,1,0,0,115,33,1,0,0,0,3,37,54,107];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class BiesVMParser extends antlr4.Parser {

    static grammarFileName = "BiesVM.g4";
    static literalNames = [ null, null, null, null, "'LET'", "'IF'", "'ELSE'", 
                            "'PRN'", "'HLT'", "'LDV'", "'ADD'", "'SUB'", 
                            "'MUL'", "'DIV'", "'POP'", "'SWP'", "'BLD'", 
                            "'BST'", "'('", "')'", "'{'", "'}'", "';'", 
                            "'>'", "'='" ];
    static symbolicNames = [ null, "NUMBER", "ID", "WS", "LET", "IF", "ELSE", 
                             "PRN", "HLT", "LDV", "ADD", "SUB", "MUL", "DIV", 
                             "POP", "SWP", "BLD", "BST", "LPAREN", "RPAREN", 
                             "LBRACE", "RBRACE", "SEMI", "GREATER", "EQUAL" ];
    static ruleNames = [ "program", "statement", "assignment", "ifStatement", 
                         "prnInstruction", "hltInstruction", "ldvInstruction", 
                         "addInstruction", "subInstruction", "mulInstruction", 
                         "divInstruction", "popInstruction", "swpInstruction", 
                         "bldInstruction", "bstInstruction", "block", "expression" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = BiesVMParser.ruleNames;
        this.literalNames = BiesVMParser.literalNames;
        this.symbolicNames = BiesVMParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, BiesVMParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 34;
	            this.statement();
	            this.state = 37; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 262064) !== 0));
	        this.state = 39;
	        this.match(BiesVMParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, BiesVMParser.RULE_statement);
	    try {
	        this.state = 54;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 41;
	            this.assignment();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 42;
	            this.ifStatement();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 43;
	            this.prnInstruction();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 44;
	            this.hltInstruction();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 45;
	            this.ldvInstruction();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 46;
	            this.addInstruction();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 47;
	            this.subInstruction();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 48;
	            this.mulInstruction();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 49;
	            this.divInstruction();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 50;
	            this.popInstruction();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 51;
	            this.swpInstruction();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 52;
	            this.bldInstruction();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 53;
	            this.bstInstruction();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, BiesVMParser.RULE_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.match(BiesVMParser.LET);
	        this.state = 57;
	        this.match(BiesVMParser.ID);
	        this.state = 58;
	        this.match(BiesVMParser.EQUAL);
	        this.state = 59;
	        this.match(BiesVMParser.NUMBER);
	        this.state = 60;
	        this.match(BiesVMParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifStatement() {
	    let localctx = new IfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, BiesVMParser.RULE_ifStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(BiesVMParser.IF);
	        this.state = 63;
	        this.match(BiesVMParser.LPAREN);
	        this.state = 64;
	        this.expression();
	        this.state = 65;
	        this.match(BiesVMParser.RPAREN);
	        this.state = 66;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	prnInstruction() {
	    let localctx = new PrnInstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, BiesVMParser.RULE_prnInstruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.match(BiesVMParser.PRN);
	        this.state = 69;
	        this.match(BiesVMParser.ID);
	        this.state = 70;
	        this.match(BiesVMParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	hltInstruction() {
	    let localctx = new HltInstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, BiesVMParser.RULE_hltInstruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.match(BiesVMParser.HLT);
	        this.state = 73;
	        this.match(BiesVMParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ldvInstruction() {
	    let localctx = new LdvInstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, BiesVMParser.RULE_ldvInstruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this.match(BiesVMParser.LDV);
	        this.state = 76;
	        this.match(BiesVMParser.ID);
	        this.state = 77;
	        this.match(BiesVMParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	addInstruction() {
	    let localctx = new AddInstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, BiesVMParser.RULE_addInstruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.match(BiesVMParser.ADD);
	        this.state = 80;
	        this.match(BiesVMParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	subInstruction() {
	    let localctx = new SubInstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, BiesVMParser.RULE_subInstruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.match(BiesVMParser.SUB);
	        this.state = 83;
	        this.match(BiesVMParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mulInstruction() {
	    let localctx = new MulInstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, BiesVMParser.RULE_mulInstruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this.match(BiesVMParser.MUL);
	        this.state = 86;
	        this.match(BiesVMParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	divInstruction() {
	    let localctx = new DivInstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, BiesVMParser.RULE_divInstruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.match(BiesVMParser.DIV);
	        this.state = 89;
	        this.match(BiesVMParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	popInstruction() {
	    let localctx = new PopInstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, BiesVMParser.RULE_popInstruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.match(BiesVMParser.POP);
	        this.state = 92;
	        this.match(BiesVMParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	swpInstruction() {
	    let localctx = new SwpInstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, BiesVMParser.RULE_swpInstruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.match(BiesVMParser.SWP);
	        this.state = 95;
	        this.match(BiesVMParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bldInstruction() {
	    let localctx = new BldInstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, BiesVMParser.RULE_bldInstruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this.match(BiesVMParser.BLD);
	        this.state = 98;
	        this.match(BiesVMParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bstInstruction() {
	    let localctx = new BstInstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, BiesVMParser.RULE_bstInstruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this.match(BiesVMParser.BST);
	        this.state = 101;
	        this.match(BiesVMParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, BiesVMParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        this.match(BiesVMParser.LBRACE);
	        this.state = 107;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 262064) !== 0)) {
	            this.state = 104;
	            this.statement();
	            this.state = 109;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 110;
	        this.match(BiesVMParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, BiesVMParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        this.match(BiesVMParser.ID);
	        this.state = 113;
	        this.match(BiesVMParser.GREATER);
	        this.state = 114;
	        this.match(BiesVMParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

BiesVMParser.EOF = antlr4.Token.EOF;
BiesVMParser.NUMBER = 1;
BiesVMParser.ID = 2;
BiesVMParser.WS = 3;
BiesVMParser.LET = 4;
BiesVMParser.IF = 5;
BiesVMParser.ELSE = 6;
BiesVMParser.PRN = 7;
BiesVMParser.HLT = 8;
BiesVMParser.LDV = 9;
BiesVMParser.ADD = 10;
BiesVMParser.SUB = 11;
BiesVMParser.MUL = 12;
BiesVMParser.DIV = 13;
BiesVMParser.POP = 14;
BiesVMParser.SWP = 15;
BiesVMParser.BLD = 16;
BiesVMParser.BST = 17;
BiesVMParser.LPAREN = 18;
BiesVMParser.RPAREN = 19;
BiesVMParser.LBRACE = 20;
BiesVMParser.RBRACE = 21;
BiesVMParser.SEMI = 22;
BiesVMParser.GREATER = 23;
BiesVMParser.EQUAL = 24;

BiesVMParser.RULE_program = 0;
BiesVMParser.RULE_statement = 1;
BiesVMParser.RULE_assignment = 2;
BiesVMParser.RULE_ifStatement = 3;
BiesVMParser.RULE_prnInstruction = 4;
BiesVMParser.RULE_hltInstruction = 5;
BiesVMParser.RULE_ldvInstruction = 6;
BiesVMParser.RULE_addInstruction = 7;
BiesVMParser.RULE_subInstruction = 8;
BiesVMParser.RULE_mulInstruction = 9;
BiesVMParser.RULE_divInstruction = 10;
BiesVMParser.RULE_popInstruction = 11;
BiesVMParser.RULE_swpInstruction = 12;
BiesVMParser.RULE_bldInstruction = 13;
BiesVMParser.RULE_bstInstruction = 14;
BiesVMParser.RULE_block = 15;
BiesVMParser.RULE_expression = 16;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BiesVMParser.RULE_program;
    }

	EOF() {
	    return this.getToken(BiesVMParser.EOF, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BiesVMVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BiesVMParser.RULE_statement;
    }

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	prnInstruction() {
	    return this.getTypedRuleContext(PrnInstructionContext,0);
	};

	hltInstruction() {
	    return this.getTypedRuleContext(HltInstructionContext,0);
	};

	ldvInstruction() {
	    return this.getTypedRuleContext(LdvInstructionContext,0);
	};

	addInstruction() {
	    return this.getTypedRuleContext(AddInstructionContext,0);
	};

	subInstruction() {
	    return this.getTypedRuleContext(SubInstructionContext,0);
	};

	mulInstruction() {
	    return this.getTypedRuleContext(MulInstructionContext,0);
	};

	divInstruction() {
	    return this.getTypedRuleContext(DivInstructionContext,0);
	};

	popInstruction() {
	    return this.getTypedRuleContext(PopInstructionContext,0);
	};

	swpInstruction() {
	    return this.getTypedRuleContext(SwpInstructionContext,0);
	};

	bldInstruction() {
	    return this.getTypedRuleContext(BldInstructionContext,0);
	};

	bstInstruction() {
	    return this.getTypedRuleContext(BstInstructionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BiesVMVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BiesVMParser.RULE_assignment;
    }

	LET() {
	    return this.getToken(BiesVMParser.LET, 0);
	};

	ID() {
	    return this.getToken(BiesVMParser.ID, 0);
	};

	EQUAL() {
	    return this.getToken(BiesVMParser.EQUAL, 0);
	};

	NUMBER() {
	    return this.getToken(BiesVMParser.NUMBER, 0);
	};

	SEMI() {
	    return this.getToken(BiesVMParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.exitAssignment(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BiesVMVisitor ) {
	        return visitor.visitAssignment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BiesVMParser.RULE_ifStatement;
    }

	IF() {
	    return this.getToken(BiesVMParser.IF, 0);
	};

	LPAREN() {
	    return this.getToken(BiesVMParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(BiesVMParser.RPAREN, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.enterIfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.exitIfStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BiesVMVisitor ) {
	        return visitor.visitIfStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrnInstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BiesVMParser.RULE_prnInstruction;
    }

	PRN() {
	    return this.getToken(BiesVMParser.PRN, 0);
	};

	ID() {
	    return this.getToken(BiesVMParser.ID, 0);
	};

	SEMI() {
	    return this.getToken(BiesVMParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.enterPrnInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.exitPrnInstruction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BiesVMVisitor ) {
	        return visitor.visitPrnInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class HltInstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BiesVMParser.RULE_hltInstruction;
    }

	HLT() {
	    return this.getToken(BiesVMParser.HLT, 0);
	};

	SEMI() {
	    return this.getToken(BiesVMParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.enterHltInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.exitHltInstruction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BiesVMVisitor ) {
	        return visitor.visitHltInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LdvInstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BiesVMParser.RULE_ldvInstruction;
    }

	LDV() {
	    return this.getToken(BiesVMParser.LDV, 0);
	};

	ID() {
	    return this.getToken(BiesVMParser.ID, 0);
	};

	SEMI() {
	    return this.getToken(BiesVMParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.enterLdvInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.exitLdvInstruction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BiesVMVisitor ) {
	        return visitor.visitLdvInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AddInstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BiesVMParser.RULE_addInstruction;
    }

	ADD() {
	    return this.getToken(BiesVMParser.ADD, 0);
	};

	SEMI() {
	    return this.getToken(BiesVMParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.enterAddInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.exitAddInstruction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BiesVMVisitor ) {
	        return visitor.visitAddInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SubInstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BiesVMParser.RULE_subInstruction;
    }

	SUB() {
	    return this.getToken(BiesVMParser.SUB, 0);
	};

	SEMI() {
	    return this.getToken(BiesVMParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.enterSubInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.exitSubInstruction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BiesVMVisitor ) {
	        return visitor.visitSubInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MulInstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BiesVMParser.RULE_mulInstruction;
    }

	MUL() {
	    return this.getToken(BiesVMParser.MUL, 0);
	};

	SEMI() {
	    return this.getToken(BiesVMParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.enterMulInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.exitMulInstruction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BiesVMVisitor ) {
	        return visitor.visitMulInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DivInstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BiesVMParser.RULE_divInstruction;
    }

	DIV() {
	    return this.getToken(BiesVMParser.DIV, 0);
	};

	SEMI() {
	    return this.getToken(BiesVMParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.enterDivInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.exitDivInstruction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BiesVMVisitor ) {
	        return visitor.visitDivInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PopInstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BiesVMParser.RULE_popInstruction;
    }

	POP() {
	    return this.getToken(BiesVMParser.POP, 0);
	};

	SEMI() {
	    return this.getToken(BiesVMParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.enterPopInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.exitPopInstruction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BiesVMVisitor ) {
	        return visitor.visitPopInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SwpInstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BiesVMParser.RULE_swpInstruction;
    }

	SWP() {
	    return this.getToken(BiesVMParser.SWP, 0);
	};

	SEMI() {
	    return this.getToken(BiesVMParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.enterSwpInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.exitSwpInstruction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BiesVMVisitor ) {
	        return visitor.visitSwpInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BldInstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BiesVMParser.RULE_bldInstruction;
    }

	BLD() {
	    return this.getToken(BiesVMParser.BLD, 0);
	};

	SEMI() {
	    return this.getToken(BiesVMParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.enterBldInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.exitBldInstruction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BiesVMVisitor ) {
	        return visitor.visitBldInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BstInstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BiesVMParser.RULE_bstInstruction;
    }

	BST() {
	    return this.getToken(BiesVMParser.BST, 0);
	};

	SEMI() {
	    return this.getToken(BiesVMParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.enterBstInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.exitBstInstruction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BiesVMVisitor ) {
	        return visitor.visitBstInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BiesVMParser.RULE_block;
    }

	LBRACE() {
	    return this.getToken(BiesVMParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(BiesVMParser.RBRACE, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.exitBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BiesVMVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BiesVMParser.RULE_expression;
    }

	ID() {
	    return this.getToken(BiesVMParser.ID, 0);
	};

	GREATER() {
	    return this.getToken(BiesVMParser.GREATER, 0);
	};

	NUMBER() {
	    return this.getToken(BiesVMParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.exitExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BiesVMVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




BiesVMParser.ProgramContext = ProgramContext; 
BiesVMParser.StatementContext = StatementContext; 
BiesVMParser.AssignmentContext = AssignmentContext; 
BiesVMParser.IfStatementContext = IfStatementContext; 
BiesVMParser.PrnInstructionContext = PrnInstructionContext; 
BiesVMParser.HltInstructionContext = HltInstructionContext; 
BiesVMParser.LdvInstructionContext = LdvInstructionContext; 
BiesVMParser.AddInstructionContext = AddInstructionContext; 
BiesVMParser.SubInstructionContext = SubInstructionContext; 
BiesVMParser.MulInstructionContext = MulInstructionContext; 
BiesVMParser.DivInstructionContext = DivInstructionContext; 
BiesVMParser.PopInstructionContext = PopInstructionContext; 
BiesVMParser.SwpInstructionContext = SwpInstructionContext; 
BiesVMParser.BldInstructionContext = BldInstructionContext; 
BiesVMParser.BstInstructionContext = BstInstructionContext; 
BiesVMParser.BlockContext = BlockContext; 
BiesVMParser.ExpressionContext = ExpressionContext; 
