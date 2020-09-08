# namecase

[![Build Status](https://travis-ci.org/compwright/namecase.png)](https://travis-ci.org/compwright/namecase)

A Javascript library for fixing the capitalization of people's names.

It is heavily based on the Perl
[Lingua-EN-NameCase](http://cpansearch.perl.org/src/SUMMER/Lingua-EN-NameCase-1.15/) module.

## Usage

namecase provides two functions:

`nameCase.checkName()` which returns true if the name is in all `UPPERCASE` or `lowercase`.

`nameCase(string or array, { individualFields: boolean })` returns a properly capitalized name.

The option ```individualFields``` defaults to false which works best when the person's names
are combined into a single field. If ```individualFields``` is set to true, it means you're
passing in given and surnames separately. The only difference between these two options is
with ```individualFields``` set to false, the first character is always capitalized.

Namecase can also be executed from the command line via ```namecase```, which accepts data
from STDIN and outputs the formatted names to STDOUT.

## Usage Examples

### Browser

```html
<script source="https://unpkg.com/@compwright/namecase/dist/namecase.min.js"></script>
<script>
  console.log(namecase('GEORGE WASHINGTON'));
</script>
```

### Node

```javascript
const nameCase = require('@compwright/namecase');
console.log(nameCase('WILLIAM MCKINLEY'));
```

### Command line

```bash
$ npm install -g @compwright/namecase
$ namecase < input.txt > ouput.txt
```
