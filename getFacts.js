var express = require('express')
var app = express()

function returnFact() {

	var randomFacts = require('./randomFacts.js');

	function getFacts () {
		var factIndex = Math.floor(Math.random() * facts.length);
		var randomFact = facts[factIndex]; 
	};

	return randomFact;
};