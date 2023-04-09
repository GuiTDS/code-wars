/* An isogram is a word that has no repeating letters, 
consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case. */

//better solution
function isIsogram2(str){
	return new Set(str.toUpperCase()).size == str.length;
}