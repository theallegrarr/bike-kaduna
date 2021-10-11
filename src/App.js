import './App.css';

import logo from './assets/talogo.png'

const bikes = [
  { 
    model: 'Honda',
    reg: 'CB 829 ABJ',
  },
  { 
    model: 'Honda',
    reg: 'CB 429 ABJ',
  },
  { 
    model: 'Honda',
    reg: 'CB 569 ABJ',
  },
  { 
    model: 'Honda',
    reg: 'CB 729 ABJ',
  },
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt='logo' />
        <table className="styled-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Bike</th>
              <th>Registration</th>
            </tr>
          </thead>
          <tbody>
          {
            bikes.map((item, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.model}</td>
                <td>{item.reg}</td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
