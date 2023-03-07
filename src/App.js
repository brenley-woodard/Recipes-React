import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import SearchForm from './components/SearchForm/SearchForm';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchForm />
      <Main />
    </div>
  );
}

export default App;
