import './App.css';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Footer/>
      <Dashboard/>
    </div>
  );
}

export default App;
