# @compwright/namecase

A Javascript library for fixing the capitalization of people's names.

It is heavily based on the Perl
[Lingua-EN-NameCase](http://cpansearch.perl.org/src/SUMMER/Lingua-EN-NameCase-1.15/) module.

> Version 3.x is now an ESM module and requires Node.js 20.x

## Usage

namecase provides two functions:

`checkName()` which returns true if the name is in all `UPPERCASE` or `lowercase`.

`namecase(string or array, { individualFields: boolean })` returns a properly capitalized name.

The option ```individualFields``` defaults to false which works best when the person's names
are combined into a single field. If ```individualFields``` is set to true, it means you're
passing in given and surnames separately. The only difference between these two options is
with ```individualFields``` set to false, the first character is always capitalized.

### Code Example

```javascript
import { namecase } from '@compwright/namecase';
console.log(namecase('WILLIAM MCKINLEY'));
```

### Command line

Namecase can also be executed from the command line via ```namecase```, which accepts data
from STDIN and outputs the formatted names to STDOUT.

```bash
$ npm install -g @compwright/namecase
$ echo "jonathon hill" | bin/namecase
```
