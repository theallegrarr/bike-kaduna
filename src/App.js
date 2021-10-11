import './App.css';

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
        {
          bikes.map((item, index) => (
            <div key={index}>{item.model} | {item.reg}</div>
          ))
        }
      </header>
    </div>
  );
}

export default App;
