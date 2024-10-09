// Generated from BiesVM.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import BiesVMListener from './BiesVMListener.js';
const serializedATN = [4,1,15,74,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,1,
0,4,0,28,8,0,11,0,12,0,29,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,3,1,45,8,1,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,
1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,0,0,13,
0,2,4,6,8,10,12,14,16,18,20,22,24,0,0,71,0,27,1,0,0,0,2,44,1,0,0,0,4,46,
1,0,0,0,6,49,1,0,0,0,8,51,1,0,0,0,10,53,1,0,0,0,12,55,1,0,0,0,14,57,1,0,
0,0,16,59,1,0,0,0,18,61,1,0,0,0,20,63,1,0,0,0,22,65,1,0,0,0,24,70,1,0,0,
0,26,28,3,2,1,0,27,26,1,0,0,0,28,29,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,
30,31,1,0,0,0,31,32,5,0,0,1,32,1,1,0,0,0,33,45,3,4,2,0,34,45,3,6,3,0,35,
45,3,8,4,0,36,45,3,10,5,0,37,45,3,12,6,0,38,45,3,14,7,0,39,45,3,16,8,0,40,
45,3,18,9,0,41,45,3,20,10,0,42,45,3,22,11,0,43,45,3,24,12,0,44,33,1,0,0,
0,44,34,1,0,0,0,44,35,1,0,0,0,44,36,1,0,0,0,44,37,1,0,0,0,44,38,1,0,0,0,
44,39,1,0,0,0,44,40,1,0,0,0,44,41,1,0,0,0,44,42,1,0,0,0,44,43,1,0,0,0,45,
3,1,0,0,0,46,47,5,1,0,0,47,48,5,13,0,0,48,5,1,0,0,0,49,50,5,2,0,0,50,7,1,
0,0,0,51,52,5,3,0,0,52,9,1,0,0,0,53,54,5,4,0,0,54,11,1,0,0,0,55,56,5,5,0,
0,56,13,1,0,0,0,57,58,5,6,0,0,58,15,1,0,0,0,59,60,5,7,0,0,60,17,1,0,0,0,
61,62,5,8,0,0,62,19,1,0,0,0,63,64,5,9,0,0,64,21,1,0,0,0,65,66,5,10,0,0,66,
67,5,14,0,0,67,68,5,11,0,0,68,69,5,14,0,0,69,23,1,0,0,0,70,71,5,12,0,0,71,
72,5,13,0,0,72,25,1,0,0,0,2,29,44];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class BiesVMParser extends antlr4.Parser {

    static grammarFileName = "BiesVM.g4";
    static literalNames = [ null, "'LDV'", "'ADD'", "'SUB'", "'MUL'", "'DIV'", 
                            "'PRN'", "'HLT'", "'POP'", "'SWP'", "'BLD'", 
                            "'FROM'", "'BST'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "NUMBER", "ID", 
                             "WS" ];
    static ruleNames = [ "program", "instruction", "ldvInstruction", "addInstruction", 
                         "subInstruction", "mulInstruction", "divInstruction", 
                         "prnInstruction", "hltInstruction", "popInstruction", 
                         "swpInstruction", "bldInstruction", "bstInstruction" ];

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
	        this.state = 27; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 26;
	            this.instruction();
	            this.state = 29; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 6142) !== 0));
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



	instruction() {
	    let localctx = new InstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, BiesVMParser.RULE_instruction);
	    try {
	        this.state = 44;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 33;
	            this.ldvInstruction();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 34;
	            this.addInstruction();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 35;
	            this.subInstruction();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 36;
	            this.mulInstruction();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 37;
	            this.divInstruction();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 38;
	            this.prnInstruction();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 39;
	            this.hltInstruction();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 40;
	            this.popInstruction();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 41;
	            this.swpInstruction();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 42;
	            this.bldInstruction();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 43;
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



	ldvInstruction() {
	    let localctx = new LdvInstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, BiesVMParser.RULE_ldvInstruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.match(BiesVMParser.T__0);
	        this.state = 47;
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
	    this.enterRule(localctx, 6, BiesVMParser.RULE_addInstruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.match(BiesVMParser.T__1);
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
	    this.enterRule(localctx, 8, BiesVMParser.RULE_subInstruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
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



	mulInstruction() {
	    let localctx = new MulInstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, BiesVMParser.RULE_mulInstruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
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



	divInstruction() {
	    let localctx = new DivInstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, BiesVMParser.RULE_divInstruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
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



	prnInstruction() {
	    let localctx = new PrnInstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, BiesVMParser.RULE_prnInstruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
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



	hltInstruction() {
	    let localctx = new HltInstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, BiesVMParser.RULE_hltInstruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.match(BiesVMParser.T__6);
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
	    this.enterRule(localctx, 18, BiesVMParser.RULE_popInstruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
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



	swpInstruction() {
	    let localctx = new SwpInstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, BiesVMParser.RULE_swpInstruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
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



	bldInstruction() {
	    let localctx = new BldInstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, BiesVMParser.RULE_bldInstruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(BiesVMParser.T__9);
	        this.state = 66;
	        this.match(BiesVMParser.ID);
	        this.state = 67;
	        this.match(BiesVMParser.T__10);
	        this.state = 68;
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
	    this.enterRule(localctx, 24, BiesVMParser.RULE_bstInstruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this.match(BiesVMParser.T__11);
	        this.state = 71;
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
BiesVMParser.NUMBER = 13;
BiesVMParser.ID = 14;
BiesVMParser.WS = 15;

BiesVMParser.RULE_program = 0;
BiesVMParser.RULE_instruction = 1;
BiesVMParser.RULE_ldvInstruction = 2;
BiesVMParser.RULE_addInstruction = 3;
BiesVMParser.RULE_subInstruction = 4;
BiesVMParser.RULE_mulInstruction = 5;
BiesVMParser.RULE_divInstruction = 6;
BiesVMParser.RULE_prnInstruction = 7;
BiesVMParser.RULE_hltInstruction = 8;
BiesVMParser.RULE_popInstruction = 9;
BiesVMParser.RULE_swpInstruction = 10;
BiesVMParser.RULE_bldInstruction = 11;
BiesVMParser.RULE_bstInstruction = 12;

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


}




BiesVMParser.ProgramContext = ProgramContext; 
BiesVMParser.InstructionContext = InstructionContext; 
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
