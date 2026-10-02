/*Task 1: Create a multi-dimensional array with nine books and/or movies of your
choice.
Task 2: Access and log all the elements in the array using bracket notation with
numbers.
Task 3: Access and log all the elements in the array using bracket notation with
variables as indices. Use the variables row and item.
Task 4: Write a loop that prints all the items on the second shelf.*/

let shelves = [
  ["The Great Gatsby", "To Kill a Mockingbird", "1984"],
  ["Inception", "The Matrix", "Interstellar"],
  ["The Lord of the Rings", "Harry Potter", "The Hobbit"]
];

// Task 2: Access and log all the elements in the array using bracket notation with numbers.
console.log(shelves[0][0]); // The Great Gatsby
console.log(shelves[0][1]); // To Kill a Mockingbird
console.log(shelves[0][2]); // 1984
console.log(shelves[1][0]); // Inception
console.log(shelves[1][1]); // The Matrix
console.log(shelves[1][2]); // Interstellar
console.log(shelves[2][0]); // The Lord of the Rings
console.log(shelves[2][1]); // Harry Potter
console.log(shelves[2][2]); // The Hobbit

// Task 3: Access and log all the elements in the array using bracket notation with variables as indices. Use the variables row and item.
for (let row = 0; row < shelves.length; row++) {
  for (let item = 0; item < shelves[row].length; item++) {
    console.log(shelves[row][item]);
  }
}

// Task 4: Write a loop that prints all the items on the second shelf.
for (let item = 0; item < shelves[1].length; item++) {
  console.log(shelves[1][item]);
}   