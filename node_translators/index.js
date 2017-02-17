/*jslint node: true, indent: 2, nomen:true */
'use strict';

function CodeGen(indent, dontUseWhitespaces, shortArray, forceNamespaceBrackets) {
  this.ws = ' ';
  if (dontUseWhitespaces) {
    this.ws = '';
  }

  this.indent = typeof indent === 'string'  ? indent : '    ';
  this.nl     = this.indent !== '' ? '\n' : '';
  this.shortArray = shortArray || false;
  this.forceNamespaceBrackets = forceNamespaceBrackets || false;

  this.process = function (node, indent) {

    if (node === null) {
      return indent;
    }

    if (node && node.kind) {
      if (typeof this[node.kind] === 'function') {
        return this[node.kind](node, indent);
      }
      throw new Error(
        'Unhandled node type [' + node.kind + ']'
      );
    }
    throw new Error(
      'Bad AST structure'
    );
  };
}

module.exports = CodeGen;
// node translators
CodeGen.prototype.array = require("./array.js");
CodeGen.prototype.assign = require("./assign.js");
CodeGen.prototype.bin = require("./bin.js");
CodeGen.prototype.boolean = require("./boolean.js");
CodeGen.prototype.bool = require("./bool.js");
CodeGen.prototype.break = require("./break.js");
CodeGen.prototype.call = require("./call.js");
CodeGen.prototype.cast = require("./cast.js");
CodeGen.prototype.classconstant = require("./classconstant.js");
CodeGen.prototype.class = require("./class.js");
CodeGen.prototype.closure = require("./closure.js");
CodeGen.prototype.constant = require("./constant.js");
CodeGen.prototype.constref = require("./constref.js");
CodeGen.prototype.continue = require("./continue.js");
CodeGen.prototype.declare = require("./declare.js");
CodeGen.prototype.doc = require("./doc.js");
CodeGen.prototype.do = require("./do.js");
CodeGen.prototype.echo = require("./echo.js");
CodeGen.prototype.encapsed = require("./encapsed.js");
CodeGen.prototype.exit = require("./exit.js");
CodeGen.prototype.foreach = require("./foreach.js");
CodeGen.prototype.for = require("./for.js");
CodeGen.prototype.function = require("./function.js");
CodeGen.prototype.global = require("./global.js");
CodeGen.prototype.goto = require("./goto.js");
CodeGen.prototype.identifier = require("./identifier.js");
CodeGen.prototype.if = require("./if.js");
CodeGen.prototype.include = require("./include.js");
CodeGen.prototype.interface = require("./interface.js");
CodeGen.prototype.label = require("./label.js");
CodeGen.prototype.link = require("./link.js");
CodeGen.prototype.list = require("./list.js");
CodeGen.prototype.lookup = require("./lookup.js");
CodeGen.prototype.magic = require("./magic.js");
CodeGen.prototype.method = require("./method.js");
CodeGen.prototype.namespace = require("./namespace.js");
CodeGen.prototype.new = require("./new.js");
CodeGen.prototype.ns = require("./ns.js");
CodeGen.prototype.number = require("./number.js");
CodeGen.prototype.offsetlookup = require("./offsetlookup.js");
CodeGen.prototype.post = require("./post.js");
CodeGen.prototype.pre = require("./pre.js");
CodeGen.prototype.print = require("./print.js");
CodeGen.prototype.program = require("./program.js");
CodeGen.prototype.property = require("./property.js");
CodeGen.prototype.propertylookup = require("./propertylookup.js");
CodeGen.prototype.retif = require("./retif.js");
CodeGen.prototype.return = require("./return.js");
CodeGen.prototype.silent = require("./silent.js");
CodeGen.prototype.staticlookup = require("./staticlookup.js");
CodeGen.prototype.string = require("./string.js");
CodeGen.prototype.switch = require("./switch.js");
CodeGen.prototype.sys = require("./sys.js");
CodeGen.prototype.throw = require("./throw.js");
CodeGen.prototype.trait = require("./trait.js");
CodeGen.prototype.traituse = require("./traituse.js");
CodeGen.prototype.try = require("./try.js");
CodeGen.prototype.unary = require("./unary.js");
CodeGen.prototype.usegroup = require("./usegroup.js");
CodeGen.prototype.variable = require("./variable.js");
CodeGen.prototype.while = require("./while.js");
CodeGen.prototype.yieldfrom = require("./yieldfrom.js");
CodeGen.prototype.yield = require("./yield.js");
