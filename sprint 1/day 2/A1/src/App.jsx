
import './App.css';

function App() {
  const OS = ["Android","Blackberry","iphone","Windows Phone"];
  const Manufacturers = [{name :"Samsung", style : "square"},{name :"HTC", style : "square"},{name : "Micromax", style : "disk"},{name : "Apple", style : "circle"}];

  return (
    <div className="App">
      <div>
        <h1>Mobile Operating System</h1>
        <ul>
          {OS.map((elem) => {
            return <li>{elem}</li>
          })}
        </ul>
      </div>
      <div>
        <h1>Mobile Manufacturers</h1>
        <ul>
          {Manufacturers.map((elem) => {
            return <li className={elem.style}>{elem.name}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
