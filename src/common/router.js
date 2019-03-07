import { createAppContainer, createStackNavigator } from 'react-navigation';
import Login from '../screens/Login';
import Splash from '../screens/Splash';

const MainNavigator = createStackNavigator(
    {
        Splash: {
            screen: Splash
        },
        Login: {
            screen: Login
        }
    },
    {
        initialRouteName: 'Splash',
        headerMode: 'none'
    }
);

const Router = createAppContainer(MainNavigator);
export default Router;
