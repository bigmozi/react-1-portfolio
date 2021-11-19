import './App.css';
import Title from './components/Title/Title';
import Card from './components/Card/Card';
import Sub from './components/Sub/Sub';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title texto ='Meu primeiro projeto react do zero' />
        <Sub texto='Meu portfólio' />
        <Card />

      </header>
    </div>
  );
}

export default App;
