import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Routing
import PrivateRoute from './components/routing/PrivateRoute';

// Screens
import AuthScreen from './components/screens/AuthScreen';
import HomeScreen from './components/screens/HomeScreen';
import ForgotPasswordScreen from './components/screens/ForgotPasswordScreen';
import CampaignScreen from './components/screens/CampaignScreen';
import MultiplayerScreen from './components/screens/MultiplayerScreen';
import PrepareScreen from './components/screens/PrepareScreen';
import InventoryScreen from './components/screens/InventoryScreen';
import CraftScreen from './components/screens/CraftScreen';
import DecksScreen from './components/screens/DecksScreen';
import ConfigScreen from './components/screens/ConfigScreen';
import StoreScreen from './components/screens/StoreScreen';

// CSS
import './css/index.css'
import './css/AuthScreen.css'
import './css/ForgotPasswordScreen.css'
import './css/HomeScreen.css'
import './css/PrepareScreen.css'
import './css/loader.css'
import './css/utils.css'

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <PrivateRoute 
            exact path="/" 
            component={HomeScreen} />
          <PrivateRoute 
            exact path="/campaign" 
            component={CampaignScreen} />
          <PrivateRoute 
            exact path="/multiplayer" 
            component={MultiplayerScreen} />
          <PrivateRoute 
            exact path="/prepare" 
            component={PrepareScreen} />
          <PrivateRoute 
            exact path="/prepare/inventory" 
            component={InventoryScreen} />
          <PrivateRoute 
            exact path="/prepare/craft" 
            component={CraftScreen} />
          <PrivateRoute 
            exact path="/prepare/decks" 
            component={DecksScreen} />
          <PrivateRoute 
            exact path="/config" 
            component={ConfigScreen} />
          <PrivateRoute 
            exact path="/store" 
            component={StoreScreen} />
          <Route 
            exact path="/auth" 
            component={AuthScreen} />
          <Route 
            exact path="/forgotpassword" 
            component={ForgotPasswordScreen} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
