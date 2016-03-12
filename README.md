## Wrap With HTML
> Wrap strings with HTML

## Install
```
$ npm install --save wrap-with-html
```

## Usage 
```javascript
var wrapWithHTML = require('wrap-with-html');

wrapWithHTML({
  string: "Hello World",
  customId: "hello-word",
  tagName: "span",
  customClass: "underline"
})
//=> <span id='hello-world' class='underline'>Hello World</span>
```

## Test
```
$ npm test
```
