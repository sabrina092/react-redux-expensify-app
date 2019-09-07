const person = {
    name : 'Almond',
    age : 25,
    location : {
       city : 'NewYork',
       temp : 93
    }
};
const {name,age} = person;
console.log(`${name} is ${age}.`);
const {city,temp} = person.location
 if (city && temp){
  console.log(`its ${temp} in ${city}`)
 }

const book = {
    title : 'Ego is the enemy',
    author : 'Adrew',
    publisher : {
        name : 'Peguine'
    }
};

 const {name:publisherName ='Self-published' } = book.publisher;
 
  console.log(publisherName);
 
//console.log(book.publisher.name);


const item = ['Coffe (hot)','$2.00','$2.50','$3.00']
 const [drink, price] = item;
console.log(`Your medium ${drink} cost is ${price}.`)