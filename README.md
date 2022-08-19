## Type guards

One way that TypeScript can narrow a type is with a conditional statement that checks if a variable is a specific type. This pattern is called a type guard. Type guards can use a variety of operators that check for a variable’s type. One operator we can use is typeof. For example:

```
function formatStatistic(stat: string | number) {
  if(typeof stat==="number"){
    return stat.toFixed(2);
  }else if(typeof stat ==="string"){
    return stat.toUpperCase()
  }
  
}

console.log(formatStatistic('Win'));
console.log(formatStatistic(0.364));
```

---
## Using in with Type Guards
As we write more types, we’re bound to create custom types to better describe our data’s properties and methods. While using` typeof` can get us pretty far, sometimes we want to see if a specific method exists on a type instead of a type like `'string'`. That’s where the `in` operator comes into play. [The in operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in) checks if a property exists on an object itself or anywhere within its prototype chain. Take a look at this example:

```
type Tennis = {
  serve: () => void;
}
 
type Soccer = {
  kick: () => void;
}
 
function play(sport: Tennis | Soccer) {
  if ('serve' in sport) {
    return sport.serve();
  }
 
  if ('kick' in sport) {
    return sport.kick();
  }
}
```

In the example above, we check if the 'serve' property exists on sport with the in operator. The 'serve' property must exist inside the conditional, so TypeScript can narrow sport‘s type inside the conditional to be of type Tennis. This type narrowing is possible because TypeScript recognizes in as a type guard

---
## Narrowing with else

In our previous examples, we’ve used two separate if statements as type guards to handle each possible type. It turns out that TypeScript can recognize the else block of an if/else statement as being the opposite type guard check of the if statement’s type guard check. For example:

```
function formatPadding(padding: string | number) {
  if (typeof padding === 'string') {
    return padding.toLowerCase();
  } else {
    return `${padding}px`;
  }
}
```

---
## Narrowing After a Type Guard
TypeScript’s ability to infer types after a type guard stretches even further than inferring the type within an else statement. TypeScript can also type narrow without an else statement, provided that there’s a return statement within the type guard. Take a look at this example:

```
type Tea = {
  steep: () => string;
}
 
type Coffee = {
  pourOver: () => string;
} 
 
function brew(beverage: Coffee | Tea) {
  if ('steep' in beverage) {
    return beverage.steep();
  }
 
  return beverage.pourOver();
}
```
---
## Review Type Narrowing

- TypeScript can understand how our code will execute at runtime so that it can infer more specific types while we write code. This is called type narrowing.
  
- An expression that checks if a variable is a specific type is called a type guard. Type guard’s allow TypeScript to recognize when it can type narrow.
The typeof operator is useful when writing type guards. It can check if a variable is a 'string', 'number', 'boolean', or 'symbol'.

- The in operator is useful for checking if a specific property exists on an object. in is especially helpful when we have data represented as objects.

- TypeScript can type narrow after a type guard with an else block. TypeScript understands that that else block of an if statement must be the inverse condition of the if statement’s conditional.

- TypeScript can go even further and type narrow after a type guard if the type guard has a return or another terminal statement within its block, no else required.