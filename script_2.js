const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

//titles
const titles = [];
console.log("Sors une array qui ne contient que les titres des livres")
for (let book of books) {
  titles.push(book.title)
}
console.log(titles)

//rented
const rented = [];
console.log("Sors une array qui ne contient que les livres deja empruntés")
for (let book of books) {
  if (book.rented > 0) {
    rented.push(book.title)
  }
}
console.log(rented)

//most rented
console.log("Sors le livre le plus emprunté")
const most_rented = books.reduce((acc, book) => book.rented > acc.rented ? book : acc);
console.log(most_rented)

// less rented
console.log("Sors le livre le moins emprunté")
const less_rented = books.reduce((acc, book) => book.rented < acc.rented ? book : acc);
console.log(less_rented)

//delete 133712
console.log("Supprime le livre avec l'id 133712")
const remove_133712 = books.filter(book => book.id !== 133712);