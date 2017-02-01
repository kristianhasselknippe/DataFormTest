var Observable = require("FuseJS/Observable");
var FileSystem = require("FuseJS/FileSystem");

var name = Observable("");
var happy = Observable(0);

function submit(){
	var dataToWrite  = {
		name: name.value,
		happy: Math.floor(happy.value)
	};
	var text = JSON.stringify(dataToWrite);
	FileSystem.write(text, "data.json");
}

module.exports = {
	submit: submit,
	name: name,
	happy: happy,
	happyText: happy.map(function(x){
		return Math.floor(x);
	})
};
