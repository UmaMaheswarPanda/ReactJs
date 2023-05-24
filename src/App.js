
import './App.css';
import './Style.css'
import CreateUser from './components/CreateUser';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <div>
      <Navbar title="TextUtils" aboutText="About TextUtills"/>
      <TextForm heading="Enter Something Here"/>
      <CreateUser/>
    </div>
         
         // <Navbar/>
  );
}

export default App;
