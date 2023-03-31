import './App.css';
import { Provider } from 'react-redux';
import Login from './home/view/Login';
import { store } from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>

        <Login />
      </Provider>
    </div>
  );
}

export default App;
