import React from 'react'
import Card from '../components/Card'

const fruits = [
  {
    id : 1,
    price : 10.3,
    name : "Banana",
    description : "Yellow Banana"
  },
  {
    id : 2,
    price : 12.98,
    name : "Apple",
    description : "Red Apple"
  },
  {
    id : 3,
    price : 8,
    name : "Mangon",
    description : "MaChitSu Mango"
  },
  {
    id : 4,
    price : 9,
    name : "Cucumber",
    description : "Cucumber for girl"
  },
  {
    id : 5,
    price : 13,
    name : "Orange",
    description : "Orange is Orange color"
  },
];

const Body = () => {
  return (
    <section className='body' >
        {fruits.map((fruit) =>(
          <Card key={fruit.id} fruit = {fruit} />
        ))}
    </section>
  );
};

export default Body