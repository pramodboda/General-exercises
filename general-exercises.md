# General Exercises

## 1 Answer

7 - (VanillaJS, jQuery, HTML/HTML5, CSS/ CSS3, Ajax, Boostrap, React)

## 2 Answer

The total width of the container will be : `110px`

## 3 Answer

We can use `.not()` selector with `:last` to filter out the last element:

### Using jQuery

Method 1:

```javascript
$('p:not(:last)').bind('click', function(){
  $(this).css({"color":"red"});
});
```

Method 2:

```javascript
$('p').not(':last').bind('click', function(){
  $(this).css({"color":"red"});
});
```

## 4 Answer

Variable declared with in a JavaScript function will become 'Local' to that function. local variables are function scope, they will be accessed only from with in the function.

Actually as you provided code is executed '`Jack`' as 2 times.
I think in line 4: I found that there is a 'return' statement. So returning a varible and its value will be stored in call stack. that way 2nd time I am getting output as '`Jack`' instead of '`undefined`'. correct me if I am wrong.

## 5 Answer

Yes, Both `'display : none;'` and `'visiblility : hidden;'` are different from each other.
both elements will rendered on DOM.

'`display : none;`' - The html element will be rendered but element will be hidden. There will be NO space allocated for it between the other tags.

'`visiblility : hidden;`' - same as 'display : none;' but there will be  space allocated for it on the page between the other tags.
