// function Book(name, author, year){
//     this.name = name;
//     this.author = author;
//     this.year = year;
// }

// Book.prototype.getSummary =  function(){
//     return `${this.name} was written by ${this.author} in ${this.year}`;
// }

// function Magazine(name, author, year, month){
//     Book.call(this, name, author, year);
//     this.month = month;
// }

// Magazine.prototype = Object.create(Book.prototype);
// Magazine.prototype.constructor = Magazine;
// const bookA = new Book("The Alchemist", "Paulo Coelho", 2020);
// // console.log(bookA.getSummary);
// console.log(bookA);

// const magA = new Magazine("The Alchemist", "Paulo Coelho", 2020, "Jan");
// console.log(magA);
// console.log(magA.getSummary());

// let a = Magazine.create("The Alchemist", "Paulo Coelho", 2020, "Jan");

const bookProtos = {
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  getAge: function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  },
};

const book1 = Object.create(bookProtos, {
  title: { value: "Book One" },
  author: { value: "John Doe" },
  year: { value: 2013 },
});
console.log(book1);
