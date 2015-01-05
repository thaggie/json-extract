json-extract [![Build Status](https://travis-ci.org/thaggie/json-extract.svg)](https://travis-ci.org/thaggie/json-extract)
===================
Extracts values from a JSON structure into either a specific value or a data structure.

## Examples

```javascript
var extract = require('json-extract');

var exampleInput = {
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
					"GlossSee": "markup"
                }
            }
        }
    };

// specific value:    
var acronym = extract(exampleInput, 'glossary.GlossDiv.GlossList.GlossEntry.Acronym');
// acronym is now SGML

// data structure:
var data = extract(exampleInput, {
	id: 'glossary.GlossDiv.GlossList.GlossEntry.ID',
	title: 'glossary.title'
	});
// data is now: {"id":"SGML", "title": "example glossary"}
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
