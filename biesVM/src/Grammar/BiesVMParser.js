// Generated from BiesVM.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import BiesVMListener from './BiesVMListener.js';
import BiesVMVisitor from './BiesVMVisitor.js';

const serializedATN = [4,1,15,56,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,4,0,16,8,0,11,0,12,0,17,1,0,1,0,1,1,1,1,1,1,3,1,25,8,
1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,
5,5,5,45,8,5,10,5,12,5,48,9,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,0,0,7,0,2,4,6,
8,10,12,0,0,52,0,15,1,0,0,0,2,24,1,0,0,0,4,26,1,0,0,0,6,32,1,0,0,0,8,38,
1,0,0,0,10,42,1,0,0,0,12,51,1,0,0,0,14,16,3,2,1,0,15,14,1,0,0,0,16,17,1,
0,0,0,17,15,1,0,0,0,17,18,1,0,0,0,18,19,1,0,0,0,19,20,5,0,0,1,20,1,1,0,0,
0,21,25,3,4,2,0,22,25,3,6,3,0,23,25,3,8,4,0,24,21,1,0,0,0,24,22,1,0,0,0,
24,23,1,0,0,0,25,3,1,0,0,0,26,27,5,4,0,0,27,28,5,2,0,0,28,29,5,15,0,0,29,
30,5,1,0,0,30,31,5,13,0,0,31,5,1,0,0,0,32,33,5,5,0,0,33,34,5,9,0,0,34,35,
3,12,6,0,35,36,5,10,0,0,36,37,3,10,5,0,37,7,1,0,0,0,38,39,5,7,0,0,39,40,
5,2,0,0,40,41,5,13,0,0,41,9,1,0,0,0,42,46,5,11,0,0,43,45,3,2,1,0,44,43,1,
0,0,0,45,48,1,0,0,0,46,44,1,0,0,0,46,47,1,0,0,0,47,49,1,0,0,0,48,46,1,0,
0,0,49,50,5,12,0,0,50,11,1,0,0,0,51,52,5,2,0,0,52,53,5,14,0,0,53,54,5,1,
0,0,54,13,1,0,0,0,3,17,24,46];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class BiesVMParser extends antlr4.Parser {

    static grammarFileName = "BiesVM.g4";
    static literalNames = [ null, null, null, null, "'LET'", "'IF'", "'ELSE'", 
                            "'PRN'", "'HLT'", "'('", "')'", "'{'", "'}'", 
                            "';'", "'>'", "'='" ];
    static symbolicNames = [ null, "NUMBER", "ID", "WS", "LET", "IF", "ELSE", 
                             "PRN", "HLT", "LPAREN", "RPAREN", "LBRACE", 
                             "RBRACE", "SEMI", "GREATER", "EQUAL" ];
    static ruleNames = [ "program", "statement", "assignment", "ifStatement", 
                         "prnStatement", "block", "expression" ];

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
	        this.state = 15; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 14;
	            this.statement();
	            this.state = 17; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 176) !== 0));
	        this.state = 19;
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
	        this.state = 24;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 21;
	            this.assignment();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 22;
	            this.ifStatement();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 23;
	            this.prnStatement();
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
	        this.state = 26;
	        this.match(BiesVMParser.LET);
	        this.state = 27;
	        this.match(BiesVMParser.ID);
	        this.state = 28;
	        this.match(BiesVMParser.EQUAL);
	        this.state = 29;
	        this.match(BiesVMParser.NUMBER);
	        this.state = 30;
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
	        this.state = 32;
	        this.match(BiesVMParser.IF);
	        this.state = 33;
	        this.match(BiesVMParser.LPAREN);
	        this.state = 34;
	        this.expression();
	        this.state = 35;
	        this.match(BiesVMParser.RPAREN);
	        this.state = 36;
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



	prnStatement() {
	    let localctx = new PrnStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, BiesVMParser.RULE_prnStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.match(BiesVMParser.PRN);
	        this.state = 39;
	        this.match(BiesVMParser.ID);
	        this.state = 40;
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
	    this.enterRule(localctx, 10, BiesVMParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.match(BiesVMParser.LBRACE);
	        this.state = 46;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 176) !== 0)) {
	            this.state = 43;
	            this.statement();
	            this.state = 48;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 49;
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
	    this.enterRule(localctx, 12, BiesVMParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(BiesVMParser.ID);
	        this.state = 52;
	        this.match(BiesVMParser.GREATER);
	        this.state = 53;
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
BiesVMParser.LPAREN = 9;
BiesVMParser.RPAREN = 10;
BiesVMParser.LBRACE = 11;
BiesVMParser.RBRACE = 12;
BiesVMParser.SEMI = 13;
BiesVMParser.GREATER = 14;
BiesVMParser.EQUAL = 15;

BiesVMParser.RULE_program = 0;
BiesVMParser.RULE_statement = 1;
BiesVMParser.RULE_assignment = 2;
BiesVMParser.RULE_ifStatement = 3;
BiesVMParser.RULE_prnStatement = 4;
BiesVMParser.RULE_block = 5;
BiesVMParser.RULE_expression = 6;

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

	prnStatement() {
	    return this.getTypedRuleContext(PrnStatementContext,0);
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



class PrnStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BiesVMParser.RULE_prnStatement;
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
	        listener.enterPrnStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.exitPrnStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BiesVMVisitor ) {
	        return visitor.visitPrnStatement(this);
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
BiesVMParser.PrnStatementContext = PrnStatementContext; 
BiesVMParser.BlockContext = BlockContext; 
BiesVMParser.ExpressionContext = ExpressionContext; 
