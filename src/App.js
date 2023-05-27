
import './App.css';
import './Style.css'
import Counter from './components/Counter';
import CreateUser from './components/CreateUser';
import Navbar from './components/Navbar';
import ParentComponent from './components/ParentComponent';
import TextForm from './components/TextForm';
import UserGreeting from './components/UserGreeting';
import YourComponent from './components/YourComponent';
import YourFormComponent from './components/YourComponent';



function App() {
  return (
    <div>
      {/* <Navbar title="TextUtils" aboutText="About TextUtills"/>
      <TextForm heading="Enter Something Here"/>
      <CreateUser/> */}
      {/* <YourFormComponent/> */}
      {/* <YourComponent/> */}
      {/* <Counter/> */}
      {/* <ParentComponent/> */}
      <UserGreeting/>
    </div>
         
         // <Navbar/>
  );
}

export default App;
