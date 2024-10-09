// Generated from BiesVM.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import BiesVMListener from './BiesVMListener.js';
import BiesVMVisitor from './BiesVMVisitor.js';

const serializedATN = [4,1,23,134,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
1,0,4,0,28,8,0,11,0,12,0,29,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,
42,8,1,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,
4,60,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,
1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,5,8,86,8,8,10,8,12,8,89,9,8,1,8,1,8,1,9,
1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,101,8,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
1,9,1,9,1,9,1,9,5,9,115,8,9,10,9,12,9,118,9,9,1,10,1,10,1,10,3,10,123,8,
10,1,10,1,10,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,0,1,18,13,0,2,4,6,8,
10,12,14,16,18,20,22,24,0,0,138,0,27,1,0,0,0,2,41,1,0,0,0,4,43,1,0,0,0,6,
46,1,0,0,0,8,52,1,0,0,0,10,61,1,0,0,0,12,67,1,0,0,0,14,76,1,0,0,0,16,83,
1,0,0,0,18,100,1,0,0,0,20,119,1,0,0,0,22,126,1,0,0,0,24,130,1,0,0,0,26,28,
3,2,1,0,27,26,1,0,0,0,28,29,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,30,31,1,
0,0,0,31,32,5,0,0,1,32,1,1,0,0,0,33,42,3,4,2,0,34,42,3,6,3,0,35,42,3,8,4,
0,36,42,3,10,5,0,37,42,3,12,6,0,38,42,3,14,7,0,39,42,3,22,11,0,40,42,3,24,
12,0,41,33,1,0,0,0,41,34,1,0,0,0,41,35,1,0,0,0,41,36,1,0,0,0,41,37,1,0,0,
0,41,38,1,0,0,0,41,39,1,0,0,0,41,40,1,0,0,0,42,3,1,0,0,0,43,44,3,18,9,0,
44,45,5,22,0,0,45,5,1,0,0,0,46,47,5,1,0,0,47,48,5,15,0,0,48,49,5,2,0,0,49,
50,3,18,9,0,50,51,5,22,0,0,51,7,1,0,0,0,52,53,5,3,0,0,53,54,5,20,0,0,54,
55,3,18,9,0,55,56,5,21,0,0,56,59,3,16,8,0,57,58,5,4,0,0,58,60,3,16,8,0,59,
57,1,0,0,0,59,60,1,0,0,0,60,9,1,0,0,0,61,62,5,5,0,0,62,63,5,20,0,0,63,64,
3,18,9,0,64,65,5,21,0,0,65,66,3,16,8,0,66,11,1,0,0,0,67,68,5,6,0,0,68,69,
5,20,0,0,69,70,3,6,3,0,70,71,3,18,9,0,71,72,5,22,0,0,72,73,3,18,9,0,73,74,
5,21,0,0,74,75,3,16,8,0,75,13,1,0,0,0,76,77,5,7,0,0,77,78,5,15,0,0,78,79,
5,20,0,0,79,80,5,15,0,0,80,81,5,21,0,0,81,82,3,16,8,0,82,15,1,0,0,0,83,87,
5,8,0,0,84,86,3,2,1,0,85,84,1,0,0,0,86,89,1,0,0,0,87,85,1,0,0,0,87,88,1,
0,0,0,88,90,1,0,0,0,89,87,1,0,0,0,90,91,5,9,0,0,91,17,1,0,0,0,92,93,6,9,
-1,0,93,94,5,20,0,0,94,95,3,18,9,0,95,96,5,21,0,0,96,101,1,0,0,0,97,101,
5,15,0,0,98,101,5,14,0,0,99,101,3,20,10,0,100,92,1,0,0,0,100,97,1,0,0,0,
100,98,1,0,0,0,100,99,1,0,0,0,101,116,1,0,0,0,102,103,10,8,0,0,103,104,5,
16,0,0,104,115,3,18,9,9,105,106,10,7,0,0,106,107,5,17,0,0,107,115,3,18,9,
8,108,109,10,6,0,0,109,110,5,18,0,0,110,115,3,18,9,7,111,112,10,5,0,0,112,
113,5,19,0,0,113,115,3,18,9,6,114,102,1,0,0,0,114,105,1,0,0,0,114,108,1,
0,0,0,114,111,1,0,0,0,115,118,1,0,0,0,116,114,1,0,0,0,116,117,1,0,0,0,117,
19,1,0,0,0,118,116,1,0,0,0,119,120,5,15,0,0,120,122,5,20,0,0,121,123,3,18,
9,0,122,121,1,0,0,0,122,123,1,0,0,0,123,124,1,0,0,0,124,125,5,21,0,0,125,
21,1,0,0,0,126,127,5,10,0,0,127,128,3,18,9,0,128,129,5,22,0,0,129,23,1,0,
0,0,130,131,5,11,0,0,131,132,5,22,0,0,132,25,1,0,0,0,8,29,41,59,87,100,114,
116,122];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class BiesVMParser extends antlr4.Parser {

    static grammarFileName = "BiesVM.g4";
    static literalNames = [ null, "'LET'", "'='", "'IF'", "'ELSE'", "'WHILE'", 
                            "'FOR'", "'FUNCTION'", "'{'", "'}'", "'PRN'", 
                            "'HLT'", "'print'", "'let'", null, null, "'+'", 
                            "'-'", "'*'", "'/'", "'('", "')'", "';'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, "PRINT", "LET", "NUMBER", 
                             "ID", "PLUS", "MINUS", "MUL", "DIV", "LPAREN", 
                             "RPAREN", "SEMI", "WS" ];
    static ruleNames = [ "program", "statement", "exprStatement", "assignment", 
                         "ifStatement", "whileStatement", "forStatement", 
                         "functionDefinition", "block", "expression", "functionCall", 
                         "prnInstruction", "hltInstruction" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = BiesVMParser.ruleNames;
        this.literalNames = BiesVMParser.literalNames;
        this.symbolicNames = BiesVMParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 9:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 8);
    		case 1:
    			return this.precpred(this._ctx, 7);
    		case 2:
    			return this.precpred(this._ctx, 6);
    		case 3:
    			return this.precpred(this._ctx, 5);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, BiesVMParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 26;
	            this.statement();
	            this.state = 29; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1101034) !== 0));
	        this.state = 31;
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
	        this.state = 41;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	        case 15:
	        case 20:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 33;
	            this.exprStatement();
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 34;
	            this.assignment();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 35;
	            this.ifStatement();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 36;
	            this.whileStatement();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 37;
	            this.forStatement();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 38;
	            this.functionDefinition();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 39;
	            this.prnInstruction();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 40;
	            this.hltInstruction();
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



	exprStatement() {
	    let localctx = new ExprStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, BiesVMParser.RULE_exprStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.expression(0);
	        this.state = 44;
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



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, BiesVMParser.RULE_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.match(BiesVMParser.T__0);
	        this.state = 47;
	        this.match(BiesVMParser.ID);
	        this.state = 48;
	        this.match(BiesVMParser.T__1);
	        this.state = 49;
	        this.expression(0);
	        this.state = 50;
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
	    this.enterRule(localctx, 8, BiesVMParser.RULE_ifStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(BiesVMParser.T__2);
	        this.state = 53;
	        this.match(BiesVMParser.LPAREN);
	        this.state = 54;
	        this.expression(0);
	        this.state = 55;
	        this.match(BiesVMParser.RPAREN);
	        this.state = 56;
	        this.block();
	        this.state = 59;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 57;
	            this.match(BiesVMParser.T__3);
	            this.state = 58;
	            this.block();
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



	whileStatement() {
	    let localctx = new WhileStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, BiesVMParser.RULE_whileStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.match(BiesVMParser.T__4);
	        this.state = 62;
	        this.match(BiesVMParser.LPAREN);
	        this.state = 63;
	        this.expression(0);
	        this.state = 64;
	        this.match(BiesVMParser.RPAREN);
	        this.state = 65;
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



	forStatement() {
	    let localctx = new ForStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, BiesVMParser.RULE_forStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(BiesVMParser.T__5);
	        this.state = 68;
	        this.match(BiesVMParser.LPAREN);
	        this.state = 69;
	        this.assignment();
	        this.state = 70;
	        this.expression(0);
	        this.state = 71;
	        this.match(BiesVMParser.SEMI);
	        this.state = 72;
	        this.expression(0);
	        this.state = 73;
	        this.match(BiesVMParser.RPAREN);
	        this.state = 74;
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



	functionDefinition() {
	    let localctx = new FunctionDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, BiesVMParser.RULE_functionDefinition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.match(BiesVMParser.T__6);
	        this.state = 77;
	        this.match(BiesVMParser.ID);
	        this.state = 78;
	        this.match(BiesVMParser.LPAREN);
	        this.state = 79;
	        this.match(BiesVMParser.ID);
	        this.state = 80;
	        this.match(BiesVMParser.RPAREN);
	        this.state = 81;
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



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, BiesVMParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this.match(BiesVMParser.T__7);
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1101034) !== 0)) {
	            this.state = 84;
	            this.statement();
	            this.state = 89;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 90;
	        this.match(BiesVMParser.T__8);
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


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 18;
	    this.enterRecursionRule(localctx, 18, BiesVMParser.RULE_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ParenthesesExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 93;
	            this.match(BiesVMParser.LPAREN);
	            this.state = 94;
	            this.expression(0);
	            this.state = 95;
	            this.match(BiesVMParser.RPAREN);
	            break;

	        case 2:
	            localctx = new IdentifierExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 97;
	            this.match(BiesVMParser.ID);
	            break;

	        case 3:
	            localctx = new NumberExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 98;
	            this.match(BiesVMParser.NUMBER);
	            break;

	        case 4:
	            localctx = new FunctionCallExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 99;
	            this.functionCall();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 116;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 114;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new AdditionExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, BiesVMParser.RULE_expression);
	                    this.state = 102;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 103;
	                    this.match(BiesVMParser.PLUS);
	                    this.state = 104;
	                    this.expression(9);
	                    break;

	                case 2:
	                    localctx = new SubtractionExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, BiesVMParser.RULE_expression);
	                    this.state = 105;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 106;
	                    this.match(BiesVMParser.MINUS);
	                    this.state = 107;
	                    this.expression(8);
	                    break;

	                case 3:
	                    localctx = new MultiplicationExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, BiesVMParser.RULE_expression);
	                    this.state = 108;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 109;
	                    this.match(BiesVMParser.MUL);
	                    this.state = 110;
	                    this.expression(7);
	                    break;

	                case 4:
	                    localctx = new DivisionExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, BiesVMParser.RULE_expression);
	                    this.state = 111;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 112;
	                    this.match(BiesVMParser.DIV);
	                    this.state = 113;
	                    this.expression(6);
	                    break;

	                } 
	            }
	            this.state = 118;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	functionCall() {
	    let localctx = new FunctionCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, BiesVMParser.RULE_functionCall);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        this.match(BiesVMParser.ID);
	        this.state = 120;
	        this.match(BiesVMParser.LPAREN);
	        this.state = 122;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1097728) !== 0)) {
	            this.state = 121;
	            this.expression(0);
	        }

	        this.state = 124;
	        this.match(BiesVMParser.RPAREN);
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
	    this.enterRule(localctx, 22, BiesVMParser.RULE_prnInstruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this.match(BiesVMParser.T__9);
	        this.state = 127;
	        this.expression(0);
	        this.state = 128;
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
	    this.enterRule(localctx, 24, BiesVMParser.RULE_hltInstruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130;
	        this.match(BiesVMParser.T__10);
	        this.state = 131;
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


}

BiesVMParser.EOF = antlr4.Token.EOF;
BiesVMParser.T__0 = 1;
BiesVMParser.T__1 = 2;
BiesVMParser.T__2 = 3;
BiesVMParser.T__3 = 4;
BiesVMParser.T__4 = 5;
BiesVMParser.T__5 = 6;
BiesVMParser.T__6 = 7;
BiesVMParser.T__7 = 8;
BiesVMParser.T__8 = 9;
BiesVMParser.T__9 = 10;
BiesVMParser.T__10 = 11;
BiesVMParser.PRINT = 12;
BiesVMParser.LET = 13;
BiesVMParser.NUMBER = 14;
BiesVMParser.ID = 15;
BiesVMParser.PLUS = 16;
BiesVMParser.MINUS = 17;
BiesVMParser.MUL = 18;
BiesVMParser.DIV = 19;
BiesVMParser.LPAREN = 20;
BiesVMParser.RPAREN = 21;
BiesVMParser.SEMI = 22;
BiesVMParser.WS = 23;

BiesVMParser.RULE_program = 0;
BiesVMParser.RULE_statement = 1;
BiesVMParser.RULE_exprStatement = 2;
BiesVMParser.RULE_assignment = 3;
BiesVMParser.RULE_ifStatement = 4;
BiesVMParser.RULE_whileStatement = 5;
BiesVMParser.RULE_forStatement = 6;
BiesVMParser.RULE_functionDefinition = 7;
BiesVMParser.RULE_block = 8;
BiesVMParser.RULE_expression = 9;
BiesVMParser.RULE_functionCall = 10;
BiesVMParser.RULE_prnInstruction = 11;
BiesVMParser.RULE_hltInstruction = 12;

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

	exprStatement() {
	    return this.getTypedRuleContext(ExprStatementContext,0);
	};

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	whileStatement() {
	    return this.getTypedRuleContext(WhileStatementContext,0);
	};

	forStatement() {
	    return this.getTypedRuleContext(ForStatementContext,0);
	};

	functionDefinition() {
	    return this.getTypedRuleContext(FunctionDefinitionContext,0);
	};

	prnInstruction() {
	    return this.getTypedRuleContext(PrnInstructionContext,0);
	};

	hltInstruction() {
	    return this.getTypedRuleContext(HltInstructionContext,0);
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



class ExprStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BiesVMParser.RULE_exprStatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	SEMI() {
	    return this.getToken(BiesVMParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.enterExprStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.exitExprStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BiesVMVisitor ) {
	        return visitor.visitExprStatement(this);
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

	ID() {
	    return this.getToken(BiesVMParser.ID, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
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

	LPAREN() {
	    return this.getToken(BiesVMParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(BiesVMParser.RPAREN, 0);
	};

	block = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BlockContext);
	    } else {
	        return this.getTypedRuleContext(BlockContext,i);
	    }
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



class WhileStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BiesVMParser.RULE_whileStatement;
    }

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
	        listener.enterWhileStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.exitWhileStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BiesVMVisitor ) {
	        return visitor.visitWhileStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ForStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BiesVMParser.RULE_forStatement;
    }

	LPAREN() {
	    return this.getToken(BiesVMParser.LPAREN, 0);
	};

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	SEMI() {
	    return this.getToken(BiesVMParser.SEMI, 0);
	};

	RPAREN() {
	    return this.getToken(BiesVMParser.RPAREN, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.enterForStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.exitForStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BiesVMVisitor ) {
	        return visitor.visitForStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BiesVMParser.RULE_functionDefinition;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BiesVMParser.ID);
	    } else {
	        return this.getToken(BiesVMParser.ID, i);
	    }
	};


	LPAREN() {
	    return this.getToken(BiesVMParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(BiesVMParser.RPAREN, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.enterFunctionDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.exitFunctionDefinition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BiesVMVisitor ) {
	        return visitor.visitFunctionDefinition(this);
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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class FunctionCallExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.enterFunctionCallExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.exitFunctionCallExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BiesVMVisitor ) {
	        return visitor.visitFunctionCallExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

BiesVMParser.FunctionCallExprContext = FunctionCallExprContext;

class AdditionExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	PLUS() {
	    return this.getToken(BiesVMParser.PLUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.enterAdditionExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.exitAdditionExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BiesVMVisitor ) {
	        return visitor.visitAdditionExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

BiesVMParser.AdditionExprContext = AdditionExprContext;

class SubtractionExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	MINUS() {
	    return this.getToken(BiesVMParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.enterSubtractionExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.exitSubtractionExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BiesVMVisitor ) {
	        return visitor.visitSubtractionExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

BiesVMParser.SubtractionExprContext = SubtractionExprContext;

class NumberExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMBER() {
	    return this.getToken(BiesVMParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.enterNumberExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.exitNumberExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BiesVMVisitor ) {
	        return visitor.visitNumberExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

BiesVMParser.NumberExprContext = NumberExprContext;

class DivisionExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	DIV() {
	    return this.getToken(BiesVMParser.DIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.enterDivisionExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.exitDivisionExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BiesVMVisitor ) {
	        return visitor.visitDivisionExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

BiesVMParser.DivisionExprContext = DivisionExprContext;

class IdentifierExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(BiesVMParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.enterIdentifierExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.exitIdentifierExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BiesVMVisitor ) {
	        return visitor.visitIdentifierExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

BiesVMParser.IdentifierExprContext = IdentifierExprContext;

class ParenthesesExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(BiesVMParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(BiesVMParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.enterParenthesesExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.exitParenthesesExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BiesVMVisitor ) {
	        return visitor.visitParenthesesExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

BiesVMParser.ParenthesesExprContext = ParenthesesExprContext;

class MultiplicationExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	MUL() {
	    return this.getToken(BiesVMParser.MUL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.enterMultiplicationExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.exitMultiplicationExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BiesVMVisitor ) {
	        return visitor.visitMultiplicationExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

BiesVMParser.MultiplicationExprContext = MultiplicationExprContext;

class FunctionCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BiesVMParser.RULE_functionCall;
    }

	ID() {
	    return this.getToken(BiesVMParser.ID, 0);
	};

	LPAREN() {
	    return this.getToken(BiesVMParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(BiesVMParser.RPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.enterFunctionCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.exitFunctionCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BiesVMVisitor ) {
	        return visitor.visitFunctionCall(this);
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

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
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




BiesVMParser.ProgramContext = ProgramContext; 
BiesVMParser.StatementContext = StatementContext; 
BiesVMParser.ExprStatementContext = ExprStatementContext; 
BiesVMParser.AssignmentContext = AssignmentContext; 
BiesVMParser.IfStatementContext = IfStatementContext; 
BiesVMParser.WhileStatementContext = WhileStatementContext; 
BiesVMParser.ForStatementContext = ForStatementContext; 
BiesVMParser.FunctionDefinitionContext = FunctionDefinitionContext; 
BiesVMParser.BlockContext = BlockContext; 
BiesVMParser.ExpressionContext = ExpressionContext; 
BiesVMParser.FunctionCallContext = FunctionCallContext; 
BiesVMParser.PrnInstructionContext = PrnInstructionContext; 
BiesVMParser.HltInstructionContext = HltInstructionContext; 
