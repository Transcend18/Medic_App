import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from '../screens/Home';
import { Intro } from '../screens/Intro';
import { SignUp } from "../screens/Signup";
import { Login } from '../screens/Login';
import { Profile } from '../screens/Profile';

const Stack = createNativeStackNavigator();

export function StackNavigation () {
    return(
        <Stack.Navigator initialRouteName="Intro">
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="Intro" component={Intro} options={{headerShown:false}} />
            <Stack.Screen name="Signup" component={SignUp} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}