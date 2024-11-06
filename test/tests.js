/* eslint-env mocha */

const assert = require('assert');
const nameCase = require('../src');

describe('nameCase.checkName()', function () {
  it('should see if case fixes are necessary', function () {
    assert.strictEqual(true, nameCase.checkName('GEORGE WASHINGTON'));
    assert.strictEqual(true, nameCase.checkName('george washington'));
    assert.strictEqual(false, nameCase.checkName('George Washington'));
  });
});

describe('Input Types', function () {
  it('should handle strings', function () {
    assert.strictEqual('George Washington', nameCase('GEORGE WASHINGTON'));
  });

  it('should handle arrays', function () {
    assert.deepStrictEqual(
      ['George Washington', 'Thomas Jefferson'],
      nameCase(['George Washington', 'Thomas Jefferson'])
    );
  });

  it('should return numbers unaffected', function () {
    assert.strictEqual(42, nameCase(42));
  });

  it('should return dates unaffected', function () {
    const d = new Date();
    assert.strictEqual(d, nameCase(d));
  });

  it('should not barf on nulls', function () {
    assert.strictEqual(null, nameCase(null));
  });

  it('should not barf on undefined', function () {
    assert.strictEqual(undefined, nameCase(undefined));
  });

  it('should not barf on non-strings inside arrays', function () {
    const input = [null, undefined, {}, new Date()];
    const output = nameCase(input);
    assert.strictEqual(output[0], nameCase(input[0]));
    assert.strictEqual(output[1], nameCase(input[1]));
    assert.strictEqual(output[2], nameCase(input[2]));
    assert.strictEqual(output[3], nameCase(input[3]));
  });
});

describe('nameCase', function () {
  it('should handle basic capitalization', function () {
    assert.strictEqual('George Washington', nameCase('GEORGE WASHINGTON'));
    assert.strictEqual('George Washington', nameCase('george washington'));
    assert.strictEqual('George Washington', nameCase('gEoRgE wAsHiNgToN'));
  });
});

// Names from http://cpansearch.perl.org/src/SUMMER/Lingua-EN-NameCase-1.15/t/namecase.t
const individualFields = [
  'Keith', 'Leigh-Williams', 'McCarthy',
  "O'Callaghan", 'St. John', 'von Streit',
  'van Dyke', 'Van', 'ap Llwyd Dafydd',
  'al Fahd', 'Al', 'el Grecco',
  'ben Gurion', 'Ben', 'da Vinci',
  'di Caprio', 'du Pont', 'de Legate',
  'del Crond', 'der Sind', 'van der Post',
  'von Trapp', 'la Poisson', 'le Figaro',
  'Mack Knife', 'Dougal MacDonald',
  // Mac exceptions
  'Machin', 'Machlin', 'Machar',
  'Mackle', 'Macklin', 'Mackie',
  'Macquarie', 'Machado', 'Macevicius',
  'Maciulis', 'Macias', 'MacMurdo',
  'Mackrell', 'Maclin', 'McConnachie',
  'Macayla',
  // Roman numerals
  'Henry VIII', 'Louis III', 'Louis XIV',
  'Charles II'
];

describe('nameCase on individual fields', function () {
  it('should handle list of names', function () {
    for (let i = 0; i < individualFields.length; i++) {
      assert.strictEqual(individualFields[i], nameCase(individualFields[i], { individualFields: true }));
    }
  });
});

