const db = connect("mongodb://localhost:27017/disneyland")

db.princesses.drop()

db.princesses.insertMany([
    { name: 'Snow White', age: 14, featureFilm: 'Snow White and The Seven Dwarfs', faveColor: 'red' },
    { name: 'Cinderella', age: 19, featureFilm: 'Cinderella', faveColor: 'light blue' },
    { name: 'Aurora', age: 16, featureFilm: 'Sleeping Beauty', faveColor: 'pink' },
    { name: 'Ariel', age: 16, featureFilm: 'The Little Mermaid', faveColor: 'blue' },
    { name: 'Belle', age: 17, featureFilm: 'Beauty and the Beast', faveColor: 'yellow' },
    { name: 'Jasmine', age: 15, featureFilm: 'Aladdin', faveColor: 'teal' },
    { name: 'Pocahontas', age: 18, featureFilm: 'Pocahontas', faveColor: 'indigo' },
    { name: 'Mulan', age: 16, featureFilm: 'Mulan', faveColor: 'red' },
    { name: 'Tiana', age: 19, featureFilm: 'Princess and the Frog', faveColor: 'green' },
    { name: 'Rapunzel', age: 18, featureFilm: 'Tangled', faveColor: 'lilac' },
    { name: 'Merida', age: 16, featureFilm: 'Brave', faveColor: 'orange' },
    { name: 'Moana', age: 16, featureFilm: 'Moana', faveColor: 'forest green' }
])

