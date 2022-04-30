
import './App.css';


function App() {

  const links = ["Services","Projects","About","abc"];

  return (
    <div className="App">
      <div>
        <h3>LOGOBACKERY</h3>
      </div>
      <div className='links'>
        {links.map((elem) => {
          return <Abc link = {elem} />
        })}
      </div>
      <div>
        <button className='btn'>Contact</button>
      </div>
    </div>
  );
}

function Abc(xyz){
  
  return <p>{xyz.link}</p>
}

export default App;
 