import './App.css';
import MyPage from './components/MyPage';
import MyPageContext from './components/MyPageContext'
import CrudAPI from './components/CrudApi'
import { CrudContextProvider } from './context/CrudContext';

function App() {
  return (
    <div className="App">
      <h2>SIN context</h2>
      <MyPage/>
      <hr/>
      <h2>CON context</h2>
      <MyPageContext />
      <hr/>
      <h2>API</h2>
      <CrudContextProvider>
        <CrudAPI/>
      </CrudContextProvider>
    </div>
  );
}

export default App;
