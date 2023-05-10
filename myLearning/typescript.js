// Other Types to Know About
// -------------------------------------

//  void    ,  object   ,   unknown   ,    never   ,    Function
  

//  void -- void represents the return value of functions which don’t return a value.
// The inferred return type is void
function noop() {
  return;
}

// object -- The special type object refers to any value that isn’t a primitive (string, number, bigint, boolean, symbol, null, or undefined).


// unknown -- The unknown type represents any value. This is similar to the any type, 
// but is safer because it’s not legal to do anything with an unknown value:

function f1(a: any) {
  a.b(); // OK
}
function f2(a: unknown) {
  a.b();   //  error ---- 'a' is of type 'unknown'.
}

// This is useful when describing function types because you can describe functions that accept any value without having any values in your function body.
// Conversely, you can describe a function that returns a value of unknown type:

function safeParse(s: string): unknown {
  return JSON.parse(s);
}
 
// Need to be careful with 'obj'!
const obj = safeParse(someRandomString);




// never -- Some functions never return a value:

function fail(msg: string): never {
  throw new Error(msg);
}

// The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.

// never also appears when TypeScript determines there’s nothing left in a union.

function fn(x: string | number) {
  if (typeof x === "string") {
    // do something
  } else if (typeof x === "number") {
    // do something else
  } else {
    x; // has type 'never'!
  }
}



// Function -- The global type Function describes properties like bind, call, apply, and others present on all function values in JavaScript. It also has the special property that values of type Function can always be called; these calls return any:

function doSomething(f: Function) {
  return f(1, 2, 3);
}

// This is an untyped function call and is generally best avoided because of the unsafe any return type.

// If you need to accept an arbitrary function but don’t intend to call it, the type () => void is generally safer.