// thanks to http://en.wikipedia.org/wiki/List_of_programmers
const combinedFields = [
  'Michael Abrash', 'Scott Adams', 'Leonard Adleman', 'Alfred Aho',
  'JJ Allaire',
  'Andrei Alexandrescu', 'Paul Allen', 'Eric Allman', 'Marc Andreessen',
  'Bill Atkinson', 'John Backus', 'Richard Bartle', 'Brian Behlendorf',
  'Kent Beck', 'Donald Becker', 'Doug Bell', 'Fabrice Bellard',
  'Tim Berners-Lee', 'Daniel J. Bernstein', 'Sabeer Bhatia', 'Eric Bina',
  'Marc Blank', 'Joshua Bloch', 'Grady Booch', 'Bert Bos',
  'Stephen Richard Bourne', 'David Bradley', 'Andrew Braybrook', 'Lawrence M. Breed',
  'Jack E. Bresenham', 'Dan Bricklin', 'Walter Bright', 'Richard Brodie',
  'Andries Brouwer', 'Danielle Bunten Berry', 'Dries Buytaert', 'Steve Capps',
  'John D. Carmack', 'Vinton Cerf', 'Ward Christensen', 'Edgar F. Codd',
  'Bram Cohen', 'Alain Colmerauer', 'Alan Cooper', 'Alan Cox',
  'Brad Cox', 'Mike Cowlishaw', 'Mark Crispin', 'Ward Cunningham',
  'William Crowther', 'Dave Cutler', 'Ole-Johan Dahl', 'James Duncan Davidson',
  'L. Peter Deutsch', 'Edsger Dijkstra', 'Matt Dillon', 'Jack Dorsey',
  'Martin Dougiamas', 'Adam Dunkels', 'Les Earnest', 'Brendan Eich',
  'Larry Ellison', 'Marc Ewing', 'Dan Farmer', 'Stuart Feldman',
  'David Filo', 'Brad Fitzpatrick', 'Andrew Fluegelman', 'Brian Fox',
  'Martin Fowler', 'Jim Fruchterman', 'Elon Gasper', 'Bill Gates',
  'Steve Gibson', 'John Gilmore', 'Adele Goldberg', 'Ryan C. Gordon',
  'James Gosling', 'Bill Gosper', 'Andrew Gower', 'Paul Gower',
  'Paul Graham', 'John Graham-Cumming', 'Ralph Griswold', 'Richard Greenblatt',
  'Scott Guthrie', 'Andi Gutmans', 'Jim Hall', 'David Heinemeier Hansson',
  'David Albert Huffman', 'Rebecca Heineman', 'Anders Hejlsberg', 'Ted Henter',
  'Andy Hertzfeld', 'Rich Hickey', 'D. Richard Hipp', 'C. A. R. Hoare',
  'James Holmes', 'Grace Hopper', 'Dave Hyatt', 'Miguel de Icaza',
  'Roberto Ierusalimschy', 'Dan Ingalls', 'Geir Ivarsøy', 'Torbjörn Manninger',
  'Kenneth E. Iverson', 'Toru Iwatani', 'Bo Jangeborg', 'Paul Jardetzky',
  'Lynne Jolitz', 'William Jolitz', 'Stephen C. Johnson', 'Bill Joy',
  'Robert K. Jung', 'Poul-Henning Kamp', 'Mitch Kapor', 'Phil Katz',
  'Alan Kay', 'Mel Kaye', 'John George Kemeny', 'Stan Kelly-Bootle',
  'Brian Kernighan', 'Gary Kildall', 'Tom Knight', 'Jim Knopf',
  'Donald E. Knuth', 'Andrew Koenig',
  /* "Andre LaMothe", Combined La names are an issue */
  'Tom Lane', 'Leslie Lamport', 'Butler Lampson', 'Sam Lantinga',
  'Richard H. Lathwell', 'Chris Lattner', 'Samuel J Leffler', 'Rasmus Lerdorf',
  'Michael Lesk', 'Gordon Letwin', 'Rockford Lhotka', 'Håkon Wium Lie',
  'Robert Love', 'Ada Lovelace', 'Al Lowe', 'Raphael Manfredi',
  'Khaled Mardam-Bey', 'Yukihiro Matsumoto', 'John McCarthy', 'Craig McClanahan',
  'Daniel D. McCracken', 'Douglas McIlroy', 'Shawn McKenzie', 'Marshall Kirk McKusick',
  'Bertrand Meyer', 'Scott Meyers', 'Bob Miner', 'Jeff Minter',
  'Lou Montulli', 'Bram Moolenaar', 'David Moon', 'Charles H. Moore',
  'Roger Moore', 'Mike Muuss', 'Patrick Naughton', 'Peter Naur',
  'Fredrik Neij', 'Graham Nelson', 'Peter Norton', 'Kristen Nygaard',
  'Ed Oates', 'Martin Odersky', 'Jarkko Oikarinen', 'Oliver Twins',
  'John Ousterhout', 'Onel de Guzman', 'Larry Page', 'Alexey Pajitnov',
  'Seymour Papert', 'Tim Paterson', 'Markus Persson', 'Jeffrey Peterson',
  'Charles Petzold', 'Rob Pike', 'Kent Pitman', 'Theo de Raadt',
  'Jef Raskin', 'Eric S. Raymond', 'Hans Reiser', 'John Resig',
  'Craig Reynolds', 'Dennis Ritchie', 'Ron Rivest', 'John Romero',
  'Blake Ross', 'Guido van Rossum', 'Jeff Rulifson', 'Rusty Russell',
  'Steve Russell', 'Mark Russinovich', 'Bob Sabiston', 'Muni Sakya',
  'Carl Sassenrath', 'Chris Sawyer', 'Bill Schelter', 'Randal L. Schwartz',
  'Adi Shamir', 'Mike Shaver', 'Cliff Shaw', 'Zed Shaw',
  'Emily Short', 'Jacek Sieka', 'Ken Silverman', 'Charles Simonyi',
  'Colin Simpson', 'Rich Skrenta', 'Matthew Smith', 'Henry Spencer',
  'Joel Spolsky', 'Quentin Stafford-Fraser', 'Richard Stallman', 'Guy Steele',
  'Alexander Stepanov', 'Ludvig Strigeus', 'Bjarne Stroustrup', 'Zeev Suraski',
  'Gerald Jay Sussman', 'Herb Sutter', 'Gottfrid Svartholm', 'Tim Sweeney',
  'Andrew S. Tanenbaum', 'Audrey Tang', 'Simon Tatham', 'Larry Tesler',
  'Jon Stephenson von Tetzchner', 'Avie Tevanian', 'Ken Thompson',
  'Michael Tiemann', 'Linus Torvalds', 'Andrew Tridgell', 'Roy Trubshaw',
  'Bob Truel', 'Wietse Venema', 'Pat Villani', 'Paul Vixie',
  'Patrick Volkerding', 'Larry Wall', 'Bob Wallace', 'John Walker',
  'John Warnock', 'Joseph Weizenbaum', 'Robert Watson', 'Pei-Yuan Wei',
  'Peter J. Weinberger', 'Andrew Welch', 'David Wheeler', 'Arthur Whitney',
  'Bruce Wilcox', 'Evan Williams', 'Roberta Williams', 'Sophie Wilson',
  'Dave Winer', 'Niklaus Wirth', 'Stephen Wolfram', 'Don Woods',
  'Steve Wozniak', 'Will Wright', 'Jerry Yang', 'Victor Yngve',
  'Jamie Zawinski', 'Philip Zimmermann', 'Mark Zuckerberg',
  /* Unusual names */
  'Khiem Le', 'Macayla Carrns', 'Dr Carmen Balzano', 'Dr. Carmen Balzano',
  'Dr Robert & Ann Leitz', 'Thao & Hy Nguyen', 'Ty Cobb', 'Eugene L. Nath,Jr.',
  'Lori & Leslie Cotton/Smith', 'Ron/Alejandra Brown', 'Derrick/Sandra Jackson'
];

describe('nameCase on combined fields', function () {
  it('should handle list of names', function () {
    for (let i = 0; i < combinedFields.length; i++) {
      assert.strictEqual(combinedFields[i], nameCase(combinedFields[i]));
    }
  });
});
