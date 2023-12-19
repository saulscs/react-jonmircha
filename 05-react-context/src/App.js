import './App.css';
import MyPage from './components/MyPage';
import MyPageContext from './components/MyPageContext'

function App() {
  return (
    <div className="App">
      <h2>SIN context</h2>
      <MyPage/>
      <hr/>
      <h2>CON context</h2>
      <MyPageContext />
    </div>
  );
}

export default App;
