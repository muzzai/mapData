const faker = require('faker');

const workplaces = ["a", "b", "c", "d"].reduce((acc, letter) => {
  return [ ...acc, ...[1, 2, 3, 4, 5].map( num => `${letter}${num}`) ]
}, [])

const people = workplaces.map((place, i) => ({ id: i + 1, workplace: place, name: faker.name.findName() }))

console.log(JSON.stringify(people))