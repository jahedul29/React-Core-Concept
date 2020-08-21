import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const products = [{ name: 'Photoshop', price: 10.55 }, { name: 'PDF', price: 11.22 },
  { name: 'Illustrator', price: 55 }]
  const heros = ['Anwar', 'Razzak', 'Shakib', 'Kali', 'Bapparaj']

  const productNames = products.map(product => product.name);
  console.log(productNames);

  return (
    <div className="App">
      <header className="App-header">
        <Users></Users>

        <Counter></Counter>

        {
          products.map(product => <Product product={product}></Product>)
        }
        <ul>
          {
            heros.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>

      </header>

    </div>
  );
}

// function Person(props) {
//   const personStyle = {
//     margin: '20px', color: 'red', border: '2px solid green', backgroundColor: 'white'
//   };

//   return (
//     <div style={personStyle}>
//       <h1>Name: {props.name}</h1>
//       <h3>Hero of the year</h3>
//     </div>);
// }

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgreen',
    height: '200px',
    width: '200px',
    float: 'left',
    color: 'blue'
  }
  return (
    <div style={productStyle}>
      <h2>{props.product.name}</h2>
      <h1>{props.product.price}</h1>
      <button>Buy Now</button>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  return (
    <div>
      <h2>Count : {count}</h2>
      <button onMouseMove={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  })

  return (
    <div>
      <h1>Dynamic Users: {users.length}</h1>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
export default App;