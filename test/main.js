'use strict';

var jsonExtract = require('../');

var should = require('should');
require('mocha');

var fs = require('fs');
var path = require('path');

describe('json-extract', function () {

	var testData = {
    "glossary": {
        "title": "example glossary",
		"GlossDiv": {
            "title": "S",
			"GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
					"SortAs": "SGML",
					"GlossTerm": "Standard Generalized Markup Language",
					"Acronym": "SGML",
					"Abbrev": "ISO 8879:1986",
					"GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
						"GlossSeeAlso": ["GML", "XML"]
                    },
					"GlossSee": "markup"
                }
            }
        }
    }
};
	it('should be a function', function() {
		var type = typeof jsonExtract;
		 type.should.equal('function')
	});

	it('should cope with simple property access', function() {
		var value = jsonExtract(testData, 'glossary.GlossDiv.GlossList.GlossEntry.Acronym');
		value.should.equal('SGML')
	});

	it('should cope with simple object access', function() {
		var value = jsonExtract(testData, {
			id: 'glossary.GlossDiv.GlossList.GlossEntry.ID',
			title: 'glossary.title'
		});
		value.id.should.equal('SGML')
		value.title.should.equal('example glossary')
	});


});