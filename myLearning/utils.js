//Get a random number in a specific range
function getRandomNumberInBtwn(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

//  Generate an array of numbers with numbers from 0 to max
function getArrayFromZero(max) {
    var numbersArray = [];
    for( var i=1; numbersArray.push(i++) < max;);  // numbers = [1,2,3 ... 100] 
}

// Generate a random set of alphanumeric characters of a given length
// For Numbers and BigInts, toString() takes an optional parameter radix,
// the value of radix must be minimum 2 and maximum 36.
// 2- binary numbers, 8 octal numbers, 10 decimal numbers, 16, hexadecimal numbers
function generateRandomAlphaNum(len) {
    var rdmString = "";
    for( ; rdmString.length < len; rdmString  += Math.random().toString(36).substr(2));
    return  rdmString.substr(0, len);
}

// Shuffle an array of numbers
function shuffleArrayOfNum(numbers) {
    return numbers.sort(function(){ return Math.random() - 0.5});
}

// An HTML escaper function
function escapeHTML(text) {  
    var replacements= {"<": "&lt;", ">": "&gt;","&": "&amp;", "\"" : "&quot;"};                      
    return text.replace(/[<>&"]/g, function(character) {  
        return replacements[character];  
    }); 
}

//Get nth value in  Fibonacci Series
function fibonacciNormal(n) {
    if (n <= 1) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}


// Memoize
function fibonacciMemoize(n,memo) {
    memo = memo || {}
    if (memo[n]) {
        return memo[n]
    }
    if (n <= 1) {
        return 1
    }
    return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
}

// get n fibonacci numbers
function genFibonacciArray(n){
	if(n<1 || !Number.isInteger(n)){
		return "not a valid number"
	}
	else if(n<3){
		if(n==1) return [0]
		else return [0,1]
	}
	var fib = [0,1,1];
	for(let i = 3; i<n; i++){
		fib.push(fib[i-1] + fib[i-1]);
	}
	return fib;
}

// Debounce 
// If immediate is passed as an argument to the function, 
// the function triggers immediately and then waits for the interval before being called again.
function debounce(func, wait, immediate) {
    var timeout;
  
    return function executedFunction() {
      var context = this;
      var args = arguments;
          
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
  
      var callNow = immediate && !timeout;
      
      clearTimeout(timeout);
  
      timeout = setTimeout(later, wait);
      
      if (callNow) func.apply(context, args);
    };
  };

var returnedFunction = debounce(function() {
    // The function's code
}, 250);

window.addEventListener('resize', returnedFunction);
//-------------------------------------------------------------------------
function isObject(val){
    return typeof val === "object" &&
                val !== null && 
                !Array.isArray(val);
}

function isArray(val){
    return Array.isArray(val);
}

