// Generated from BiesVM.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import BiesVMListener from './BiesVMListener.js';
import BiesVMVisitor from './BiesVMVisitor.js';

const serializedATN = [4,1,23,113,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,1,0,4,0,32,8,0,11,0,12,0,33,1,0,1,0,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,50,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,
3,1,3,1,3,1,3,1,3,1,3,3,3,65,8,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,5,3,79,8,3,10,3,12,3,82,9,3,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,
1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,13,1,13,
1,13,1,14,1,14,1,14,1,14,0,1,6,15,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,
0,0,115,0,31,1,0,0,0,2,49,1,0,0,0,4,51,1,0,0,0,6,64,1,0,0,0,8,83,1,0,0,0,
10,86,1,0,0,0,12,88,1,0,0,0,14,90,1,0,0,0,16,92,1,0,0,0,18,94,1,0,0,0,20,
98,1,0,0,0,22,100,1,0,0,0,24,102,1,0,0,0,26,104,1,0,0,0,28,109,1,0,0,0,30,
32,3,2,1,0,31,30,1,0,0,0,32,33,1,0,0,0,33,31,1,0,0,0,33,34,1,0,0,0,34,35,
1,0,0,0,35,36,5,0,0,1,36,1,1,0,0,0,37,50,3,8,4,0,38,50,3,10,5,0,39,50,3,
12,6,0,40,50,3,14,7,0,41,50,3,16,8,0,42,50,3,18,9,0,43,50,3,20,10,0,44,50,
3,22,11,0,45,50,3,24,12,0,46,50,3,26,13,0,47,50,3,28,14,0,48,50,3,4,2,0,
49,37,1,0,0,0,49,38,1,0,0,0,49,39,1,0,0,0,49,40,1,0,0,0,49,41,1,0,0,0,49,
42,1,0,0,0,49,43,1,0,0,0,49,44,1,0,0,0,49,45,1,0,0,0,49,46,1,0,0,0,49,47,
1,0,0,0,49,48,1,0,0,0,50,3,1,0,0,0,51,52,5,1,0,0,52,53,5,17,0,0,53,54,3,
6,3,0,54,55,5,18,0,0,55,56,5,23,0,0,56,5,1,0,0,0,57,58,6,3,-1,0,58,59,5,
17,0,0,59,60,3,6,3,0,60,61,5,18,0,0,61,65,1,0,0,0,62,65,5,14,0,0,63,65,5,
15,0,0,64,57,1,0,0,0,64,62,1,0,0,0,64,63,1,0,0,0,65,80,1,0,0,0,66,67,10,
7,0,0,67,68,5,19,0,0,68,79,3,6,3,8,69,70,10,6,0,0,70,71,5,20,0,0,71,79,3,
6,3,7,72,73,10,5,0,0,73,74,5,21,0,0,74,79,3,6,3,6,75,76,10,4,0,0,76,77,5,
22,0,0,77,79,3,6,3,5,78,66,1,0,0,0,78,69,1,0,0,0,78,72,1,0,0,0,78,75,1,0,
0,0,79,82,1,0,0,0,80,78,1,0,0,0,80,81,1,0,0,0,81,7,1,0,0,0,82,80,1,0,0,0,
83,84,5,2,0,0,84,85,5,14,0,0,85,9,1,0,0,0,86,87,5,3,0,0,87,11,1,0,0,0,88,
89,5,4,0,0,89,13,1,0,0,0,90,91,5,5,0,0,91,15,1,0,0,0,92,93,5,6,0,0,93,17,
1,0,0,0,94,95,5,7,0,0,95,96,3,6,3,0,96,97,5,23,0,0,97,19,1,0,0,0,98,99,5,
8,0,0,99,21,1,0,0,0,100,101,5,9,0,0,101,23,1,0,0,0,102,103,5,10,0,0,103,
25,1,0,0,0,104,105,5,11,0,0,105,106,5,15,0,0,106,107,5,12,0,0,107,108,5,
15,0,0,108,27,1,0,0,0,109,110,5,13,0,0,110,111,5,14,0,0,111,29,1,0,0,0,5,
33,49,64,78,80];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class BiesVMParser extends antlr4.Parser {

    static grammarFileName = "BiesVM.g4";
    static literalNames = [ null, "'PRINT'", "'LDV'", "'ADD'", "'SUB'", 
                            "'MUL'", "'DIV'", "'PRN'", "'HLT'", "'POP'", 
                            "'SWP'", "'BLD'", "'FROM'", "'BST'", null, null, 
                            null, "'('", "')'", "'+'", "'-'", "'*'", "'/'", 
                            "';'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "NUMBER", 
                             "ID", "WS", "LPAREN", "RPAREN", "PLUS", "MINUS", 
                             "MUL", "DIV", "SEMI" ];
    static ruleNames = [ "program", "instruction", "exprInstruction", "expression", 
                         "ldvInstruction", "addInstruction", "subInstruction", 
                         "mulInstruction", "divInstruction", "prnInstruction", 
                         "hltInstruction", "popInstruction", "swpInstruction", 
                         "bldInstruction", "bstInstruction" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = BiesVMParser.ruleNames;
        this.literalNames = BiesVMParser.literalNames;
        this.symbolicNames = BiesVMParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 3:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 7);
    		case 1:
    			return this.precpred(this._ctx, 6);
    		case 2:
    			return this.precpred(this._ctx, 5);
    		case 3:
    			return this.precpred(this._ctx, 4);
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
	        this.state = 31; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 30;
	            this.instruction();
	            this.state = 33; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 12286) !== 0));
	        this.state = 35;
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



	instruction() {
	    let localctx = new InstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, BiesVMParser.RULE_instruction);
	    try {
	        this.state = 49;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 37;
	            this.ldvInstruction();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 38;
	            this.addInstruction();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 39;
	            this.subInstruction();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 40;
	            this.mulInstruction();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 41;
	            this.divInstruction();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 42;
	            this.prnInstruction();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 43;
	            this.hltInstruction();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 44;
	            this.popInstruction();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 45;
	            this.swpInstruction();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 46;
	            this.bldInstruction();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 47;
	            this.bstInstruction();
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 48;
	            this.exprInstruction();
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



	exprInstruction() {
	    let localctx = new ExprInstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, BiesVMParser.RULE_exprInstruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(BiesVMParser.T__0);
	        this.state = 52;
	        this.match(BiesVMParser.LPAREN);
	        this.state = 53;
	        this.expression(0);
	        this.state = 54;
	        this.match(BiesVMParser.RPAREN);
	        this.state = 55;
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


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 6;
	    this.enterRecursionRule(localctx, 6, BiesVMParser.RULE_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	            localctx = new ParenthesesExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 58;
	            this.match(BiesVMParser.LPAREN);
	            this.state = 59;
	            this.expression(0);
	            this.state = 60;
	            this.match(BiesVMParser.RPAREN);
	            break;
	        case 14:
	            localctx = new NumberExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 62;
	            this.match(BiesVMParser.NUMBER);
	            break;
	        case 15:
	            localctx = new IdentifierExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 63;
	            this.match(BiesVMParser.ID);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 80;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 78;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new AdditionExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, BiesVMParser.RULE_expression);
	                    this.state = 66;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 67;
	                    this.match(BiesVMParser.PLUS);
	                    this.state = 68;
	                    this.expression(8);
	                    break;

	                case 2:
	                    localctx = new SubtractionExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, BiesVMParser.RULE_expression);
	                    this.state = 69;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 70;
	                    this.match(BiesVMParser.MINUS);
	                    this.state = 71;
	                    this.expression(7);
	                    break;

	                case 3:
	                    localctx = new MultiplicationExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, BiesVMParser.RULE_expression);
	                    this.state = 72;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 73;
	                    this.match(BiesVMParser.MUL);
	                    this.state = 74;
	                    this.expression(6);
	                    break;

	                case 4:
	                    localctx = new DivisionExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, BiesVMParser.RULE_expression);
	                    this.state = 75;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 76;
	                    this.match(BiesVMParser.DIV);
	                    this.state = 77;
	                    this.expression(5);
	                    break;

	                } 
	            }
	            this.state = 82;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
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



	ldvInstruction() {
	    let localctx = new LdvInstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, BiesVMParser.RULE_ldvInstruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this.match(BiesVMParser.T__1);
	        this.state = 84;
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



	addInstruction() {
	    let localctx = new AddInstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, BiesVMParser.RULE_addInstruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.match(BiesVMParser.T__2);
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
	    this.enterRule(localctx, 12, BiesVMParser.RULE_subInstruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.match(BiesVMParser.T__3);
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
	    this.enterRule(localctx, 14, BiesVMParser.RULE_mulInstruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this.match(BiesVMParser.T__4);
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
	    this.enterRule(localctx, 16, BiesVMParser.RULE_divInstruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this.match(BiesVMParser.T__5);
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
	    this.enterRule(localctx, 18, BiesVMParser.RULE_prnInstruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.match(BiesVMParser.T__6);
	        this.state = 95;
	        this.expression(0);
	        this.state = 96;
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
	    this.enterRule(localctx, 20, BiesVMParser.RULE_hltInstruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98;
	        this.match(BiesVMParser.T__7);
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
	        this.state = 100;
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



	swpInstruction() {
	    let localctx = new SwpInstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, BiesVMParser.RULE_swpInstruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.match(BiesVMParser.T__9);
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
	        this.state = 104;
	        this.match(BiesVMParser.T__10);
	        this.state = 105;
	        this.match(BiesVMParser.ID);
	        this.state = 106;
	        this.match(BiesVMParser.T__11);
	        this.state = 107;
	        this.match(BiesVMParser.ID);
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
	        this.state = 109;
	        this.match(BiesVMParser.T__12);
	        this.state = 110;
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
BiesVMParser.T__11 = 12;
BiesVMParser.T__12 = 13;
BiesVMParser.NUMBER = 14;
BiesVMParser.ID = 15;
BiesVMParser.WS = 16;
BiesVMParser.LPAREN = 17;
BiesVMParser.RPAREN = 18;
BiesVMParser.PLUS = 19;
BiesVMParser.MINUS = 20;
BiesVMParser.MUL = 21;
BiesVMParser.DIV = 22;
BiesVMParser.SEMI = 23;

BiesVMParser.RULE_program = 0;
BiesVMParser.RULE_instruction = 1;
BiesVMParser.RULE_exprInstruction = 2;
BiesVMParser.RULE_expression = 3;
BiesVMParser.RULE_ldvInstruction = 4;
BiesVMParser.RULE_addInstruction = 5;
BiesVMParser.RULE_subInstruction = 6;
BiesVMParser.RULE_mulInstruction = 7;
BiesVMParser.RULE_divInstruction = 8;
BiesVMParser.RULE_prnInstruction = 9;
BiesVMParser.RULE_hltInstruction = 10;
BiesVMParser.RULE_popInstruction = 11;
BiesVMParser.RULE_swpInstruction = 12;
BiesVMParser.RULE_bldInstruction = 13;
BiesVMParser.RULE_bstInstruction = 14;

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

	instruction = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstructionContext);
	    } else {
	        return this.getTypedRuleContext(InstructionContext,i);
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



class InstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BiesVMParser.RULE_instruction;
    }

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

	prnInstruction() {
	    return this.getTypedRuleContext(PrnInstructionContext,0);
	};

	hltInstruction() {
	    return this.getTypedRuleContext(HltInstructionContext,0);
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

	exprInstruction() {
	    return this.getTypedRuleContext(ExprInstructionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.enterInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.exitInstruction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BiesVMVisitor ) {
	        return visitor.visitInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprInstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BiesVMParser.RULE_exprInstruction;
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

	SEMI() {
	    return this.getToken(BiesVMParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.enterExprInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BiesVMListener ) {
	        listener.exitExprInstruction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BiesVMVisitor ) {
	        return visitor.visitExprInstruction(this);
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

	NUMBER() {
	    return this.getToken(BiesVMParser.NUMBER, 0);
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

	NUMBER() {
	    return this.getToken(BiesVMParser.NUMBER, 0);
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




BiesVMParser.ProgramContext = ProgramContext; 
BiesVMParser.InstructionContext = InstructionContext; 
BiesVMParser.ExprInstructionContext = ExprInstructionContext; 
BiesVMParser.ExpressionContext = ExpressionContext; 
BiesVMParser.LdvInstructionContext = LdvInstructionContext; 
BiesVMParser.AddInstructionContext = AddInstructionContext; 
BiesVMParser.SubInstructionContext = SubInstructionContext; 
BiesVMParser.MulInstructionContext = MulInstructionContext; 
BiesVMParser.DivInstructionContext = DivInstructionContext; 
BiesVMParser.PrnInstructionContext = PrnInstructionContext; 
BiesVMParser.HltInstructionContext = HltInstructionContext; 
BiesVMParser.PopInstructionContext = PopInstructionContext; 
BiesVMParser.SwpInstructionContext = SwpInstructionContext; 
BiesVMParser.BldInstructionContext = BldInstructionContext; 
BiesVMParser.BstInstructionContext = BstInstructionContext; 
