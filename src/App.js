import './App.css';
import MyButton from './components/MyButton';
// import AboutPage from './components/AboutPage';
import Profile from './components/Profile/Profile';
import ShoppingList from './components/ShoppingList/ShoppingList';

function App() {
  return (
    <div>
    {/* <h1>Welcome to my app</h1>
    <AboutPage /> */}
    <MyButton /> 
    <Profile />
    <ShoppingList />
    </div>
    
  );
}

export default App;
