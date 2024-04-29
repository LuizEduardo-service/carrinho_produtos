import logo from './logo.svg';
import './App.css';
import AppBar from './components/appBar';
import Home from './screens/Home'
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppBar />
        <Home />
      </div>
    </Provider>
  );
}

export default App;
