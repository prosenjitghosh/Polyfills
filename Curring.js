//1. implement curry()

function curry(func) {

    return function curried(...args) {
      //func.length is length of argument of sum function 
      if (args.length >= func.length) {
        return func.apply(this, args);
      } else {
        return function(...args2) {
          return curried.apply(this, args.concat(args2));
        }
      }
    };
  
  }
  
  function sum(a, b, c) {
    return a + b + c;
  }
  
  let curriedSum = curry(sum);
  console.log(curriedSum(1)(2)(3))

  let curried = curriedSum(2);
console.log(curried(3,4))
  
  