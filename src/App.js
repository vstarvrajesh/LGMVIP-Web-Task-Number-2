import './App.css';

function App() {
  setTimeout(() => {
    let string = "";
    let buttons = document.querySelectorAll('.button');
    Array.from(buttons).forEach((button) => {
      button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
          let a = eval(string);
          string = a.toString();
          document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML === 'C') {
          string = ""
          document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML === 'del') {
          console.log(string)
          string = string.replace(/.$/, '');
          document.querySelector('input').value = string;
        }
        else {
          console.log(e.target)
          string = string + e.target.innerHTML;
          document.querySelector('input').value = string;
        }
      })
    })
  }, 100);
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <input className="input" type="text" />
        </div>
        <div className="row">
          <div className='inner-btn'>
            <button className="button">C</button>
            <button className="button">%</button>
            <button className="button">del</button>
          </div>
        </div>
        <div className="row">
          <div className="inner-btn">
            <button className="button">7</button>
            <button className="button">8</button>
            <button className="button">9</button>
            <button className="button">*</button>
          </div>
        </div>
        <div className="row">
          <div className="inner-btn">
            <button className="button">4</button>
            <button className="button">5</button>
            <button className="button">6</button>
            <button className="button">/</button>
          </div>
        </div>
        <div className="row">
          <div className="inner-btn">
            <button className="button">1</button>
            <button className="button">2</button>
            <button className="button">3</button>
            <button className="button">+</button>
          </div>
        </div>
        <div className="row">
          <div className="inner-btn">
            <button className="button">0</button>
            <button className="button">.</button>
            <button className="button">=</button>
            <button className="button">-</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
