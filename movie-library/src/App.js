import './App.css';

const App =() => {
    const name = 'Paweł'
    const lastName ='Gajec'
  return (
    <div className="App">
      <h1>Hello {name + ' ' + lastName} </h1>
    </div>
  );
}

export default App;
