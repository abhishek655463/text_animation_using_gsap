# Animation Text Content learning Guide.

**js Key points**
 * textcontent ---> `textContent` is a JavaScript property that allows you to get or set the text content inside an HTML element.

 for example if we use dom to access the text inside a element.

 ```javascript 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>textContent Example</title>
</head>
<body>

    <div id="demo">
        Hello, <b>World!</b>
    </div>

    <script>
        let text = document.getElementById("demo").textContent;
        console.log(text); // Output: "Hello, World!"
    </script>

</body>
</html>
```

```javascript
let text = document.getElementById("demo").textContent;

```

here we try get the value of element having `id demo` text content will get value inside that.

## Foreach function

the for each function work only for array and use to apply similar function over all the values inside a array for example .
---
```javascript
const numbers = [10, 20, 30, 40, 50];

numbers.forEach(function(number) {
    console.log(number);
});
```
 in the above exmaple the function will apply over all the value inside the array number. 

```javascript
const colors = ['red', 'green', 'blue'];

colors.forEach((color, index) => {
    console.log(`${index}: ${color}`);
});

```
 inside the function we using foreach we do pass following function.
 * currentValue(element inside the array)
 * index
 * array

 ## about span 

 the span is inline block so, to work with this we have to change it's properties so we will use css to do so.
```css

span
{
    display:inline-block;
}
```