var express = require('express');
var app = express();

var facts = [
	"Oscar the Grouch used to be orange. Jim Henson decided to make him green before the second season of Sesame Street. How did Oscar explain the color change? He said he went on vacation to the very damp Swamp Mushy Muddy and turned green overnight.",
	"Fredric Baur invented the Pringles can. When he passed away in 2008, his ashes were buried in one.",
	"M&M's actually stands for Mars & Murrie's, the last names of the candy's founders.",
	"Ben & Jerry learned how to make ice cream by taking a $5 correspondence course offered by Penn State. (They decided to split one course.)",
	"When the mummy of Ramses II was sent to France in the mid-1970s, it was issued a passport. Ramses' occupation? King (deceased).",
	"Only female mosquitoes will bite you.",
	"Kool-Aid was originally marketed as 'Fruit Smack.'",
	"There really was a Captain Morgan. He was a Welsh pirate who later became the lieutenant governor of Jamaica.",
	"The only number whose letters are in alphabetical order is 40 (f-o-r-t-y).",
	"Only one McDonald's in the world has turquoise arches. Government officials in Sedona, Arizona, thought the yellow would look bad with the natural red rock of the city",
	"Michael Jackson's 1988 autobiography Moonwalk was edited by Jacqueline Kennedy Onassis.",
	"About one in every 4 million lobsters is born with a rare genetic defect that turns it blue.",
	"Horses can't vomit.",
	"Failed PEZ flavors include coffee, eucalyptus, menthol, and flower."
	];

app.get('/', function(req, res) {
  res.json(facts);
});

app.get('/facts/random', function(req, res) {
  var id = Math.floor(Math.random() * facts.length);
  var q = facts[id];
  res.json(q);
});



app.listen(process.env.PORT || 3412);