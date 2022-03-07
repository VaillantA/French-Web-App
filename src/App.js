//*Components
import Login from './components/Login';
import ListArticles from './components/ListArticles';
import DetailArticle from './components/DetailArticle';

//* Npm packages
import { Routes, Route} from 'react-router-dom';

//*Style
import './App.css';

const App = () =>  {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/list-articles" element={<ListArticles/>}/>
          <Route path="/list-articles/:id" exact element={<DetailArticle/>}/>
        </Routes>
    </div>
  );
}

export default App;
