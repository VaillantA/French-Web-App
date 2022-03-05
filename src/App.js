import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import ListArticles from './components/ListArticles';

import { Routes, Route} from 'react-router-dom';


const App = () =>  {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/list-articles" element={<ListArticles/>}/>
        </Routes>
    </div>
  );
}

export default App;
