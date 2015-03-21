//This function will take in one argument and return a number, to be called in a console.log command. 

function CoolSocks(input) {
	var length = prompt.length;
	return (length/3.14159) * 10 + 42;
}
var prompt = prompt("Enter a phrase to find out its mystery number.");
console.log("The mystery number associated with \"" + prompt + "\" is " + parseInt(CoolSocks(prompt)) + ".");
