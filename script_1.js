const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Names
const names_array = [];
console.log("Sors une array qui ne contient que le prénom et le nom des entrepreneur")
for (let entrepreneur of entrepreneurs) {
  names_array.push(entrepreneur.first + ' ' + entrepreneur.last)
}
console.log(names_array)

// Ages
const new_entrepreneurs = [];
console.log("remplace la date de naissance par son age today")
for (let entrepreneur of entrepreneurs) {
  let age = 2022 - entrepreneur.year;
  new_entrepreneurs.push({ firstName: entrepreneur.first, lastName: entrepreneur.last, age: age })
}
console.log(new_entrepreneurs)

//Filter
const entrepreneurs_born_70 = [];
console.log("Sors une array qui ne contient que les entrepreneurs nés dans les 70s")
for (let entrepreneur of entrepreneurs) {
  if (entrepreneur.year >= 1970 && entrepreneur.year <= 1979) {
    entrepreneurs_born_70.push(entrepreneur)
  }
}
console.log(entrepreneurs_born_70)