import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [visible, setVisible] = useState(false);
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [days, setDays] = useState("");
  const [year, setYear] = useState("");
  const [years, setYears] = useState("");
  const [remain, setRemain] = useState("");

  const handleCalc = (e) => {
    e.preventDefault();
    const dateOne = new Date(first)
    const dateTwo = new Date(second)
    const time = Math.abs(dateTwo - dateOne)
    const days = Math.ceil(time / (1000 * 60 * 60 * 24))
    let year = (days / 365);
    let years = year.toFixed(1);
    let remain = days % 365;
    setDays(days)
    setYears(years)
    setRemain(remain)
    console.log(years)
    console.log(remain)
    setVisible(true)
  }

  const refreshPage = () => {
    window.location.reload();
  }

  return (
    <div className="App">
      <h1>Age Diffrence Calculator 💙🖤</h1>
      <div className='card'>
        <label>Your's 💙 :</label>
        <input type="date" onChange={(e) => { setFirst(e.target.value) }} />
        <label>Special One's 🖤 :</label>
        <input type="date" onChange={(e) => { setSecond(e.target.value) }} />
        <button className='reset' onClick={refreshPage}>Reset</button>
        <button className='submit' onClick={handleCalc}>Calculate!</button>
      </div>
      {visible ? <div className='message'>
        <h2>Age Diffrence 💙🖤 is : {days} Days</h2><br></br>
        <h2>Which means : {years} Years !</h2>
      </div> : null}
      <h3>Code&ensp;By&ensp;Sundar&ensp;🥰</h3>
    </div>
  );
}

export default App;
