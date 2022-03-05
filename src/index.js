//* Dependencies import
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

//* Store import
import store from './store/index.js';

//* Import main component App
import App from './App';


const rootReactElement = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

const target = document.getElementById('root');
render(rootReactElement, target);
