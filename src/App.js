import './App.scss';
import { Navbar } from './components';
import { About, Discover, Home } from './pages';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <Discover />
      <About />
    </div>
  );
}

export default App;
