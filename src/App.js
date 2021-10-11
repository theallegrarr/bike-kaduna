import { useState } from 'react'
import RiderProfile from './components/RiderProfile';

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
  const [list, setList] = useState(true)
  return (
    <div className="App">
      <header className="App-header">
      {list ? 
        <div>
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
                <tr key={index} onClick={() => setList(false)}>
                  <td>{index+1}</td>
                  <td>{item.model}</td>
                  <td>{item.reg}</td>
                </tr>
              ))
            }
            </tbody>
          </table>
        </div>
        : 
          <RiderProfile 
            name="John Doe" 
            location="Makarfi" 
            id="TA-0001" 
            setList={setList} />
        }
      </header>
    </div>
  );
}

export default App;
