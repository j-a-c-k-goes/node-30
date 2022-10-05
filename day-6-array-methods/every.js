// every() checks whether a condition is fulfilled by all elements
// Returns true or false

const arr = [1,3,4,5,7,9];
function even(value)
{
	if (value % 2 == 0)
		{
			return true;
		} else 
		{
			return false;
		}
}
console.log("Is every value even?", arr.every(even));