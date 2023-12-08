import './App.css';
import Contador from './components/contador';

function App() {
  return (
    <div>
      <h1>Memorización en react</h1>
      <hr/>
      <a
        href="https://es.react.dev/reference/react/memo"
        target="_blank"
        rel="noreferrer">
        Memo</a>
        <a
        href="https://es.react.dev/reference/react/useCallback"
        target="_blank"
        rel="noreferrer">
        useCallback</a>
        <Contador/>
        <hr/>
    </div>
  );
}

export default App;
