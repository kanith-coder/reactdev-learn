import './App.css';
// import MyButton from './components/MyButton';
// import AboutPage from './components/AboutPage';
import Profile from './components/Profile/Profile';
// import ShoppingList from './components/ShoppingList/ShoppingList';
// import Counters from './components/Counters/Counters';
import ShareCounters from './components/Counters/ShareCounters';
function App() {
  return (
    <div>
    {/* <h1>Welcome to my app</h1>
    <AboutPage /> */}
    {/* <MyButton />  */}
    <Profile />
    <br />
    {/* <Counters name="Mybtn1"/> */}
    <ShareCounters />
    <br />
    {/* <Counters name="Mybtn2" /> */}
    {/* <ShoppingList /> */}
    </div>
    
  );
}

export default App;
