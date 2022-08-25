import './App.scss';
import { Navbar } from './components';
import { About, Discover, Home } from './pages';

function App() {
  return (
    <div className='App'>
      <Navbar />

      <div className='shadow_container'>
        <div className='left_shadow' />
        <div className='right_shadow' />
      </div>


      <Home />
      <Discover />
      <About />
    </div>
  );
}

export default App;
