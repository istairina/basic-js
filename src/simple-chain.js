const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  //constructor () {
    chain: [],
  //},

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    //console.log(this.chain);
    if (value === undefined) {
      this.chain.push('( )');
    } else {
      this.chain.push(`( ${value} )`);
    }
    return chainMaker;
  },

  removeLink(position) {
    //console.log('chain before ' + this.chain);
    if (this.chain[position - 1]) {
    this.chain.splice(position - 1, 1);
    }
    else {
      this.chain = [];
      throw new Error ("You can't remove incorrect link!");
    }
    //console.log('chain ' + this.chain);
    return chainMaker;
  },

  reverseChain() {
    //console.log('chain before ' + this.chain);
    this.chain.reverse();
    //console.log('chain ' + this.chain);
    return chainMaker;
  },

  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};


//console.log(chainMaker.addLink(1).addLink(2).addLink(3).finishChain()); // '( 1 )~~( 2 )~~( 3 )'

//console.log(chainMaker.addLink(1).addLink(2).removeLink(5).addLink(3).finishChain()) // '( 2 )~~( 3 )'

//console.log(chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain()); // '( 2 )~~( 1 )~~( 3 )'
//console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain());
//console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0));