import { useState } from 'react'
import RiderProfile from './components/RiderProfile';

import './App.css';

import logo from './assets/talogo.png'
import bikes_ from './assets/bikes.json'

function App() {
  const [list, setList] = useState(true)
  const [rider, setRider] = useState({})
  const [search, setSearch] = useState("")
  const [bikes, setBikes] = useState(bikes_)

  const searchList = async (text) => {
    text=text.toLocaleLowerCase();
    const result = []

    if(text.length === 0){
      setBikes(bikes_)
    } else {
      bikes_.forEach(item => {
        if(item.Name){
          if(item.Name.toLocaleLowerCase().indexOf(text)>-1){
            result.push(item)
          }
        }
      })
      setBikes(result)
    }
  }
  return (
    <div className="App">
      <header className="App-header">
      {list ? 
        <div>
          <img src={logo} alt='logo' />
          <input 
            type='text' 
            name='search' 
            placeholder='search for biker'
            value={search} 
            onChange={(e) => {
              setSearch(e.target.value)
              searchList(e.target.value)
            }}/>
          <table className="styled-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Year</th>
                <th>Zone</th>
                <th>Plate No</th>
                <th>Brand</th>
              </tr>
            </thead>
            <tbody>
            {
              bikes.map((item, index) => (
                <tr key={index} onClick={() => {
                  setList(false)
                  setRider(item)
                }}>
                  <td>{index+1}</td>
                  <td>{item.Name}</td>
                  <td>{item.Year}</td>
                  <td>{item.Zone}</td>
                  <td>{item["Plate No"]}</td>
                  <td>{item["Brand type"]}</td>
                </tr>
              ))
            }
            </tbody>
          </table>
        </div>
        : 
          <RiderProfile 
            setList={setList}
            rider={rider} />
        }
      </header>
    </div>
  );
}

export default App;
