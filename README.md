1- What is the difference between forEach and for...of? When would you use each?

- ForEach: array method, we can't use break or continue in it, do not return new array, doesn't respect async/await.
- for...of: loop statement, we can use break and continue, respect async/await.

2- what is hoisting ?

- hoisting: is mean we can use the variable before decleration , when we create execution context it creates in two phases, first memory allocation that's when variable and function are declared but not assigned value to it (except var it declare with undefined), and second execution, so based on fist phase we can use variable before decleration and that is hoisting.
  ex:-

console.log(name);
var name = "kerolos Fayez";

what is TDZ?

- it's the zoon between starting scope and variable decleration, in this zoon you can not access the variable.
  ex:
  {
  console.log(name); // TDZ
  let name = "kerolos Fayez"
  }

3- difference between == and === ?

- == compare between to values and do type coercion and that's mean convert type to anther type automatically.

- === compare between to values and don't do type coercion and tha's mean compare between values and type also without changing types.

4- Explain how try-catch works and why it is important in async operations ?

- try: work first and if the code doesn't have any errors it continue execution (might cause error).
- catch: it catch the error and work when promise is rejected.

and it's important with async/await operation: because it's allow to us to typing Asynchronous code but look like synchronous.

5- What’s the difference between type conversion and coercion? Provide examples of each ?

- conversion: is changing the type of variable manually like:-
  let s = "10"
  Number(s);

- coercion: that's an operation that javascript do itself automatically to can deal with operation like:-
  let s = "1"
  console.log(s + 0) // 10
