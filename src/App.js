import "./App.css";
import "./Style.css";
import ParentComp from "./LifeCyclesAndFragments/ParentComp";
import PureComp from "./LifeCyclesAndFragments/PureComp";
import RefsDemo from "./LifeCyclesAndFragments/RefsDemo";
import FocusInput from "./LifeCyclesAndFragments/FocusInput";
import ForwardParentInput from "./LifeCyclesAndFragments/ForwardParentInput";
import PortalDemo from "./LifeCyclesAndFragments/PortalDemo";
import Hero from "./LifeCyclesAndFragments/Hero";
import ErrorBoundary from "./LifeCyclesAndFragments/ErrorBoundary";
import ClickCounter from "./HocContext/ClickCounter";
import HoverCounter from "./HocContext/HoverCounter";
import FeeProgramCreate from "./components/FeeProgramCreate";
import { UserProvider } from "./HocContext/UserContext";
import ComponentC from "./HocContext/ComponentC";
// import Form from './components/Form';
// import MountingLifeCycleA from './components/MountingLifeCycleA';
import Counter from './components/Counter';
// import CreateUser from './components/CreateUser';
// import NameList from './components/NameList';
// import Navbar from './components/Navbar';
// import ParentComponent from './components/ParentComponent';
// import TextForm from './components/TextForm';
// import UserGreeting from './components/UserGreeting';
// import YourComponent from './components/YourComponent';
// import YourFormComponent from './components/YourComponent';

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
      {/* <UserGreeting/> */}
      {/* <NameList/> */}
      {/* <Form/> */}
      {/* <MountingLifeCycleA/> */}
      {/* <ParentComp/> */}
      {/* <RefsDemo/> */}
      {/* <FocusInput/> */}
      {/* <ForwardParentInput/> */}
      {/* <PortalDemo/> */}
      {/* <ErrorBoundary>
        <Hero name="superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero name="joker" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero name="batman" />
      </ErrorBoundary> */}
      <ClickCounter name='Sumit'/>
      <HoverCounter name='Sumit'/>
      {/* <FeeProgramCreate/> */}
      {/* <UserProvider value="Sumit">
        <ComponentC/>
      </UserProvider> */}
      
    </div>

    // <Navbar/>
  );
}

export default App;
