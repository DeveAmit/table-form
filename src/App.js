import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputarr, SetInputarr] = useState([])

  const [inputdata, SetInputdata] = useState({
    name: "",
    age: "",
    gender: "",
  })

  function changehandle(e) {
    SetInputdata({ ...inputdata, [e.target.name]: e.target.value })
  }


  let { name, age, gender } = inputdata;
  function changhandle() {
    SetInputarr([...inputarr, {name, age, gender}])
     
    SetInputdata({ name: "", age: "", gender: "" })
  }
  return (
    <div className="App">
      <input type='text' autoComplete='off' name='name' value={inputdata.name} onChange={changehandle} placeholder='Enter Your Name' /> <br />
      <input type='text' autoComplete='off' name='age' value={inputdata.age} onChange={changehandle} placeholder='Enter Your AGE' /><br />
      <input type='text' autoComplete='off' name='gender' value={inputdata.gender} onChange={changehandle} placeholder='Enter Your GENDER' /> <br />

      <button className='btn' onClick={changhandle}>Submit</button>


      <table border={1} width="30%" cellPadding={10} >
        <tbody>
          <tr>
            <th>Name</th>
            <th>AGE</th>
            <th>GENDER</th>
          </tr>

          {
            inputarr.map(
            (info, ind) => {
              return (
                <tr key={ind}>
                  <td>{info.name}</td>
                  <td>{info.age}</td>
                  <td>{info.gender}</td>
                </tr>
              )
            }
            )
         }
        </tbody>
      </table>
    </div>
  );
}

export default App;
